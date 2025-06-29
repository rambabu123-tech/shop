package in.co.hayden.WebScraper.SearchCount;

import in.co.hayden.WebScraper.Product.Product;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.PriorityQueue;


@RestController
@CrossOrigin(origins = {"http://localhost:5173", "https://webscraper.hayden.co.in/"})
@RequestMapping()
public class SearchCountController {
    private ArrayList<String> newSearchTerms = new ArrayList<>();
    @Autowired
    private SearchCountService searchCountService;

    @GetMapping("/allSearchCounts")
    public ResponseEntity<List<SearchCount>> allSearchCounts() {
        try{
        return new ResponseEntity<List<SearchCount>>(searchCountService.topSearch(), HttpStatus.OK);
        }catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
    @PostMapping("/searchCount")
    public ResponseEntity<SearchCount> incrementSearchCount(@RequestBody String searchTerm) {
        try{
        String searchTermWithoutQuotes = searchTerm.replace("\"", "");
        if(! searchCountService.isSearchCountPresent(searchTerm)){
            newSearchTerms.add(searchTerm);
        }
            searchCountService.insertSearchCount(searchTermWithoutQuotes);
        return new ResponseEntity<>(HttpStatus.OK);
    }catch (Exception e) {
        e.printStackTrace();
        return new ResponseEntity<>(HttpStatus.OK);
    }
    }

    @GetMapping("/newSearchTerms")
    public ResponseEntity<ArrayList<String>> newSearchTerms() {
        try{
        return new ResponseEntity<>(newSearchTerms, HttpStatus.OK);
        }catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    @GetMapping("/clearNewSearchTerms")
    public ResponseEntity<ArrayList<String>> clearNewSearchTerms() {
        try{
        newSearchTerms = new ArrayList<>();
        return new ResponseEntity<>( HttpStatus.OK);
        }catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    @GetMapping("/topSearchTerms")
    public ResponseEntity<List<SearchCount>> incrementSearchCount() {
        try{
        // Fetch all search counts from the database
        List<SearchCount> allSearchCounts = searchCountService.topSearch();

        // Create a max heap using PriorityQueue with a custom comparator
        PriorityQueue<SearchCount> maxHeap = new PriorityQueue<>(Comparator.comparingInt(SearchCount::getSearchCount).reversed());
        maxHeap.addAll(allSearchCounts);

        // Retrieve the top 10 elements from the max heap
        List<SearchCount> topSearchTerms = new ArrayList<>();
        int count = 0;
        while (!maxHeap.isEmpty() && count < 10) {
            topSearchTerms.add(maxHeap.poll());
            count++;
        }
//        return topSearchTerms;
        return new ResponseEntity<>(topSearchTerms, HttpStatus.OK);
    }catch (Exception e) {
        e.printStackTrace();
        return new ResponseEntity<>(HttpStatus.OK);
    }
    }
    
    @GetMapping("/wordchecker/{input}")
    public ResponseEntity<List<String>> wordChecker(@PathVariable String input){
        try{
    	String filePath="food_dictionary.txt";
    	List<String> words = searchCountService.readFoodItemsFromFile(filePath);
    	List<String> stringList=searchCountService.sortpairs(input.toLowerCase(),words);
		return new ResponseEntity<>(stringList,HttpStatus.OK);
        }catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.OK);
        }	
    }
    
    }
