import { SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "./actions";

const initialState ={
  auth: false,
  token:""
}

const reducer = (state=initialState,action)=>{
    const {type,payload}=action;
switch(type){
      case SIGNIN_REQUEST:
        return{
            auth: false,
            token:""
         }
      case SIGNIN_SUCCESS:
        return{
            auth: true,
            token:payload
        }
      case SIGNIN_FAILURE:
        return{
            auth: false,
            token:""
        }
     default:
        return state;
}
}

export default reducer;