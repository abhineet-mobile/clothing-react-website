import {cartActionTypes} from './cart.type'; 

export const toggelCartHidden = ()=>({
    type: cartActionTypes.TOGGEL_CART_HIDDEN    
});

export const addItem = item =>({
    type: cartActionTypes.ADD_CART_ITEM, 
    payload : item
}); 
export const removeItem =item =>({
    type: cartActionTypes.REMOVE_ITEM, 
    payload: item
});

export const clearItemFromCart = item =>({
    type:cartActionTypes.CLEAR_ITEM_FROM_CART, 
    payload: item
});