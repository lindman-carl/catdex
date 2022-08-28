import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(10)].map((el) => (
          <Card />
        ))}
      </div>
    </div>
  );
}

export default App;
