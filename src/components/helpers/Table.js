///////////////////////////////////////////////////////////////
////////////// T A B L E   C O M P O N E N T //////////////////
////////////////////////////////////////////////////////////////

import React from 'react'
import {Link} from "react-router-dom"

export default function Table({name,quantity,price}) {
  return (
      <tr>
       <td>{name}</td>
       <td>{quantity}</td>
       <td>{price*quantity}  $</td>
       {price === 12 ? <td className="negative">Unavailable</td> : <td className="positive">Approved</td>}
       <td>
       <div class="ui large buttons">
          <Link to="/student/save"> 
            <button class="ui blue basic button">Edit</button>
          </Link>
          
          <div class="or"></div>
          <button class="ui red basic button">Delete</button>
        </div>
       </td>
      </tr>
  )
}
