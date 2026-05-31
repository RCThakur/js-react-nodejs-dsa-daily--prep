// =======================================
// MongoDB Aggregation Assignment
// Name: Your Name
// Database: ecomdb
// =======================================

// =======================================
// STEP 1: CREATE DATABASE
// =======================================

// =======================================
// STEP 2: DATASET SETUP
// =======================================

// Customers
db.customers.insertMany([
  { _id: "C001", name: "Aarav Shah", city: "Mumbai", tier: "gold", age: 32 },
  {
    _id: "C002",
    name: "Priya Nair",
    city: "Bangalore",
    tier: "silver",
    age: 27,
  },
  { _id: "C003", name: "Rohan Mehta", city: "Delhi", tier: "gold", age: 45 },
  { _id: "C004", name: "Sneha Iyer", city: "Chennai", tier: "bronze", age: 22 },
  { _id: "C005", name: "Karan Gupta", city: "Mumbai", tier: "silver", age: 38 },
  {
    _id: "C006",
    name: "Divya Reddy",
    city: "Hyderabad",
    tier: "gold",
    age: 29,
  },
  { _id: "C007", name: "Amit Joshi", city: "Pune", tier: "bronze", age: 41 },
]);

// Products
db.products.insertMany([
  {
    _id: "P001",
    name: "Laptop",
    category: "Electronics",
    price: 75000,
    stock: 10,
  },
  {
    _id: "P002",
    name: "Phone",
    category: "Electronics",
    price: 30000,
    stock: 25,
  },
  {
    _id: "P003",
    name: "Desk Chair",
    category: "Furniture",
    price: 12000,
    stock: 5,
  },
  {
    _id: "P004",
    name: "Headphones",
    category: "Electronics",
    price: 5000,
    stock: 50,
  },
  {
    _id: "P005",
    name: "Bookshelf",
    category: "Furniture",
    price: 8000,
    stock: 8,
  },
  {
    _id: "P006",
    name: "Webcam",
    category: "Electronics",
    price: 3500,
    stock: 30,
  },
  {
    _id: "P007",
    name: "Keyboard",
    category: "Electronics",
    price: 2500,
    stock: 20,
  },
]);

// Orders
db.orders.insertMany([
  {
    _id: "O001",
    customerId: "C001",
    productId: "P001",
    qty: 1,
    status: "delivered",
    orderDate: new Date("2024-01-15"),
    amount: 75000,
  },
  {
    _id: "O002",
    customerId: "C002",
    productId: "P004",
    qty: 2,
    status: "delivered",
    orderDate: new Date("2024-01-20"),
    amount: 10000,
  },
  {
    _id: "O003",
    customerId: "C001",
    productId: "P002",
    qty: 1,
    status: "shipped",
    orderDate: new Date("2024-02-05"),
    amount: 30000,
  },
  {
    _id: "O004",
    customerId: "C003",
    productId: "P003",
    qty: 2,
    status: "delivered",
    orderDate: new Date("2024-02-10"),
    amount: 24000,
  },
  {
    _id: "O005",
    customerId: "C005",
    productId: "P006",
    qty: 3,
    status: "pending",
    orderDate: new Date("2024-02-18"),
    amount: 10500,
  },
  {
    _id: "O006",
    customerId: "C002",
    productId: "P007",
    qty: 1,
    status: "delivered",
    orderDate: new Date("2024-03-01"),
    amount: 2500,
  },
  {
    _id: "O007",
    customerId: "C006",
    productId: "P002",
    qty: 2,
    status: "shipped",
    orderDate: new Date("2024-03-05"),
    amount: 60000,
  },
  {
    _id: "O008",
    customerId: "C004",
    productId: "P005",
    qty: 1,
    status: "cancelled",
    orderDate: new Date("2024-03-10"),
    amount: 8000,
  },
  {
    _id: "O009",
    customerId: "C001",
    productId: "P004",
    qty: 4,
    status: "delivered",
    orderDate: new Date("2024-03-15"),
    amount: 20000,
  },
  {
    _id: "O010",
    customerId: "C007",
    productId: "P001",
    qty: 1,
    status: "pending",
    orderDate: new Date("2024-03-20"),
    amount: 75000,
  },
  {
    _id: "O011",
    customerId: "C003",
    productId: "P007",
    qty: 3,
    status: "delivered",
    orderDate: new Date("2024-04-01"),
    amount: 7500,
  },
  {
    _id: "O012",
    customerId: "C005",
    productId: "P003",
    qty: 1,
    status: "shipped",
    orderDate: new Date("2024-04-05"),
    amount: 12000,
  },
]);

// Reviews
db.reviews.insertMany([
  {
    _id: "R001",
    productId: "P001",
    customerId: "C001",
    rating: 5,
    tags: ["fast", "premium", "value"],
  },
  {
    _id: "R002",
    productId: "P002",
    customerId: "C002",
    rating: 4,
    tags: ["portable", "camera"],
  },
  {
    _id: "R003",
    productId: "P004",
    customerId: "C001",
    rating: 3,
    tags: ["average", "portable"],
  },
  {
    _id: "R004",
    productId: "P003",
    customerId: "C003",
    rating: 5,
    tags: ["sturdy", "premium"],
  },
  {
    _id: "R005",
    productId: "P002",
    customerId: "C006",
    rating: 4,
    tags: ["portable", "value"],
  },
  {
    _id: "R006",
    productId: "P007",
    customerId: "C002",
    rating: 4,
    tags: ["value", "work"],
  },
  {
    _id: "R007",
    productId: "P001",
    customerId: "C007",
    rating: 5,
    tags: ["premium", "fast"],
  },
]);

// PROBLEM 1

db.orders.aggregate([
  {
    $group: {
      _id: "$status",
      totalOrders: { $sum: 1 },
      totalRevenue: { $sum: "$amount" },
    },
  },
  {
    $sort: {
      totalRevenue: -1,
    },
  },
]);

// PROBLEM 2

db.orders.aggregate([
  {
    $match: {
      status: "delivered",
    },
  },
  {
    $group: {
      _id: "$customerId",
      totalSpent: {
        $sum: "$amount",
      },
    },
  },
  {
    $sort: {
      totalSpent: -1,
    },
  },
  {
    $limit: 3,
  },
]);

// PROBLEM 3

db.orders.aggregate([
  {
    $group: {
      _id: "$productId",
      totalQtySold: {
        $sum: "$qty",
      },
    },
  },
]);
