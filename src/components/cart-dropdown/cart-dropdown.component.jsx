import React from 'react'; 
import CustomButton from '../custom-button/custom-button.component'; 
import {connect} from 'react-redux'; 
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom';
import {selectCartItems} from '../../redux/cart/cart.selector';
import {toggelCartHidden} from '../../redux/cart/cart.action'; 
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            { 
            cartItems.length ?
            (cartItems.map(cartItem => (
                <CartItem key= {cartItem.id} item={cartItem}/>
            ))
            ): (<span className=' empty-message'>You Cart is Empty</span>)
            }
        </div>
        <CustomButton onClick ={()=> {history.push('/checkout');
                                        dispatch(toggelCartHidden());
                                            }}> PROCEED TO CHECKOUT</CustomButton>
    </div>
            ); 

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));