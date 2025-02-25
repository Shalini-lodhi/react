### **How can you create a counter using a callback function in `useState`? Why is it useful?**  

### **Answer:**  
In React, when updating state based on the **previous state**, it's best to use a **callback function** inside `useState`. This ensures that the update happens correctly, even when there are multiple updates in quick succession.  


### **Why Use a Callback in `useState`?**  
- **Ensures correct state updates** when depending on the previous state.  
- **Prevents stale state issues**, especially in asynchronous updates.  
- **Useful in event handlers, timers, and concurrent rendering scenarios.**  


### **Example: Counter with Callback in `useState`**
```jsx
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // Updating state using a callback
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
```

### **How It Works?**  
1. `useState(0)` initializes `count` to `0`.  
2. When clicking the **Increment** button, `setCount(prevCount => prevCount + 1)` updates the state.  
3. The **callback function** (`prevCount => prevCount + 1`) ensures that React always gets the latest state.  


### **What If We Don't Use a Callback?**  
If we write:  
```jsx
setCount(count + 1);
```
- This can cause **stale state issues**, especially when updating the state multiple times in a row.  
- Example problem: If you call `setCount(count + 1)` multiple times in a row, React may batch updates and not increment correctly.  

---

### **Example: Wrong Way (Without Callback)**
```jsx
const incrementWrong = () => {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
};
```
- Here, the `count` may not increase correctly because `setCount` **does not see the updated value immediately**.  
- Using the **callback version** ensures each update gets the latest value.  


### **Multiple Increments with Callback**
```jsx
const incrementByThree = () => {
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
};
```
- Here, the counter increases correctly by **3** because each update gets the latest `prevCount`.  


### **Key Takeaways**
✅ Always use `setState(prevState => newState)` when updating state based on the previous value.  
✅ Helps avoid **stale state issues**.  
✅ Essential when updating state multiple times in a row.  