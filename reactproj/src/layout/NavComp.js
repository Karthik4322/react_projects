import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const NavComp=()=>{

    let nav = useNavigate();

    const logUser =()=>{
        if(window.confirm("Are you sure to Logout")==true)
            window.alert("Logout Successfully")
            sessionStorage.clear();
            nav("/")
    }
    return(<div>
        {/* This is NavComp Components</div>) */}
        <Link to ="state" className ="btn btn-primary btn-sm">state</Link>{" "}
        <Link to ="favcolor" className ="btn btn-primary btn-sm">favcolor</Link>{" "}
        <Link to ="virtualdom" className ="btn btn-primary btn-sm">virtualdom</Link>{" "}
        <Link to ="hooks" className ="btn btn-primary btn-sm">Nested parent Hooks childs</Link>{" "}
        <Link to ="formval" className ="btn btn-primary btn-sm">form validation</Link>{" "}
        <Link to ="pdash" className='btn btn-primary btn-sm'>ProductDashboard</Link>{" "}
        <Link to ="caro" className='btn btn-primary btn-sm'>Carousel</Link>{" "}
        <button type="button" className="btn btndanger danger btn-sm" onClick={logUser} style={{float: "right"}}>
        <ExitToAppIcon></ExitToAppIcon></button>
        <Link to ="datalist" className='btn btn-primary btn-sm'>Datalist</Link>{" "}
        </div>)
}
export default NavComp;