import produce from 'immer';
import { createStore, combineReducers } from 'redux';
import GetEquipmentMethod from './services/EquipmentService';


const globalState = {
    currentUser: {
        email: "",
        password: "",
        name: "",
        Id:""
    },
    data: {
        roomTypes: [],
        rooms: [],
        equipment: []
    }
}

const reduser = produce((state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            debugger;
            state.currentUser.email = action.payload.Address;
            state.currentUser.password = action.payload.Passward;
            state.currentUser.name = action.payload.Name;
            state.currentUser.id=action.payload.Id;
            break;

        case 'SET_ROOM_TYPES':
            state.data.roomTypes = action.payload;
            break;

        case 'SET_ROOMS':
            state.data.rooms = action.payload;
            break;

        case 'SET_EQUIPMENT':
            state.data.equipment = action.payload;
            break;
            
        default:
            break;
    }
}, globalState);



const reducer = combineReducers({ globalState: reduser });
const Store = createStore(reducer);
export default Store;