import React, { useState, useEffect, useRef } from "react";
import RoutePath from "./Common/Route/RoutePath";
import { Provider } from "react-redux";
import store from "./Common/redux/Store/store";
import { ToastContainer } from "react-toastify";
import './App.css'; 
function App() {

  // useEffect(() => {
  //   const handleTabClose = (event) => {
  //     localStorage.clear();
  //     event.preventDefault();
  //     event.returnValue = ''; 
  //   };

  //   window.addEventListener('beforeunload', handleTabClose);

  //   return () => {
  //     window.removeEventListener('beforeunload', handleTabClose);
  //   };
  // }, []);
  
  return (
    <div className="App custom-bg">

      <ToastContainer />
      <Provider store={store}>
        <RoutePath />
      </Provider>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
