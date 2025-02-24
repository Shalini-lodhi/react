# Tailwind || Props

## **1. Tailwind CSS**  
### **What is Tailwind CSS?**  
- A **utility-first CSS framework** that helps style components quickly.  
- Instead of writing custom CSS, you apply predefined classes directly to elements.  
- Makes styling **fast, flexible, and responsive**.  

### **Why Use Tailwind CSS?**  
✅ No need to write long CSS files.  
✅ Provides ready-to-use utility classes (e.g., `bg-blue-500`, `text-center`).  
✅ Helps in building **custom designs** without pre-made components.  
✅ Works great with React, improving development speed.  

### **Example Usage in React**  
```jsx
import React from "react";

const Button = () => {
  return <button className="bg-blue-500 text-white px-4 py-2 rounded">Click Me</button>;
};

export default Button;
```  
- `bg-blue-500` → Sets background color to blue.  
- `text-white` → Text color is white.  
- `px-4 py-2` → Adds padding.  
- `rounded` → Makes button corners rounded.  

---

## **2. Props in ReactJS**  
### **What are Props?**  
- **Props (short for "Properties")** are used to pass data from **parent to child components** in React.  
- They are **read-only** (cannot be modified by the child component).  

### **Why Use Props?**  
✅ Helps in **reusing components** by passing dynamic data.  
✅ Makes components **more flexible** and **configurable**.  

### **Example of Using Props**  
```jsx
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

const App = () => {
  return <Greeting name="Shalini" />;
};

export default App;
```
- Here, `"Shalini"` is passed as a prop (`name`) to the `Greeting` component.  
- `props.name` dynamically updates the text inside the `<h1>`.  

### **Props with Destructuring (Cleaner Code)**  
```jsx
const Greeting = ({ name }) => <h1>Hello, {name}!</h1>;
```


### **Key Differences**  
| **Tailwind CSS** | **Props in React** |
|-----------------|------------------|
| A CSS framework for styling | A way to pass data between components |
| Uses utility classes like `bg-red-500` | Uses attributes like `name="John"` |
| No logic, only styling | Helps make components dynamic |
