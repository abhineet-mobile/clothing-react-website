import React from 'react';
import HomePage from './pages/homepage/homepage-components'; 
import ShopPage from './pages/shop/shoppage.component';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'; 
import {Switch, Route, Redirect} from 'react-router-dom'
import  Header from './components/header/header.component'; 
import {auth , createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux'; 
import {setCurrentUser} from './redux/user/user.action';
import './App.css';
//import { registerVersion } from 'firebase';


class  App extends React.Component{
  // constructor(){
  //   super();

  //   this.state= {
  //     currentUser: null
  //   }
  // }

  unSubscribeFromAuth =null; 

componentDidMount(){
  const {setCurrentUser} = this.props;  
  this.unSubscribeFromAuth =auth.onAuthStateChanged(async userAuth => {
   // this.setState({currentUser:user})
   //createUserProfileDocument(user);
   if (userAuth){
     const userRef =await createUserProfileDocument(userAuth);
     userRef.onSnapshot(snapShot =>{
    setCurrentUser( {
           id: snapShot.id,
           ...snapShot.data()
         })
       })     
   } else {
    setCurrentUser(userAuth); 
   }
  })
}

componentWillUnmount(){
  this.unSubscribeFromAuth();
}
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/signin' render ={()=>
          this.props.currentUser ?(<Redirect to='/'/>):(<SignInAndSignUpPage/>)}/>
        </Switch>
  
       
      </div>
    );

  }
}

const mapStateToProps = ({user}) =>({
  currentUser:user.currentUser
});
const mapDispatchToProps = dispatch =>({
setCurrentUser: user =>  dispatch(setCurrentUser(user))   
})
export default connect(mapStateToProps,mapDispatchToProps )(App);
