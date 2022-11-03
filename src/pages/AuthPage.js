import SignUpForm from './../components/SignUpForm';
import { useState } from 'react';
import LoginForm from '../components/LoginForm';

const AuthPage = ({setUser}) => {
    const [showSignUp, setShowSignUp] = useState(true);
    return (
    <main>
    <h1>AuthPage</h1>
    <SignUpForm  setUser={setUser}/>
   
    <LoginForm/>
    
  </main>
);
    
}

export default AuthPage;

