import React from 'react';
const UserComp=(props)=>{

    if(props.user=="Arun"){
        throw Error("Not a User");
    }

    return(<div><h2>User name:{props.user}</h2></div>)
}
export default UserComp