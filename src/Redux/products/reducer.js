import * as types from "./actionTypes"
const initialState ={
    products: [],
    error:"",
    currentProduct:{},
    cart:[],
    orders:[],
    loading:false
}

const ProductReducer = (state=initialState,action)=>{
    const {type,payload}=action;
switch(type){
case types.FETCH_DATA_REQUEST:
return{
...state,
error:"",
loading:true
}
case types.FETCH_DATA_SUCCESS:
return{
...state,
products:payload,
error:"",
loading:false
}
case types.FETCH_DATA_FAILURE:
return{
...state,
error:payload,
loading:false
}
//getsingle product
case types.GET_SINGLE_PRODUCT_REQUEST:
return{
...state,
error:"",
loading:true
}
case types.GET_SINGLE_PRODUCT_SUCCESS:
return{
...state,
currentProduct:payload,
error:"",
loading:false
}
case types.GET_SINGLE_PRODUCT_FAILURE:
return{
...state,
error:payload,
loading:false
}
//add to cart
case types.ADD_PRODUCT_CART_REQUEST:
return{
...state,
error:"",
loading:true
}
case types.ADD_PRODUCT_CART_SUCCESS:
return{
...state,
cart:[...state.cart,payload],
error:"",
loading:false
}
case types.ADD_PRODUCT_CART_FAILURE:
return{
...state,
error:payload,
loading:false
}
//fetching cart product
case types.FETCH_CART_REQUEST:
return{
...state,
error:"",
loading:true
}
case types.FETCH_CART_SUCCESS:
return{
...state,
cart:payload,
error:"",
loading:false
}
case types.FETCH_CART_FAILURE:
return{
...state,
error:payload,
loading:false
}
//remove cart items
case types.REMOVE_PRODUCT_CART_REQUEST:
    return{
    ...state,
    error:"",
    loading:true
    }
   
    case types.REMOVE_PRODUCT_CART_FAILURE:
    return{
    ...state,
    error:payload,
    loading:false
    }
//fetching orders
case types.FETCH_ORDERS_REQUEST:
return{
...state,
error:"",
loading:true
}
case types.FETCH_ORDERS_SUCCESS:
return{
...state,
orders:payload,
error:"",
loading:false
}
case types.FETCH_ORDERS_FAILURE:
return{
...state,
error:payload,
loading:false
}

default:
return state;
}

}


export default ProductReducer;