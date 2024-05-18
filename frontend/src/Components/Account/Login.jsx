import React, { useState, useEffect, useContext } from 'react';

import { API } from '../../sevice/Api';

import { TextField, Box, Button, Typography, styled } from '@mui/material';

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled('img')({
    width: 100,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;
const LoginButton = styled(Button)`
    text-transform: none;
    background: #ff0000;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;
const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;
const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`
const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
    profilePhoto:''
};

const Login = () =>{
    const [signup, setSignup] = useState(signupInitialValues);
    const [account, toggleAccount] = useState('login');
    const [error, showError] = useState('');
    const [preview, setPreview] = useState(null);

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }
    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }
    const onFileChange = (e) => {
        const file = e.target.files[0];
        setSignup({ ...signup, profilePhoto: file });
        setPreview(URL.createObjectURL(file));
    };
    const handleSignup = async () => {
        const formData = new FormData();
        formData.append('name', signup.name);
        formData.append('username', signup.username);
        formData.append('password', signup.password);
        formData.append('profilePhoto', signup.profilePhoto);

 //Add Signup from backend and change onclick function (niche) also add photo vala section jase upr vale handleSignup me hai  
    const signupUser = async () => {
            let response = await API.userSignup(signup);
            if (response.isSuccess) {
                showError('');
                setSignup(signupInitialValues);
                toggleAccount('login');
            } else {
                showError('Something went wrong! please try again later');
            }
               
            }

        try {
            const response = await fetch('', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Signup successful:', data);
            } else {
                console.error('Signup failed');
            }
        } catch (error) {
            console.error('Error during signup:', error);
        }
    };
//Add login from backend
    const handleLogin = async () => {
        try {
            const response = await API.userLogin(login);
            if (response.isSuccess) {
                showError('');
                
            } else {
                showError('Invalid username or password');
            }
        } catch (error) {
            showError('Error during login! Please try again later');
        }
    };
    
    return(
        <Component>
            <Box>
                <Image src='https://cdn.logojoy.com/wp-content/uploads/2018/05/30164213/375.png' alt="login" />
                {
                    account === 'login' ?
                  <Wrapper>
                   <TextField variant="standard" label='Enter Username' />
                   <TextField variant="standard" label='Enter Password'/>

                   {error && <Error>{error}</Error>}

                   <LoginButton onClick={handleLogin} variant="contained">Login</LoginButton>
                   <Text style={{textAlign:'center'}}>OR </Text>
                   <SignupButton onClick={() => toggleSignup()}>Create an Account</SignupButton>
                  </Wrapper>
                :
                <Wrapper>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='name' label='Enter Name' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                            <Typography variant="body2" style={{ marginTop: 20 }}>Add profile picture</Typography>
                            <input type="file" onChange={onFileChange} />
                            {preview && <img src={preview} alt="Profile Preview" width="100" height="100" />}
                            <SignupButton onClick={handleSignup}>Signup</SignupButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <LoginButton variant="contained" onClick={() => toggleSignup()} >Already have an account</LoginButton>
                </Wrapper>
               }
            </Box>
        </Component>
    )
}

export default Login;