import './App.css';
import {useState} from "react";
import AuthPage from './pages/AuthPage';
import NewOrderPage from './pages/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import {Routes, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import {getUser} from "./utilities/users-service";


function App() {
  const [user, setUser] = useState(getUser);
  return (
    <main className="App">
      {user ? (
        <>
          {/* <NavBar user={user} /> */}
          <NavBar user={user}  setUser = {setUser}/>
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders/" element={<OrderHistoryPage/>} />
          </Routes>
         
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;

//The SignUp function would need to be redirected.
