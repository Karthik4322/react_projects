import {React,useEffect} from  'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRouting=(props)=>{

    const nav = useNavigate()
        const{Component} = props;

    useEffect(()=>{
        if(!sessionStorage.getItem('users')){
            nav("/");
        }
    },[])
    
    
    return(
    <div>

        <Component/>
        <p>Protected Routing fc</p>
    </div>)
}
export default ProtectedRouting;