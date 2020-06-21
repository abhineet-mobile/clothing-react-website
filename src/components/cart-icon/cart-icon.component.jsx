import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'; 
import {connect} from 'react-redux'; 
import {selectCartItemsCount} from '../../redux/cart/cart.selector'; 
import {toggelCartHidden} from '../../redux/cart/cart.action'
import './cart-icon.styles.scss';

const CartIcon = ({toggelCartHidden, itemCount})=>(

    <div className='cart-icon' onClick={toggelCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>

    </div>
); 
const mapDispatchToProps= dispatch =>({
    toggelCartHidden: ()=> dispatch(toggelCartHidden())
})

const mapStateToProps= (state)=>({
    itemCount: selectCartItemsCount(state)
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon); 