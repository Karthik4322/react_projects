import { React, useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../MainRouting/logincomp.css';
import axios from 'axios';

const LoginComp = (props) => {
    const nav = useNavigate();
    const uidRef = useRef();
    const upassRef = useRef();

    const checkUser = () => {
        console.log(uidRef.current.value);
        console.log(upassRef.current.value);
        let empObj ={
            userid: uidRef,
            userpass : upass
        }

        axios.get('http://localhost:9999/users')
            .then((res) => {
                let currentUser = res.data.filter((val) => {
                    return val.userid === uidRef.current.value && val.userpass === upassRef.current.value;
                });
                if (currentUser.length > 0) {
                    window.alert("login success");
                    sessionStorage.setItem("users", uidRef.current.value);
                    nav("/mainDashboard");
                } else {
                    window.alert("wrong credentials");
                    uidRef.current.value = "";
                    upassRef.current.value = "";
                }
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });
    };


    // code for JWT TOKEN   
    //     POST('http://localhost:9999/users',empObj).then((response)=>{
    //         //console.log(res.data);
    //         if(response?.access){
    //             handleSnackbarOpen("Login successfully ","success");
    //             sessionStorage.setItem("accessToken",response?.access);
    //             nav("/mainDashboard");
    //         }
    //     }).catch((error)=>{})
    // }

    

    return (
        <div>
            <h2>This is Login Function Component</h2>
            <div className="loginContainer">
                <form className='loginForm'>
                    <label htmlFor="uid">Enter Email ID:</label>
                    <input type='text' name='uid' id="uid" placeholder="email id" ref={uidRef} className='form-control mb-2 mt-2' />
                    <label htmlFor="upass">Enter Password:</label>
                    <input type='password' name='upass' id="upass" placeholder="password" ref={upassRef} className='form-control mb-2 mt-2' />
                    <button type='button' onClick={()=>checkUser()} className='btn btn-primary'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginComp
