# Virtual DOM | Fiber | Reconciliation

**Doc** : [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)

### **1. Virtual DOM (VDOM)**  
- **What is Virtual DOM?**  
  - A **lightweight copy** of the actual DOM.  
  - React uses it to update UI efficiently without directly modifying the real DOM.  

- **How it Works?**  
  1. React creates a Virtual DOM tree.  
  2. When the state changes, React updates only the necessary parts in the Virtual DOM.  
  3. React **compares** the new Virtual DOM with the previous one (Diffing).  
  4. Only the changed elements are updated in the real DOM (Reconciliation).  

- **Why is Virtual DOM faster?**  
  - Updating the **real DOM is slow** because it re-renders everything.  
  - Virtual DOM **minimizes updates**, making React apps more efficient.  


### **2. React Fiber**  
- **What is Fiber?**  
  - A **new reconciliation algorithm** introduced in React 16.  
  - Makes UI rendering **smoother and faster**, especially for complex UIs.  

- **Why was Fiber introduced?**  
  - The old Virtual DOM algorithm updated the entire UI in one go, causing lag.  
  - Fiber **breaks UI updates into small tasks**, making them more responsive.  

- **Key Benefits of Fiber**  
  ✅ **Better Performance** → Handles large updates smoothly.  
  ✅ **Prioritization** → Important updates (like user interactions) happen first.  
  ✅ **Pausing & Resuming** → React can pause work and continue later (like multitasking).  


### **3. Reconciliation**  
- **What is Reconciliation?**  
  - The process of updating the real DOM efficiently when state or props change.  

- **How does React do Reconciliation?**  
  1. **Compares old and new Virtual DOM** (Diffing).  
  2. Finds **the smallest possible changes**.  
  3. Updates only the necessary parts of the real DOM.  

- **React’s Diffing Algorithm**  
  - If an element **type changes** → React removes the old one and creates a new one.  
  - If a component has **children** → React updates only the changed ones.  
  - Uses **Keys** to track elements efficiently (important for lists).  


### **In Simple Terms**  
🟢 **Virtual DOM** → A fast, temporary copy of the real DOM.  
⚡ **Fiber** → A new way to efficiently update the UI in small steps.  
🔄 **Reconciliation** → The process of applying changes to the real DOM efficiently.  
