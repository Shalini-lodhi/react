// App.jsx
import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen bg-gray-100">
      <Button label="Primary Button" type="primary" />
      <Button label="Secondary Button" type="secondary" />
      <Button label="Danger Button" type="danger" />
    </div>
  );
}

export default App;
