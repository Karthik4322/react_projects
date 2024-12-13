import React ,{Component} from 'react';
class ErrorBoundaryComp extends Component{
    constructor(props){
        super(props)

        this.state={
            isCond:false
        }
    }
    static getDerivedStateFromError(){
        return{
            isCond: true
        }
    }
    componentDidCatch(error){
        console.log(error);
    }
    render(){
        if(this.state.isCond){
            return <div>Not a User</div>
        }
        return this.props.children;  // this.props.children are the values except user "Arun"
    }
}
export default ErrorBoundaryComp;