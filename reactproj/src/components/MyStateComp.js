
import React,{Component} from 'react';
class MyStateComp extends Component{

    constructor(){
        super();
        this.state={
            empName:"Karthik",
            empSal: 50000
        }
    }

    changeStateData =()=>{
       // this.setState({empName:"Karthik",empSal:this.state.empSal+5000});  both statements do same functionality
        this.setState((prevState)=>({empName:"Karthik",empSal: prevState.empSal+5000}));//by using prevState we are using secured method name
    }
    render(){
        return (
        <div><h1>MyStateComp is created for state component</h1>
        <p>Employee Name: <strong>{this.state.empName}</strong>and Salary:<strong>{this.state.empSal}</strong></p>
        <button type ="button" className='btn btn-primary' onClick={()=>this.changeStateData()}>Change State Data</button></div>)
    }
}
export default MyStateComp;