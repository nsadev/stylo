import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { SignInContainer, SignInTitle, SignInButtons } from  './signin.styles';

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({ email: '', password: '' });

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const { email, password } = userCredentials;
      
      await auth.signInWithEmailAndPassword(email, password);
      
    } catch (error) {
      console.log(error);
    }
  };

   const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value })
  }

  return(
    <SignInContainer>
      <SignInTitle>Already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email' 
          type='email' 
          handleChange={handleChange}
          value={email} 
          label='Email'
          required 
        />

        <FormInput
          name='password' 
          type='password' 
          handleChange={handleChange}
          value={password} 
          label='Password'
          required 
        />

        <SignInButtons>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
          Sign in with Google 
          </CustomButton>
        </SignInButtons>
      </form>
    </SignInContainer>
  )
}


export default SignIn;