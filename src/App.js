import React, { Component} from "react";
import "./App.css";
import {hot} from "react-hot-loader"
import {Helmet} from 'react-helmet'

  const JAVASCRIPT_KEY = "44d53cc36e8d332af1a95050ea17fafe";
   if(window.Kakao){
    window.Kakao.init(JAVASCRIPT_KEY);
    if(window.Kakao.isInitialized())
    {
      alert('success')
    }
  }
  
function App(){
  
  
    return(
      <>
        <Helmet>
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
        </Helmet>
      <button>
        카카카오 공유
      </button>
      </>
    );
  
}

export default hot(module)(App);