package in.co.hayden.WebScraper.Product;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.regex.PatternSyntaxException;

public class PatternFindingKMPAlgorithm {
    public static boolean isValidUrl(String url) {
         // Regex pattern for a valid URL
         String urlRegex = "https://www\\.(zehrs|nofrills|metro)\\.ca/.*";
         try{
        Pattern pattern = Pattern.compile(urlRegex);
        Matcher matcher = pattern.matcher(url);
        return matcher.matches();
         }catch (PatternSyntaxException e) {
            System.err.println("Invalid regex pattern: " + e.getMessage());
            return false;
        }

    }
    

    private static int[] computeLPSArray(String pattern) {
        int m = pattern.length();
        int[] lps = new int[m];
        int len = 0;
        int i = 1;
        try{
        while (i < m) {
            if (pattern.charAt(i) == pattern.charAt(len)) {
                len++;
                lps[i] = len;
                i++;
            } else {
                if (len != 0) {
                    len = lps[len - 1];
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }

        return lps;
    }catch (Exception e) {
        System.err.println("Exception occurred in computeLPSArray: " + e.getMessage());
    }

    return lps;

    }

    public static boolean search(String text, String pattern) {
        int n = text.length();
        int m = pattern.length();
        int[] lps = computeLPSArray(pattern);
        int i = 0;
        int j = 0;

        while (i < n) {
            if (pattern.charAt(j) == text.charAt(i)) {
                i++;
                j++;
            }

            if (j == m) {
                return true; 
            } else if (i < n && pattern.charAt(j) != text.charAt(i)) {
                if (j != 0) {
                    j = lps[j - 1];
                } else {
                    i++;
                }
            }
        }

        return false; 
    }
}
