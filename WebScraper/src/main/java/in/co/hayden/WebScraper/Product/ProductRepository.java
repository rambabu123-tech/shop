package in.co.hayden.WebScraper.Product;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductRepository extends MongoRepository<Product, ObjectId> {
    Optional<Product> findProductByProductName(String name);
    Optional<Product> deleteProductByProductName(String name);
    Product findFirstByProductName(String productName);


}
