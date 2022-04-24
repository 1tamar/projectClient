import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import AddInlayMethod from "../../services/InlayService";
import "./input.css";

//--------
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//--------


export default function Input() {
    //start for inley----------
    const [date, setDate] = useState();
    const [fromHour, setFromHour] = useState();
    const [toHour, setToHour] = useState();
    // const [oneOrSeveral, setOneOrSeveral] = useState();
    // const [severalTimes, setSeveralTimes] = useState();
    const [startDate, setStartDate] = useState(Date.now);
    const [rowNumber, setRowNumber] = useState(1);
    //room
    const [roomType, setRoomType] = useState();
    const [roomTonnage, setRoomTonnage] = useState(1);
    const [roomAccessibility, setRoomAccessibility] = useState(false);
    //items
    const [items, setItems] = useState([]);
    const [itemCount, setItemCount] = useState(1);
    const [itemName, setItemName] = useState("");
    const [itemId, setItemId] = useState();


    //get data
    const roomTypes = useSelector(state => state.globalState.data.roomTypes);
    const rooms = useSelector(state => state.globalState.data.rooms);
    const equipment = useSelector(state => state.globalState.data.equipment);
    const currentUser = useSelector(state => state.globalState.currentUser)





    async function tryAddInlay() {
        debugger;
        const room = { Type: roomType, Tonnage: roomTonnage, Floor: roomAccessibility,Id:0,Name:"aaa" };
        const constrains = { InlayDate: startDate, FromHour: fromHour, ToHour: toHour, UserId: currentUser.id };
        const objectToSend={room,constrains,items};
        const data = await AddInlayMethod.AddInlay(objectToSend);
        if (data.Status == true) {
            // dispatch({ type: "SET_CURRENT_USER", payload: data.Data });
        }
        alert(data.Messege);

    }
    function addRow() {
        setItems(prev=> [...prev,{itemName,itemCount}])
        debugger;
        
    }

    return (
        <div className="Login">
            <DatePicker selected={startDate} value={date} onChange={(date) => setStartDate(date)} />
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">סוג חדר</th>
                        <th scope="col">תפוסת חדר</th>
                        <th scope="col">נגישות?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td>
                            <select value={roomType} onChange={(e) => setRoomType(e.target.value)} >
                                <option>בחר סוג חדר</option>
                                {
                                    roomTypes ? roomTypes.map((x) => <option>{x.TypeName}</option>) : <option>no types!</option>
                                }
                            </select>
                        </td>
                        <td><input type="number" min="1" value={roomTonnage} onChange={(e) => setRoomTonnage(e.target.value)}>
                        </input>
                        </td>
                        <td>
                            <select value={roomAccessibility} onChange={(e) => setRoomAccessibility(e.target.value)}>
                                <option value={false}>ללא נגישות</option>
                                <option value={true}>נגיש</option>
                            </select>
                        </td>
                    </tr>

                </tbody>
            </table>





            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">פריט</th>
                        <th scope="col">כמות</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> 1</td>
                        <td>
                            <select>
                                {
                                    equipment ? equipment.map((x) => <option>{x.ItemName}</option>) : <option>no items!</option>
                                }
                            </select>
                        </td>
                        <td><input type="number" min="0" ></input> </td>
                        <td><button className="btn btn-outline-success" onClick={addRow} >+</button></td>
                    </tr>
                </tbody>

            </table>
            <button onClick={tryAddInlay}>הוסף פעילות</button>
        </div >
    )


};