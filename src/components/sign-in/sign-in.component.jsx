import React from 'react'; 
import FormInput  from '../form-input/form-input.component'; 
import CustomButton from '../../components/custom-button/custom-button.component'; 
import{auth, signInwithGoogle}  from '../../firebase/firebase.utils'; 

import './sign-in.styles.scss'; 


class SignIn extends React.Component {
    constructor(){
        super(); 

        this.state = {
            email : '', 
            password: ''
        }
    }
    handleSubmit = async event  =>{
            event.preventDefault();
            const {email, password} = this.state; 
             
            try{
                await auth.signInWithEmailAndPassword(email, password);
                this.setState({emai:'' ,password:''});
            }catch(error){
                console.log(error);
            }
            




            this.setState({email: '', password: ''})
    }; 

    handleChange = event =>{
        const {value, name} = event.target; 
        this.setState({[name]: value})

    };
    render(){
        return(
           <div className= 'sign-in'>
               <h1>I already have an account </h1>
               <span>SignIn with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    type="email" 
                    value={this.state.email} 
                    handleChange= {this.handleChange}
                    label='email'
                    required/>
            
                    <FormInput 
                    name='password' 
                    type="password" 
                    value={this.state.password}
                    handleChange={this.handleChange} 
                    label='password'
                    required/>
                  <div className='buttons'>
                    <CustomButton type="submit" > 
                        Sign In
                    </CustomButton>
                    <CustomButton onClick={signInwithGoogle} isGoogleSignIn>
                        SignIn With Google
                    </CustomButton>
                  </div>
                    
                </form>

           </div>     

        )
    }

}

export default SignIn ;