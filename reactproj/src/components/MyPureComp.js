import React, {Component, PureComponent} from "react";

class MyPureComp extends PureComponent{
    render(){
        console.log("pure-comp render")
        return (
            <div>
                <h2> This is My Pure Component</h2>
                <p>Name:{this.props.empName}</p>
            </div>
        )
    }
}

export default MyPureComp;
