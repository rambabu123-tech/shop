package in.co.hayden.WebScraper.SearchCount;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.PriorityQueue;

@Service
public class SearchCountService {
    @Autowired
    private SearchCountRepository searchCountRepository;


    public SearchCount insertSearchTerm(String searchTerm){
        try{
            SearchCount newSearchCount = new SearchCount();
            newSearchCount.setSearchTerm(searchTerm);
            newSearchCount.setSearchCount(0);
            return searchCountRepository.insert(newSearchCount);
        }catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to insert search term");
        }
    }

    public List<SearchCount> allSearchCounts(){
        try{
        List<SearchCount> searchCounts = searchCountRepository.findAll();
        return searchCountRepository.findAll();
        }catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to retrieve all search counts");
        }
    }

    public List<SearchCount> topSearch()
    {
        return searchCountRepository.findAll();
    }

    public boolean isSearchCountPresent(String searchTerm){
        Optional<SearchCount> existingSearchCountOptional = searchCountRepository.findBySearchTerm(searchTerm);
        return existingSearchCountOptional.isPresent();
    }
    public SearchCount insertSearchCount(String searchTerm){
        Optional<SearchCount> existingSearchCountOptional = searchCountRepository.findBySearchTerm(searchTerm);
        if (existingSearchCountOptional.isPresent()) {
            // If the search term already exists, increment the search count
            SearchCount existingSearchCount = existingSearchCountOptional.get();

            existingSearchCount.setSearchCount(existingSearchCount.getSearchCount() + 1);
            return searchCountRepository.save(existingSearchCount);
        } else {
            // If the search term doesn't exist, insert a new search count with count 1
            SearchCount newSearchCount = new SearchCount();
            newSearchCount.setSearchTerm(searchTerm);
            newSearchCount.setSearchCount(1);
            return searchCountRepository.insert(newSearchCount);
        }

    }
    
//    public Optional<SearchCount> checkIfSearchTermExist(String name){
//        return searchCountRepository.findSearchCountBySearchTerm(name).get();
//    }
    
//edit distance
	public int editDistance(String stringone, String stringtwo) {
        int len1 = stringone.length();
        int len2 = stringtwo.length();

        int[][] matrix = new int[len1 + 1][len2 + 1];

        for (int i = 0; i <= len1; i++) {
            matrix[i][0] = i;
        }

        for (int j = 0; j <= len2; j++) {
            matrix[0][j] = j;
        }

        for (int i = 0; i < len1; i++) {
            char characterone = stringone.charAt(i);
            for (int j = 0; j < len2; j++) {
                char charactertwo = stringtwo.charAt(j);

                if (characterone == charactertwo) {
                    matrix[i + 1][j + 1] = matrix[i][j];
                } else {
                    int a = matrix[i][j] + 1;
                    int b = matrix[i][j + 1] + 1;
                    int c = matrix[i + 1][j] + 1;

                    int min = a > b ? b : a;
                    min = c > min ? min : c;
                    matrix[i + 1][j + 1] = min;
                }
            }
        }

        return matrix[len1][len2];
    }
	
	public List<String> sortpairs(String input, List<String> words) {
//		use priority queue to sort key value pair for 
		List<String> stringList = new ArrayList<>();
		PriorityQueue<StringIntPair> priorityQueue = new PriorityQueue<>((pair1, pair2) -> Integer.compare(pair1.getValue(), pair2.getValue()));
	    for (String word : words) {
	        priorityQueue.add(new StringIntPair(word,editDistance(input, word)));

	    }
//	    threshold set to top three values
	    int n = 3;
	    while (!priorityQueue.isEmpty() && n >0) {
	        StringIntPair pair = priorityQueue.poll();
	        stringList.add(pair.key);
	        
	        n-=1;
	    }
        if(stringList.get(0).equals(input)){
            return new ArrayList<String>();
        }
	    return stringList;
	}
	
	
    public List<String> readFoodItemsFromFile(String filePath) {
        List<String> foodItems = new ArrayList<>();

        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            String line;
            while ((line = br.readLine()) != null) {
//                each line in the file represents a food item
                foodItems.add(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return foodItems;
    }

	
	
	
	
	

}
