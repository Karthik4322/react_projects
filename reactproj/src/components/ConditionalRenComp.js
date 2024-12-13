import React,{Component} from 'react';

class ConditionalRenComp extends Component{
    constructor(){
        super();
        this.state={
            isCond: true
        }
    }
    render(){;
        let msg="";
    if(!this.state.isCond){
        msg = "Admin Login Successfully";
        // return <h2>Admin Login Successfully</h2>
    }
    else{
    msg ="user login";
       //msg=  <h2>User Login Successfully</h2>

    }
   return <h2>{msg}</h2>
}
}
export default ConditionalRenComp;
