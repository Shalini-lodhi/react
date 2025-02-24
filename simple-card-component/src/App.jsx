// App.js
import React from "react";
import Card from "./components/Cards";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card
        title = "Couple Image"
        imageUrl = "https://images.pexels.com/photos/20937745/pexels-photo-20937745/free-photo-of-couple-sitting-on-terrace-on-hilltop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        index = "Couple Sitting on Terrace on Hilltop" 
        rate = "Free to use"
      />
       <Card
        title = "Couple Image"
        imageUrl = "https://images.pexels.com/photos/20937745/pexels-photo-20937745/free-photo-of-couple-sitting-on-terrace-on-hilltop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        index = "Couple Sitting on Terrace on Hilltop" 
        rate = "Free to use"
      />
    </div>
  );
}

export default App;
