import React from "react";
import Navbar from "./component/navbar";
import Content from "./component/Content";
import Box from "./component/Box";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Content Section */}
      <Content />

      {/* Grid Section */}
      <Box />
    </div>
  );
}

export default App;
