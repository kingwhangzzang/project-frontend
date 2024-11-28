import React, { useState } from 'react';
import "../css/home.css"
import axios from 'axios';
import { useNavigate } from 'react-router';
const Home = () => {
    const navigator = useNavigate();
    const [memberLoginId,setMemberLoginId] = useState('');
    const [memberPassword,setMemberPassword] = useState('');
    
    const handleLoginSubmit = (e) =>{
        e.preventDefault();
        console.log(memberLoginId);
        console.log(memberPassword);
        const loginData = {
            memberLoginId,
            memberPassword
        }
        axios.post("http://localhost:8080/api/login",loginData)
        .then((res)=>{
            console.log(res);
            useNavigate("/feed/home");
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div id='home-main-div'>
            <div id='home-logo-div'>
                <p id='home-logo-p'>FEED</p>
                <p id='home-sublogon-p'>FOOD DIARY</p>
            </div>
            <div id='loginform-div'>
                <form action="">
                    <input onChange={(e)=>setMemberLoginId(e.target.value)}  
                    type="text" 
                    placeholder='아이디'/>
                    <input onChange={(e)=>setMemberPassword(e.target.value)}
                    type="password" 
                    placeholder='비밀번호' />
                    <br />
                    <button onClick={handleLoginSubmit}>Login</button>
                </form>
                <div id='subLogin'>
                    <p className='subLogin-p'>회원가입</p>
                    <p className='subLogin-p'>아이디 찾기</p>
                    <p className='subLogin-p'>비밀번호 찾기</p>
                </div>
            </div>             
        </div>
    );
};

export default Home;