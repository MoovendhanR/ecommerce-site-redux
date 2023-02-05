import * as types from"./actionTypes";
import Axios from "axios";
const fetchDataRequest =(payload) => {
       return{
           type: types.FETCH_DATA_REQUEST,
           payload
       }
}

const fetchDataSuccess =(payload) => {
    return{
        type: types.FETCH_DATA_SUCCESS,
        payload
    }
}

const fetchDataFailure =(payload) => {
    return{
        type: types.FETCH_DATA_FAILURE,
        payload
    }
}


const fetchData=(payload) => {
    return (dispatch)=>{
          dispatch(fetchDataRequest());
          Axios.get("/products",{
              params:{
                  ...payload
              }
          })
          .then(r=>dispatch(fetchDataSuccess(r.data)))
          .catch(e=>dispatch(fetchDataFailure(e.data)))
    }
}

//get single products
const getSingleProductRequest =(payload) => {
    return{
        type: types.GET_SINGLE_PRODUCT_REQUEST,
        payload
    }
}

const getSingleProductSuccess =(payload) => {
 return{
     type: types.GET_SINGLE_PRODUCT_SUCCESS,
     payload
 }
}

const getSingleProductFailure =(payload) => {
 return{
     type: types.GET_SINGLE_PRODUCT_FAILURE,
     payload
 }
}


const getSingleProduct=(id) =>(dispatch)=>{
          dispatch(getSingleProductRequest());
          Axios.get(`/products/${id}`)
          .then(r=>dispatch(getSingleProductSuccess(r.data)))
          .catch(e=>dispatch(getSingleProductFailure(e.data)))
    }


//adding product to the cart
const addProductCartRequest =(payload) => {
    return{
        type: types.ADD_PRODUCT_CART_REQUEST,
        payload
    }
}

const addProductCartSuccess = (payload) => {
 return{
     type: types.ADD_PRODUCT_CART_SUCCESS,
     payload
 }
}

const addProductCartFailure = (payload) => {
 return{
     type: types.GET_SINGLE_PRODUCT_FAILURE,
     payload
 }
}

const addProductCart=(product)=>(dispatch)=>{
      dispatch(addProductCartRequest());
    Axios.post("/cart",product)
    .then((res)=>dispatch(addProductCartSuccess(res.data)))
    .catch((err)=>dispatch(addProductCartFailure(err)))

}
//fetching cart data
const fetchCartRequest =(payload) => {
    return{
        type: types.FETCH_CART_REQUEST,
        payload
    }
}

const fetchCartSuccess =(payload) => {
 return{
     type: types.FETCH_CART_SUCCESS,
     payload
 }
}

const fetchCartFailure =(payload) => {
 return{
     type: types.FETCH_CART_FAILURE,
     payload
 }
}

const fetchCart = (payload) => (dispatch) => {
    dispatch(fetchCartRequest());
    Axios.get("/cart")
    .then(res => dispatch(fetchCartSuccess(res.data)))
    .catch(err => dispatch(fetchCartFailure(err)))
}
//removing cart items
const removeProductCartRequest =(payload) => {
    return{
        type: types.REMOVE_PRODUCT_CART_REQUEST,
        payload
    }
}

const removeProductCartSuccess =(payload) => {
 return{
     type: types.REMOVE_PRODUCT_CART_SUCCESS,
     payload
 }
}

const removeProductCartFailure =(payload) => {
 return{
     type: types.FETCH_CART_FAILURE,
     payload
 }
}

const removeCartItem=(id)=>(dispatch) => {
    dispatch(removeProductCartRequest());
    Axios.delete(`/cart/${id}`)
    .then(res=>dispatch(removeProductCartSuccess(res.data)))
    .then(res=>dispatch(fetchCart(res.data)))
    .catch(err=>dispatch(removeProductCartFailure(err)))
}

//adding orders
const addingOrdersRequest =(payload) => {
    return{
        type: types.ADD_ORDER_REQUEST,
        payload
    }
}

const addingOrdersSuccess =(payload) => {
 return{
     type: types.ADD_ORDER_SUCCESS,
     payload
 }
}

const addingOrdersFailure = (payload) => {
 return{
     type: types.ADD_ORDER_FAILURE,
     payload
 }
}

const addOrders = (payload) =>(dispatch)=>{
     dispatch(addingOrdersRequest())
     const orderPayload = [];
     for(let product of payload) {
        product && orderPayload.push(Axios.post("/orders",product))
     }

     Promise.all(orderPayload)
     .then((r)=>{dispatch(addingOrdersSuccess())})
     .then(()=>dispatch(emptyCart(payload)))
     .catch((err)=>dispatch(addingOrdersFailure()))
}

//emapty cart
const emptyCartRequest =() => {
    return{
        type: types.EMPTY_CART_REQUEST,
        
    }
}

const emptyCartSuccess =() => {
 return{
     type: types.EMPTY_CART_SUCCESS,
     
 }
}

const emptyCartFailure = () => {
 return{
     type: types.EMPTY_CART_FAILURE,
     
 }
}

const emptyCart = (payload) => (dispatch) => {
    dispatch(emptyCartRequest());
    const deleteOrders=[];
    for(let obj of payload) {
        let temp = dispatch(removeCartItem(obj.id))
        deleteOrders.push(temp);
    }
    Promise.all(deleteOrders)
    .then(() =>dispatch(emptyCartSuccess()))
    .catch((err) =>dispatch(emptyCartFailure(err)))
}


const fetchOrdersRequest=(payload)=>{
    return{
        type: types.FETCH_ORDERS_REQUEST,
        payload
    }
}
const fetchOrdersSuccess = (payload)=>{
      return{
        type: types.FETCH_ORDERS_SUCCESS,
        payload
      }
}

const fetchOrdersFailure = (payload)=>{
   return{
    type: types.FETCH_ORDERS_FAILURE,
    payload
   }
}
const fetchOrders = (payload)=> (dispatch)=>{
      dispatch(fetchOrdersRequest());
    Axios.get("/orders")
    .then(r=>dispatch(fetchOrdersSuccess(r.data)))
    .then(err=>dispatch(fetchOrdersFailure(err)))
}



export {fetchData, getSingleProduct, addProductCart, fetchCart, removeCartItem,addOrders,emptyCart,fetchOrders}