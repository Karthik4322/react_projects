import React, { Component } from 'react'

class MyFavColorComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            color:"Red"
             
        }
    }
    // static getDerivedStateFromProps(props){
    //     return{
    //         color:props.newColor
    //     }
    // }
    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({color:"Pink"});
    //     },2000)
    // }
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("beforeupdate").innerHTML=`Befor update my favourite color was : ${prevState.color}`;
    }
    changeColor=()=>{
        this.setState({color:"Blue"});
    }
    componentDidCatch(){
        document.getElementById("afterupdate").innerHTML =`After update my favorite color is : ${this.state.color}`;
    }
    render() {
        return (
            <div>
                <h2>This is my favcolour</h2>
                <p>Color is: <strong>{this.state.color}</strong></p>
                <div id ="beforeupdate"></div>
                <div id ="afterupdate"></div>
                <button type="button" onClick={()=>this.changeColor()} className='btn btn-outline-primary'>CHANGE COLOR </button>
            </div>
        )
    }
}

export default MyFavColorComp
