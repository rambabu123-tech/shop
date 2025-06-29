

package in.co.hayden.WebScraper.Product;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "products")
public class Product {
    @Id
    private ObjectId id;
    String productName;
    String productSellingPrice;
    String productThumbnail;
    String productComparisonDetails;
    String updatedProductComparisonDetails;
    String productURL;
    int productClickCount;

    public Product(String productName, String productSellingPrice, String productThumbnail, String productComparisonDetails, String productURL) {
        this.productName = productName;
        this.productSellingPrice = productSellingPrice;
        this.productThumbnail = productThumbnail;
        this.productComparisonDetails=productComparisonDetails; // Convert and set comparison details
        this.productURL = productURL;
        this.productClickCount = 0;
        setProductComparisonDetails(productComparisonDetails);

    }
    private static final String NUMERIC_PATTERN = "\\d+(\\.\\d+)?";

    // Updated method to set comparison details as a double value
    public void setProductComparisonDetails(String productComparisonDetails) {
        try{
        double numericValue = extractNumericValue(productComparisonDetails);
//        System.out.println(productComparisonDetails);
        this.updatedProductComparisonDetails = String.valueOf(numericValue);
        }catch (NumberFormatException e) {
            System.err.println("Error parsing numeric value: " + e.getMessage());
        }
    }


    // Updated method to extract numeric value and perform unit conversion using regex
    private double extractNumericValue(String comparisonDetails) {
        // Use regex to match numeric values and units
        String regex = "\\$?(\\d*\\.?\\d+)\\s*\\/\\s*(\\d*\\.?\\d+)?\\s*([a-zA-Z]+)?";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(comparisonDetails);

        double numericValue = 0.0;

        if (matcher.find()) {
            try{
            double value = Double.parseDouble(matcher.group(1));
            double divisor = matcher.group(2) != null ? Double.parseDouble(matcher.group(2)) : 1.0;
            String unit = matcher.group(3);

            // Use regex to match units and convert accordingly
            if (unit != null) {
                switch (unit.toLowerCase()) {
                    case "kg":
                        numericValue = value / divisor * 1000;  // Convert kg to g
                        break;
                    case "litre":
                        numericValue = value / divisor * 1000;  // Convert litre to ml
                        break;
                    case "lb":
                        numericValue = value / divisor * 453.592;  // Convert lb to g
                        break;
                    // Add more cases for other units if needed
                    default:
                        numericValue = value / divisor; // Use as is if no unit or unknown unit
                        break;
                }
            } else {
                numericValue = value / divisor; // Use as is if no unit
            }
        } catch (NumberFormatException e) {
            System.err.println("Error parsing numeric value: " + e.getMessage());
        }
        }

        return numericValue;
    }
}
