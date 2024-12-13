import React,{Component} from "react";
class EventComp extends Component{
    greeting=()=>{
        window.alert("Hello Everyone")
    };
    welcome=(...std)=>{
        window.alert(`welcome you ${std}`);
    };
    render(){
        return(
            <div>
                <h2>This Component(C) for  Event handling </h2>
                
                
                <button type ="button" onClick ={()=>this.greeting()}>Call greeting</button>
                <button type ="button" onClick ={()=>this.welcome("Tarun","Vinay")}>Call greeting</button>
                <h2 onMouseOver={()=>this.welcome("madhav","rahul")}>Hover on me to call welcome</h2>
            </div>
        )

        
    }
}
export default EventComp;