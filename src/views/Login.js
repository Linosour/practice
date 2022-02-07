import React from 'react';
import Textfield from '../components/Textfield.js';
import Button from '../components/Button.js';



export default function Login(props){
	return(
		<div className="Login d-flex flex-column justify-content-center align-items-center ">
			<div className='form-login d-flex flex-column justify-content-center align-items-center'>
				<h1 className="text-danger">LOGIN</h1>
				<p>Please Login your Account here:</p>
				<Textfield/> 
				<Textfield/> 
				<Button/>
				<p>FORGOT PASSWORD</p>
			</div>
		</div>
	)

}