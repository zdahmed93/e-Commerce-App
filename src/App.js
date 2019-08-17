import React, {useState, useEffect} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils';

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log(currentUser);
    })

    return () => {
      unsubscribeFromAuth();
    } 
  }, [currentUser]);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentUser: null
//     }
//   }
//   unsubscribeFromAuth = null;
//   componentDidMount() {
//     console.log('mounted');
//     this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
//       this.setState({currentUser: user});
//       console.log(user)
//     })
//   }
//   componentWillUnmount() {
//     this.unsubscribeFromAuth()
//   }
//   render() {
//     return (
//       <div>
//         <Header />
//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route path="/shop" component={ShopPage} />
//           <Route path="/signin" component={SignInAndSignUpPage} />
//         </Switch>
//       </div>
//     );
//   }
// }

export default App;
