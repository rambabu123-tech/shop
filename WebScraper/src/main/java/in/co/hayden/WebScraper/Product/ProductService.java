package in.co.hayden.WebScraper.Product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ProductService {

    // Inverted Index
    static class InvertedIndex {

        private Map<String, Set<Product>> index;

        public InvertedIndex() {
            index = new HashMap<>();
        }

        public void buildIndex(List<Product> productList) {
            for (Product product : productList) {
                String productName = product.getProductName().toLowerCase();

                // Split the product name into individual words (you might want to improve this
                // based on your needs)
                String[] words = productName.split("\\s+");
                for (String word : words) {
                    word = word.toLowerCase();
                    index.putIfAbsent(word, new HashSet<>());
                    index.get(word).add(product);
                }
            }
        }

        public Set<Product> getProducts(String query) {
            HashSet<Product> resultSet = new HashSet<>();
            for (String s : query.split(" ")) {
                HashSet<Product> tempSet = (HashSet<Product>) index.getOrDefault(s.toLowerCase(), new HashSet<>());
                if (resultSet.size() == 0) {
                    resultSet = tempSet;
                } else {
                    resultSet.retainAll(tempSet);
                }
            }
            return resultSet;
        }

    }

    // Inverted Index end
    @Autowired
    private ProductRepository productRepository;

    public List<Product> allProduct() {
        return productRepository.findAll();
    }

    public List<Product> getProductsByName(String query) {
        List<Product> productList = productRepository.findAll();// Add more products as needed
        InvertedIndex invertedIndex = new InvertedIndex();
        invertedIndex.buildIndex(productRepository.findAll());
        return List.copyOf(invertedIndex.getProducts(query));
    }

    public Product insertProduct(Product p) {
        try{
            productRepository.insert(p);
            return p;
        }catch (Exception e) {
            System.out.println("Exception occurred while inserting product: {}"+e.getMessage());
            return p;
        } 
    }

    public Optional<Product> findbyname(String name) {
        return productRepository.findProductByProductName(name);
    }

    public Optional<Product> deleteProduct(String name) {
        return productRepository.deleteProductByProductName(name);
    }

    public Product updateProductName(String name, String newName) {
        try{
        Product temp = productRepository.findProductByProductName(name).get();
        temp.setProductName(newName);
        return productRepository.save(temp);
        }catch (Exception e) {
            System.err.println("Exception occurred while updating product name: {}"+ e.getMessage());
            return null;
        }
    }

    public Product incrementSearchCount(String name) {
        try{
        Product temp = productRepository.findFirstByProductName(name);
        temp.setProductClickCount(temp.productClickCount + 1);
        return productRepository.save(temp);
        }catch (Exception e) {
            System.err.println("Exception occurred while incrementing search count: {}"+ e.getMessage());
            return null;
        }
    }

    // Method to extract the store name from the URL
    private String extractStoreName(Product p, String product) {
        String url = p.productURL.toLowerCase();
        try {
            // Check if the URL is a valid website URL
            if (!PatternFindingKMPAlgorithm.isValidUrl(url)) {
                throw new IllegalArgumentException("Invalid URL: " + url);
            }
            // KMP algorithm used to check if the substring is present in the URL
            if (PatternFindingKMPAlgorithm.search(url, "zehrs")) {
                return "zehrs";
            } else if (PatternFindingKMPAlgorithm.search(url, "metro")) {
                return "metro";
            } else if (PatternFindingKMPAlgorithm.search(url, "nofrills")) {
                return "nofrills";
            } else {
                return null; // Return null if the URL doesn't match any of the specified stores and product
            }
        } catch (Exception e) {
            // Handle the exception, e.g., log it or print an error message
            System.err.println("Exception occurred while extracting store name: " + e.getMessage());
            return null;
        }
    }

    public TreeMap<String, Integer> processUrls(List<Product> products, String productSearch) {
        // TreeMap to store key-value pairs (String -> Integer)

        TreeMap<String, Integer> store = new TreeMap<>();
        store.put("zehrs", 0);
        store.put("metro", 0);
        store.put("nofrills", 0);
        // Loop through the URLs
        for (Product p : products) {
            // Extract the store name and product type (e.g., "eggs") from the URL
            String storeName = extractStoreName(p, productSearch.toLowerCase());
            if (storeName != null) {
                store.put(storeName, store.getOrDefault(storeName, 0) + 1);
            }
        }

        return store;
    }

    public List<Product> pageRank(List<Product> productList) { 
        //Object is created for the class PageRANKAVLTree       
        PageRankAVLTree pagerank = new PageRankAVLTree();
        for (Product product : productList) {
            //All the products are inserted 
            pagerank.insert(product);
        }
        productList = pagerank.getPageRank();
        //AVL Tree is cleared for future use
        pagerank.clear();
        return productList;
    }

    public Product getBestDeal(List<Product> productList)
    {
        //Object is created for the class BestDealBST
        BestDealBST bestDeal = new BestDealBST();
        // Convert comparison details to double and update click count
        for (Product product : productList) {
//            product.setProductComparisonDetails(product.getUpdatedProductComparisonDetails());
            bestDeal.insert(product);
        }
        return bestDeal.getBestDeal();
    }

}