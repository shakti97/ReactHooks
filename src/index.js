import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

import "./styles.css";

function FriendStatus(props) {
  
  
  if (props.isOnline === null) {
    return 'Loading...';
  }
  return props.isOnline ? <div>'Online'</div> : <div>'Offline'</div>;
}

function App() {
  const [count, setCount] = useState(0);
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    console.log('hey subscription');
    handleStatusChange({ isOnline: true });
    return function cleanup() {
      console.log('hey unsubscription');
      handleStatusChange({ isOnline: false });
    }
  },[isOnline]);
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
  return (
    <div className="App">
      <p>you clicked me {count} times</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <FriendStatus {...{isOnline}}/>
      <button onClick={()=>handleStatusChange({isOnline:!isOnline})}>Change Status</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
