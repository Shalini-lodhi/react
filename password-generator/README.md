# **Random Password Generator in React**  
This project is a **Random Password Generator** built using **React** with the following functionalities:  
- **`useState`** → To manage password, length, and checkbox states.  
- **`useEffect`** → To update the password whenever settings change.  
- **`useRef`** → To copy the generated password to the clipboard.  
- **`useCallback`** → To optimize function performance by preventing unnecessary re-renders.  

---

## **Project Features**  
✅ Generate a **random password** dynamically.  
✅ Adjust **password length** using a **slider**.  
✅ Include/exclude **numbers** and **special characters** using checkboxes.  
✅ **Copy password** to the clipboard with one click.  

---

## **Project Code Implementation**  

### **1️⃣ Install Dependencies & Setup Project**  
Create a new React project and install Tailwind CSS for styling:  
```bash
npx create-react-app password-generator
cd password-generator
npm install
```
Add **Tailwind CSS** (Optional) for styling:  
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
Configure **`tailwind.config.js`**:  
```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
---

### **2️⃣ Create `PasswordGenerator.js` Component**
```jsx
import React, { useState, useEffect, useRef, useCallback } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  // Function to generate password
  const generatePassword = useCallback(() => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) characters += "0123456789";
    if (includeSpecialChars) characters += "!@#$%^&*()_+-=[]{}|;:'\",.<>?/";

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
  }, [length, includeNumbers, includeSpecialChars]);

  // useEffect to update password when dependencies change
  useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeSpecialChars, generatePassword]);

  // Copy password to clipboard
  const copyToClipboard = () => {
    passwordRef.current?.select();
    navigator.clipboard.writeText(password);
    alert("Password Copied!");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">🔐 Password Generator</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 text-center">
        <div className="flex">
          <input
            ref={passwordRef}
            type="text"
            value={password}
            readOnly
            className="w-full px-3 py-2 rounded-l bg-gray-700 text-white outline-none"
          />
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-r"
          >
            📋 Copy
          </button>
        </div>

        {/* Slider for length */}
        <div className="mt-4">
          <label>Password Length: {length}</label>
          <input
            type="range"
            min="6"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Checkboxes */}
        <div className="flex justify-between mt-4">
          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            Include Numbers
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeSpecialChars}
              onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
            />
            Special Characters
          </label>
        </div>

        <button
          onClick={generatePassword}
          className="mt-4 px-4 py-2 bg-green-500 hover:bg-green-700 rounded"
        >
          🔄 Generate New Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
```

---

## **3️⃣ Understanding Hooks Used**
### **1️⃣ `useState` → Managing State**  
- `length`: Stores password length.  
- `includeNumbers`: Boolean for including numbers.  
- `includeSpecialChars`: Boolean for including special characters.  
- `password`: Stores the generated password.  

### **2️⃣ `useEffect` → Auto-Update Password**  
```js
useEffect(() => {
  generatePassword();
}, [length, includeNumbers, includeSpecialChars, generatePassword]);
```
- Whenever **length, includeNumbers, or includeSpecialChars** change, React **re-generates the password** automatically.  

### **3️⃣ `useCallback` → Preventing Unnecessary Function Re-Creation**  
```js
const generatePassword = useCallback(() => {
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (includeNumbers) characters += "0123456789";
  if (includeSpecialChars) characters += "!@#$%^&*()_+-=[]{}|;:'\",.<>?/";
  
  let generatedPassword = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    generatedPassword += characters[randomIndex];
  }
  setPassword(generatedPassword);
}, [length, includeNumbers, includeSpecialChars]);
```
- **`useCallback` ensures React doesn’t re-create the function unnecessarily**, improving performance.  

### **4️⃣ `useRef` → Copy to Clipboard Feature**  
```js
const passwordRef = useRef(null);
const copyToClipboard = () => {
  passwordRef.current?.select();
  navigator.clipboard.writeText(password);
  alert("Password Copied!");
};
```
- **`useRef` references the input field** and selects the password for easy copying.  

## **4️⃣ Project Summary**
| Hook          | Purpose |
|--------------|---------|
| `useState`   | Manages password state, length, and checkbox values |
| `useEffect`  | Re-generates password when options change |
| `useCallback` | Optimizes `generatePassword` to prevent unnecessary re-renders |
| `useRef`     | Handles clipboard copy functionality |

## **5️⃣ Run the Project**
Add `<PasswordGenerator />` inside `App.js`:  
```jsx
import React from "react";
import PasswordGenerator from "./PasswordGenerator";

function App() {
  return (
    <div>
      <PasswordGenerator />
    </div>
  );
}

export default App;
```
Start the React app:  
```bash
npm start
```

## **6️⃣ Final Thoughts**
✅ Uses **React hooks (`useState`, `useEffect`, `useCallback`, `useRef`)** efficiently.  
✅ Supports **password customization (length, numbers, special characters)**.  
✅ Optimized for **performance** using `useCallback`.  
✅ `useRef` makes **copy-to-clipboard** seamless.  
