import React from "react";
import "./sass/main.scss";
import "./App.scss";
import Card from "./components/Card";
import { cardCollection } from "./data";

function App() {
  return (
    <div className="app-container">
      {cardCollection.map((card, index) => (
        <Card key={index} data={card} />
      ))}
    </div>
  );
}

export default App;
