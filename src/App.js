import React from "react";
import logo from "./logo.svg";
import Layout from "./hoc/Layout/Layout";
import Theaters from "./containers/Theaters/Theaters";

function App() {
  return (
    <div>
      <Layout>
        <Theaters></Theaters>
      </Layout>
    </div>
  );
}

export default App;
