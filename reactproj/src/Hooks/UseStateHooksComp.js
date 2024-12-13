import React,{useState} from 'react';
const  UseStateHooksComp=()=> {
    const[count,setCount] =useState(0);
    const[name,setName] =useState("Pushpa");

    const incrementCount=()=>{
        setCount(count+1)
    }
    

    return (
        <div>
        <h2>This is use state hook components</h2>
        <p>Counter value: <strong>{count}</strong></p>

        <button type="button" onClick={()=>incrementCount()} className="btn btn-primary">Change count</button>{" "}
        <button type="button" onClick={()=>setCount(count+2)} className="btn btn-primary">set count</button>

        <p>My name: {name}</p>
        <button type="button" onClick={()=>setName("karthik")} className="btn btn-primary">Change name</button>{" "}

        </div> 
    )
}

export default UseStateHooksComp;
