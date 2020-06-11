import React from 'react';
import HomePage from './pages/homepage/homepage-components'; 
import ShopPage from './pages/shop/shoppage.component';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'; 
import {Switch, Route} from 'react-router-dom'
import  Header from './components/header/header.component'; 
import {auth , createUserProfileDocument} from './firebase/firebase.utils'
import './App.css';
//import { registerVersion } from 'firebase';


class  App extends React.Component{
  constructor(){
    super();

    this.state= {
      currentUser: null
    }
  }

  unSubscribeFromAuth =null; 

componentDidMount(){
  this.unSubscribeFromAuth =auth.onAuthStateChanged(async userAuth => {
   // this.setState({currentUser:user})
   //createUserProfileDocument(user);
   if (userAuth){
     const userRef =await createUserProfileDocument(userAuth);
     userRef.onSnapshot(snapShot =>{
       this.setState({
         currentUser: {
           id: snapShot.id,
           ...snapShot.data()
         }
       })
     })
   } else {
     this.setState({currentUser:userAuth}); 
   }
  })
}

componentWillUnmount(){
  this.unSubscribeFromAuth();
}
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component ={SignInAndSignUpPage}/>
        </Switch>
  
       
      </div>
    );

  }
}

export default App;
