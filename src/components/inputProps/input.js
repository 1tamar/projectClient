import React, { useState,useEffect } from "react";
import { connect } from 'react-redux';
import "./input.css";

import {GetAllRooms} from "../../services/roomService"

// connect(mapStateToProps)(props
function   CreateOptions(Request)
{let options=[];
    Request.forEach(element => {
        options.push(<option>{element.Name}</option>)
    });
return options;
}
   export default /*withRouter(*/function Input() {
    //const{history}=props;
    //const [rooms,setRooms]=useState([]);
    let options=[];
    useEffect( async ()  => {
        try{
            let Request= [];
            Request= await GetAllRooms();
            options = CreateOptions(Request);
            console.log(Request);
        }
        catch(e)
        {
            console.log(e.message);
        }
    }, []);
      return (
          <div className="Login">
              <div class="container1">
                  
                  <div class="room"> חדר</div>
                        <div class="room">   סוג
                          <select >
                            {
                            options.forEach(element => {
                               alert(<option>{element.Name}</option>)
                            })}

                          </select>
                        </div>
              <div class="room"> תפוסה
                  <input type="number"></input>
              </div>
              <div class="room"> קומה
                   <select placeholder="קומה">
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                   </select>
              </div>
              </div>
  
               <div>ציוד
                   <table>
                       <td>
                           <th>asdfg</th>
                           <th>asdfg</th>
                           <th>asdfg</th>
                       </td>
                       <td>
                           <tr>
                               asdf
                           </tr>
                           <tr>
                               asdf
                           </tr> <tr>
                               asdf
                           </tr> <tr>
                               asdf
                           </tr>
                       </td>
                   </table>
               </div>
               <div>תאריך</div>
           </div >
   )
   

   };
      // );