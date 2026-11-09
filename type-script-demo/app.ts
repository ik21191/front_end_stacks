let message: string = "Hello, TypeScript!";
console.log(message);

interface Product {
    id: number;
    title: string;
    price: number;
    discounted?: boolean; // The '?' means this property is optional
    displayProductInfo(): string; // Display product information using a method
    displayDetails: (name: string) => string; // Display product details using a function type
}

const laptop: Product = {
    id: 1,
    title: "Pro Book",
    price: 999,
    displayProductInfo(): string {
        return `${this.title} costs $${this.price}`;
    },
    displayDetails: (name: string): string => {
      console.log(`Hello ${name}, here are the product details:`);
      return `Product ID: ${laptop.id}, Title: ${laptop.title}, Price: $${laptop.price}`;
    }
};

console.log(laptop.displayProductInfo()); // Output: Pro Book costs $999
console.log(laptop.displayDetails("Alice")); // Output: Product ID: 1, Title: Pro Book, Price: $999

class User {
  // 1. Explicitly declare properties and their types
  id: number;
  name: string;

  // 2. Define the constructor with type parameters
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  // 3. Define a method with type safety
  getDetails(): string {
    return `User ${this.name} has ID: ${this.id}`;
  }
}

// Usage
const user1 = new User(101, "Alice");
console.log(user1.getDetails()); // Output: User Alice has ID: 101

interface ButtonProps {
  label: string;
  onClick: () => string;
  disabled?: boolean; // Optional prop
}

const button: ButtonProps = {
  label: "Submit",
  onClick: () => {
    console.log("Button clicked!");
    return "Button clicked!";
  }
};

button.onClick(); // Simulate button click
