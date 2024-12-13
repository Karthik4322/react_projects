import React,{Component} from 'react';
class CountComp extends Component{
    constructor(){
        super();
        this.state={
            xValue:1
        }
    }

    increaseValue=()=>{
        this.setState({xValue:this.state.xValue +1});
    }
    decreaseValue=()=>{
        this.setState({xValue:this.state.xValue--});
    }
    resetValue=()=>{
        this.setStatestate({xValue:this.state.xValue=0})
    }
    render(){
        
        return (<div><h2>Count Increment & Decrement</h2>
        <button type ="button" className='btn btn-primary' onClick={()=>this.increaseValue()}>Increase value</button>
        <button type ="button" className='btn btn-primary' onClick={()=>this.decreaseValue()}>Decrease</button>
        <button type ="button" className='btn btn-primary' onClick={()=>this.resetValue()}>Reset</button>
        </div>);
    }
}
//export default CountComp;