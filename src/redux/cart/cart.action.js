import {cartActionTypes} from './cart.type'; 

export const toggelCartHidden = ()=>({
    type: cartActionTypes.TOGGEL_CART_HIDDEN    
});

export const addItem = item =>({
    type: cartActionTypes.ADD_CART_ITEM, 
    payload : item
})