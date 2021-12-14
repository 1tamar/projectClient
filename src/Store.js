import produce from 'immer';
import { createStore, combineReducers } from 'redux';
//import { SetUserName, SetPassword, AddProduct, EditPorduct, DeleteProduct, SetDate,SetUser } from './Consts';


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








// var Data = {
//     User: {
//         UserName: '',
//         Password: ''
//     },
//     // ,
//     // Products: [
//     //     {
//     //         Id: 1,
//     //         Name: 'Milk',
//     //         Price: 5.2
//     //     },
//     //     {
//     //         Id: 2,
//     //         Name: 'Water',
//     //         Price: 3
//     //     },
//     //     {
//     //         Id: 3,
//     //         Name: 'Banana',
//     //         Price: 6
//     //     },

//     // ],
//      Date: new Date()

// }

// const reducer = produce((state, action) => {
//     switch (action.type) {
//         case SetUserName:
//             state.User.UserName = action.payload;
//             break;
//         case SetPassword: {
//             state.User.Password = action.payload;
//             break;
//         }
//         case SetUser: {
//             state.User = action.payload;
//             break;
//         }
//         case AddProduct: {
//             state.Products.push(action.payload);
//             break;
//         }
//         case EditPorduct: {
//             var index = state.Products.findIndex(x => x.Id == action.payload.Id);
//             state.Products[index] = action.payload;
//             break;
//         }

//         case DeleteProduct:
//             var index = state.Products.findIndex(x => x.Id == action.payload);
//             state.Products.splice(index, 1);
//             break;

//         case SetDate:
//             state.Date = action.payload;
//             break;
//     }
// }, Data);

// const Store = createStore(reducer);
// export default Store;
