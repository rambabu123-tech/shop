package in.co.hayden.WebScraper.Product;

import java.util.LinkedList;

class BSTNode {
    LinkedList<Product> products;
    double comparisonDetails;
    BSTNode left, right;

    public BSTNode(Product product) {
        this.products = new LinkedList<>();
        this.products.add(product);
        this.comparisonDetails = (double) convertComparisonDetails(product.getUpdatedProductComparisonDetails());
        this.left = this.right = null;
    }

    private double convertComparisonDetails(String comparisonDetails) {
        try {
            return Double.parseDouble(comparisonDetails);
        } catch (NumberFormatException e) {
            return 0.0; 
        }
    }

}

public class BestDealBST {
    private BSTNode root;

    public BestDealBST() {
        this.root = null;
    }

    public void insert(Product product) {
        try {
            root = insert(root, product);
        } catch (Exception e) {
//            System.err.println("Exception occurred during insertion: " + e.getMessage());
        }
    }

    private BSTNode insert(BSTNode node, Product product) {
        if (node == null) {
            return new BSTNode(product);
        }
        try{
        double productValue = convertComparisonDetails(product.getProductComparisonDetails());
        if (productValue == node.comparisonDetails) {
            // Same comparison details, add to the linked list in the node
            node.products.add(product);
        } else if (productValue < node.comparisonDetails) {
            node.left = insert(node.left, product);
        } else {
            node.right = insert(node.right, product);
        }
    }catch (Exception e) {
        System.err.println("Exception occurred during insertion: " + e.getMessage());
    }
        return node;
    }

    private double convertComparisonDetails(String comparisonDetails) {
        try {
            return Double.parseDouble(comparisonDetails);
        } catch (NumberFormatException e) {
            return 0.0; 
        }
    }

    public void inorder() {
        inorder(root);
    }

    private void inorder(BSTNode root) {
        if (root != null) {
            inorder(root.left);
            inorder(root.right);
        }
    }

    public Product getBestDeal() {
        BSTNode leftmostNode = getLeftmostNode(root);
        if (leftmostNode != null && !leftmostNode.products.isEmpty()) {
            return leftmostNode.products.getFirst();
        }
        return null;
    }

    private BSTNode getLeftmostNode(BSTNode node) {
        if (node == null || node.left == null) {
            return node;
        }
        return getLeftmostNode(node.left);
    }

    public void clear() {
        root = null;
    }
    public static void main(String[] args) {
    }
}
