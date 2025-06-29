package in.co.hayden.WebScraper.SearchCount;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@AllArgsConstructor
@Data
@NoArgsConstructor
@Document(collection = "searchcounts")
public class SearchCount {
    @Id
    @JsonSerialize(using= ToStringSerializer.class)
    private ObjectId id;
    String searchTerm;
    int searchCount;
}

class StringIntPair {
    String key;
    int value;

    public StringIntPair(String key, int value) {
        this.key = key;
        this.value = value;
    }
    public int getValue() {
    	return this.value;
    	
    }
}