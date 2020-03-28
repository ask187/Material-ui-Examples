import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TopBar from "./components/TopBar";
import BodyContent from "./components/BodyContent";
import CardStory from "./components/CardStory";

function App() {
  return (
    <div className="App">
      <TopBar />
      <BodyContent />
      <CardStory />
    </div>
  );
}

export default App;
