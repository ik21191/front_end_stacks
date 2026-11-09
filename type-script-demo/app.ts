let message: string = "Hello, TypeScript!";
console.log(message);

interface Product {
    id: number;
    title: string;
    price: number;
    discounted?: boolean; // The '?' means this property is optional
}

const laptop: Product = {
    id: 1,
    title: "Pro Book",
    price: 999
};

console.log(`Product: ${laptop.title}, Price: $${laptop.price}`);

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