import produce from 'immer';
import { createStore, combineReducers } from 'redux';


 const login={
     email:"123@g",
     password:111
 }
 
 const reuserLogin=produce((state,action)=>{
     switch (action.type){
         case 'SET_EMAIL':
             state.email=action.payload;
             break;
         case 'SET_PASSWORD':
             state.password=action.payload;
             break;
         default:
             break;
     }
 },login);








const reducer=combineReducers({login:reuserLogin});
 const Store=createStore(reducer);
 export default Store;