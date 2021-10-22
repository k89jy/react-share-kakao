import React, { useEffect } from "react";
import "./App.css";
import { hot } from "react-hot-loader";
import { Helmet } from "react-helmet";

function App() {

  
  useEffect(() => {
    
    const JAVASCRIPT_KEY = process.env.REACT_APP_JAVASCRIPT_KEY;

   
    if (window.Kakao) {
      window.Kakao.init(JAVASCRIPT_KEY);
      if (window.Kakao.isInitialized()) {
        alert("success");
      } else {
        alert("kako not initialized");
      }
    } else {
      alert("no kakao api");
    }

  });

  return (
    <>
      <Helmet>
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
      </Helmet>
      <button>카카카오 공유</button>
    </>
  );
}

export default hot(module)(App);
