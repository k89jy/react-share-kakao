import React, { Component} from "react";
import "./App.css";
import {hot} from "react-hot-loader"
import {Helmet} from 'react-helmet'


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