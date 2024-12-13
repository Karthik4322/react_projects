import React,{Component} from "react"
class ClassComp extends Component{
    render(){
        return (<div><h2>This is Class Component</h2>
            <p>Now use can use multiple tags in single div element</p>
            <p>My name is : {this.props.fname} and Post is: {this.props.post}</p></div>
        )
    }
}
export default ClassComp;