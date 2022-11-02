import SignUpForm from './../components/SignUpForm';
import { useState } from 'react';

const AuthPage = ({setUser}) => {
    const [showSignUp, setShowSignUp] = useState(true);
    return (
    <main>
    <h1>AuthPage</h1>
    <SignUpForm  setUser = {setUser}/>
    
  </main>
);
    
}

export default AuthPage;

