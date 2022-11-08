import React  from 'react';
import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {delCart,addCart} from './redux/action';

const Cart = () =>{
    const state = useSelector((state)=> state.handleCart)
    const dispatch = useDispatch()

    var total = 0;
    const itemList = (item) =>{
        total = total + item.qty * item.price;
        return(
            <li className="list-group-item d-flex justify-content-between lh-sm" key={item.id}>
            <div>
              <h6 className="my-0">{item.title.substring(0,12)}...</h6>
            </div>
            <span className="text-muted">${item.qty * item.price}</span>
          </li>
        )
    }
     
    const onPlus = (item) =>{
        state.qty += 1;
        dispatch(addCart(item))
    }

    const onMinus = (item) =>{
        state.qty -= 1;
        dispatch(delCart(item))
    }



    const handleClose =(item) => {
        dispatch(delCart(item))
    }

    const cartItems = (cartItem) => {
        return(
           <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
               <div className="container py-4">
                   <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px"/>
                        </div>
                        <div  className="col-md-4">
                             <h3>{cartItem.title}</h3>
                             <p className="lead fw-bold">{cartItem.qty} x ${cartItem.price} = $ {cartItem.qty * cartItem.price} </p>
                             <button className="btn btn-outline-dark me-4" onClick={()=>onMinus(cartItem)}><i className="fa fa-minus"></i></button>
                             <button className="btn btn-outline-dark me-4" onClick={()=>onPlus(cartItem)}><i className="fa fa-plus"></i></button>

                        </div>
                   </div>
               </div>
           </div> 
        )
    }


    const emptyCart = () =>{
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row justify-content-center">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }


    const button = () =>{
        return (
            <div className="container">
                <div className="row col-4 my-5 shadow rounded-3">
                    <ul className="list-group mb-3 p-1">
                        {state.map(itemList)}
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>${total}</strong>
                        </li>
                    </ul>
                    <Link to="/chekout" className="btn btn-outline-dark px-4  mb-3 w-50 mx-auto">Proceed to checkout</Link>
                </div>
            </div>
        )
    }



    return(
          <>
              {state.length === 0 && emptyCart()}
              {state.length !== 0 && state.map(cartItems)}
              {state.length !== 0 && button()}
            
          </>
    )
}

export default Cart;