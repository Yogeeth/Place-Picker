import { useEffect, useState } from "react";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTime,setRemainingTime] = useState(3000);
  useEffect(()=>{
    console.log("INTERVAL");
    const interval = setInterval(()=>{
      setRemainingTime(prevTime=>prevTime-10);
    },10);
    return ()=>{
      clearInterval(interval);
    }
  },[]);
  
  useEffect(()=>{
    
    const timer = setTimeout(()=>{
      onConfirm();
      
    },3000);
    return () =>{
      console.log("clean timer");
      clearTimeout(timer);
    };
  },[onConfirm])
  
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={3000}/>
        
    </div>
  );
}
