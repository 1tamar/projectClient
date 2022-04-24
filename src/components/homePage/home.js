


import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import "./home.css";

import { useSelector, useDispatch } from 'react-redux';
import GetEquipmentMethod from '../../services/EquipmentService'
import GetRoomsMethod from "../../services/roomService";
import GetRoomTypeMethod from "../../services/RoomTypeService";
import AddInlayMethod from "../../services/InlayService";






export default withRouter(function Home(props) {
  const{history}=props;
  const dispatch = useDispatch()
  let RequestRoomsTypes = {};
  let RequestRooms = {};
  let RequestEquipments = {};

  useEffect(async ()  => {
    try {
      RequestRoomsTypes = await GetRoomTypeMethod.GettAllRoomTypes();
      if (RequestRoomsTypes.Status == true) {
        dispatch({ type: "SET_ROOM_TYPES", payload: RequestRoomsTypes.Data });
      }
      RequestRooms = await GetRoomsMethod.GettAllRooms();
      if (RequestRooms.Status == true) {
        dispatch({type:"SET_ROOMS",payload:RequestRooms.Data});
      }
      RequestEquipments = await GetEquipmentMethod.GettAllEquipment();
      if (RequestEquipments.Status == true) {
        dispatch({type:"SET_EQUIPMENT",payload:RequestEquipments.Data});
      }
    }
    catch (e) {
      console.log(e.message);
    }

  }, [])
  const currentUser = useSelector(state => state.globalState.currentUser)

  function goToInput()
  {
    history.push('./input')
    
  }
  return <>
    <h1>{currentUser.name}  שלום!</h1>
    <button onClick={goToInput}>go to input</button>
  </>

})