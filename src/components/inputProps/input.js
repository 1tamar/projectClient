import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import "./input.css";
import GetEquipmentMethod from '../../services/EquipmentService'
import GetRoomsMethod from "../../services/roomService";
import GetRoomTypeMethod from "../../services/RoomTypeService";
import AddInlayMethod from "../../services/InlayService";

//--------
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//--------



// function CreateOptions(Request) {
//     let options = [];
//     Request.forEach(element => {
//         options.push(<option>{element.TypeName}</option>)
//     });
//     return options;
// }





export default function Input() {

    //start for inley----------
    const [inleyEq, setInleyEq] = useState([]);
    const [date, setDate] = useState();
    const [userId, setUserId] = useState();
    const [fromHour, setFromHour] = useState();
    const [toHour, setToHour] = useState();
    const [oneOrSeveral, setOneOrSeveral] = useState();
    const [severalTimes, setSeveralTimes] = useState();
    //end for inley----------
    //start for date----------
    const [year,setYear]=useState(/*naw*/);
    const [month,setMonth]=useState(/*naw*/);
    const [day,setDay]=useState(/*naw*/);
    const [hour,SetHour]=useState();
    const [minutes,SetMinutes]=useState();
    //start for inleyEq----------

    const [startDate, setStartDate] = useState(new Date());



    async function tryAddInlay() {
        debugger;
        const inley = {
            InlayDate: date,
            FromHour: fromHour,
            ToHour: toHour,
            UserId: userId,
            ONE_TIME_OR_WEEKLY: oneOrSeveral,
            SEVERAL_SESSIONS: severalTimes
        }
        const inleyResponse = await (AddInlayMethod.AddInlay(inley, ""))
        alert(inleyResponse.Messege + "הההההההההה");
        if (inleyResponse.Status == true) {
            alert(inleyResponse.Messege);
        }
    }

    // async function GetEquipment() {
    //     debugger;
    //     const equipmentData = await (GetEquipmentMethod.GettAllEquipment())
    //     equipments = equipmentData.Data;
    //     console.log(equipmentData.Messege);
    //     debugger;
    // }
    // async function GetRoom() {
    //     debugger;
    //     const roomsData = await (GetRoomsMethod.GettAllRooms())
    //     rooms = roomsData.Data;
    //     console.log(roomsData.Messege);
    //     debugger;
    // }
    // async function GetRoomTypes() {
    //     debugger;
    //     const roomTypesData = await (GetRoomTypeMethod.GettAllRoomTypes())
    //     roomTypes = roomTypesData.Data;
    //     console.log(roomTypesData.Messege);
    //     debugger;
    // }


    let RequestRoomsTypes = [];
    let RequestRooms = [];
    let RequestEquipments = [];
    useEffect(async () => {
        try {
            RequestRoomsTypes = await GetRoomTypeMethod.GettAllRoomTypes();
            RequestRooms = await GetRoomsMethod.GettAllRooms();
            RequestEquipments = await GetEquipmentMethod.GettAllEquipment();
            console.log(RequestRoomsTypes);
            console.log(RequestRooms);
            console.log(RequestEquipments);
        }
        catch (e) {
            console.log(e.message);
        }
    }, []);

    return (
        <div className="Login">
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

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
                            <select >
                                <option>רגיל</option>
                                <option>בלט</option>
                                <option>אולם</option>
                                {/* { roomTypes.forEach(type => {
                                        // alert(<option>{type.TypeName}</option>)
                                        <option>hhhh</option>
                                        //   options.push(<option>{type.TypeName}</option>)


                                    }) }    */}
                            </select>
                        </td>
                        <td>Otto</td>
                        <td>
                            כן   לא
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> 1</td>
                        <td>
                            <select >
                                <option>פלטה</option>
                                <option>רמקולים</option>
                                <option>כסא</option>


                            </select>
                        </td>
                        <td><input type="number"></input> </td>

                    </tr>
                </tbody>
            </table>

            <button onClick={tryAddInlay}>הוסף פעילות</button>
        </div >
    )


};