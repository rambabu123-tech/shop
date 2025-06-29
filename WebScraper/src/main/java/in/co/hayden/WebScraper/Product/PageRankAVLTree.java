package in.co.hayden.WebScraper.Product;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class PageRankAVLTree {

    private Node root;

    public void insert(Product product) {
        try{
        root = insert(root, product);
        }catch (Exception e) {
            System.err.println("Exception occurred during insertion: " + e.getMessage());
        }
    }

    public List<Product> getPageRank() {
        List<Product> pageRankList = new ArrayList<>();
        inOrderTraversal(root, pageRankList);
        return reverseList(pageRankList);
    }

    public void clear() {
        root = null;
    }

    private Node insert(Node node, Product product) {
        if (node == null) {
            return new Node(product);
        }
        try{
        int compareResult = Integer.compare(product.getProductClickCount(), node.getProduct().getProductClickCount());

        if (compareResult < 0) {
            node.setLeft(insert(node.getLeft(), product));
        } else if (compareResult > 0) {
            node.setRight(insert(node.getRight(), product));
        } else {
            node.getProductList().add(product);
        }

        updateHeightAndBalance(node);

        return balance(node);
    }catch (Exception e) {
        System.err.println("Exception occurred during insertion: " + e.getMessage());
        throw e;
    }
    }

    private List<Product> reverseList(List<Product> list) {
        List<Product> reversedList = new ArrayList<>();
        for (int i = list.size() - 1; i >= 0; i--) {
            reversedList.add(list.get(i));
        }
        return reversedList;
    }

    private void inOrderTraversal(Node node, List<Product> result) {
        if (node != null) {
            inOrderTraversal(node.getLeft(), result);
            result.addAll(node.getProductList());
            inOrderTraversal(node.getRight(), result);
        }
    }

    private Node balance(Node node) {
        int balanceFactor = getBalanceFactor(node);

        if (balanceFactor > 1) {
            if (getBalanceFactor(node.getRight()) < 0) {
                node.setRight(rotateRight(node.getRight()));
            }
            return rotateLeft(node);
        }

        if (balanceFactor < -1) {
            if (getBalanceFactor(node.getLeft()) > 0) {
                node.setLeft(rotateLeft(node.getLeft()));
            }
            return rotateRight(node);
        }

        return node;
    }

    private Node rotateRight(Node y) {
        if (y == null || y.left == null) {
            return y;
        }

        Node x = y.left;
        Node T2 = x.right;

        x.right = y;
        y.left = T2;

        y.height = Math.max(getHeight(y.left), getHeight(y.right)) + 1;
        x.height = Math.max(getHeight(x.left), getHeight(x.right)) + 1;

        return x;
    }

    private Node rotateLeft(Node x) {
        if (x == null || x.right == null) {
            return x;
        }

        Node y = x.right;
        Node T2 = y.left;

        y.left = x;
        x.right = T2;

        x.height = Math.max(getHeight(x.left), getHeight(x.right)) + 1;
        y.height = Math.max(getHeight(y.left), getHeight(y.right)) + 1;

        return y;
    }

    private int getBalanceFactor(Node node) {
        return getHeight(node.getRight()) - getHeight(node.getLeft());
    }

    private void updateHeightAndBalance(Node node) {
        node.setHeight(1 + Math.max(getHeight(node.getLeft()), getHeight(node.getRight())));
    }

    private int getHeight(Node node) {
        return node == null ? 0 : node.getHeight();
    }

    private static class Node {
        private Product product;
        private Node left;
        private Node right;
        private int height;
        private List<Product> productList;

        public Node(Product product) {
            this.product = product;
            this.height = 1;
            this.productList = new LinkedList<>();
            this.productList.add(product);
        }

        public Product getProduct() {
            return product;
        }

        public void setLeft(Node left) {
            this.left = left;
        }

        public Node getLeft() {
            return left;
        }

        public void setRight(Node right) {
            this.right = right;
        }

        public Node getRight() {
            return right;
        }

        public int getHeight() {
            return height;
        }

        public void setHeight(int height) {
            this.height = height;
        }

        public List<Product> getProductList() {
            return productList;
        }
    }
}
