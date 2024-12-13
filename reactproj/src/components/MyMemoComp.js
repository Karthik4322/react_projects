import React from "react";

const MyMemo=(props)=>{
    console.log("memo-comp render");
    return (
        <div>
            <h2>This is Memo Component</h2>
            <p>Name:{props.empName}</p>
        </div>
    )
};

export default React.memo(MyMemo);
