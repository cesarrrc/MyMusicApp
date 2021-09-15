import { useState } from 'react';
import DashBoard from './DashBoard';
import Header from './Header';
import Login from './Login';


const DynamicPage = () => {
  const [user, setUser] = useState({userName:null, loggedIn:null});

  const getUserInfo = (user) => {
    setUser(user)
    console.log('hello', user)
  }

  const handleLogout = () => {
    setUser({loggedIn:false})
  };

  return (
    <div>
      <Header loggedIn={user.loggedIn} logout={handleLogout}/>

      {!user.loggedIn
      ? <Login getInfo={getUserInfo} />
      : <DashBoard userName={user.userName} />
      }
    </div>
  );
}

export default DynamicPage;
