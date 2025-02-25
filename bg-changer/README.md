## **`onClick` Property in a Button (ReactJS)**  

#### **What is `onClick` in React?**  
- The **`onClick`** property in React is an event handler that allows a function to be executed when a user clicks a button.  
- It is similar to JavaScript’s `onclick` event but uses JSX syntax.  

### **Basic Syntax**  
```jsx
<button onClick={functionName}>Click Me</button>
```
- **`onClick={functionName}`** → Calls a function when the button is clicked.  
- The function should **not** have parentheses (`()`) inside `onClick`, otherwise, it will run immediately instead of waiting for a click.  


### **Example 1: Basic `onClick` Event**
```jsx
import React from "react";

const App = () => {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
};

export default App;
```
✅ When the button is clicked, the `handleClick` function runs and shows an alert.  


### **Example 2: Using `onClick` to Update State**  
```jsx
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
```
✅ Clicking the button **updates the count** using `setCount(count + 1)`.  


### **Example 3: Passing Arguments in `onClick`**  
```jsx
const greetUser = (name) => {
  alert(`Hello, ${name}!`);
};

<button onClick={() => greetUser("Shalini")}>Greet Me</button>;
```
✅ The function `greetUser("Shalini")` runs when the button is clicked.  
✅ **Using an arrow function** inside `onClick` ensures it runs only when clicked.  


### **Common Mistakes to Avoid**  
❌ **Calling the function directly inside `onClick`**  
```jsx
<button onClick={greetUser("Shalini")}>Greet Me</button> 
```
- **Wrong**: The function runs immediately when the component renders.  
- **Fix**: Use an arrow function → `onClick={() => greetUser("Shalini")}`  


### **Key Takeaways**  
✅ `onClick` is used to handle button clicks in React.  
✅ Pass a function reference (`onClick={handleClick}`) instead of calling it directly.  
✅ Use arrow functions when passing parameters (`onClick={() => functionName(param)}`).  
✅ Can be used to update state, trigger events, or execute logic when clicked.  
