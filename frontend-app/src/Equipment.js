import React, {Component} from 'react';

import { Link } from "react-router-dom"

class Equipment extends Component {

  render(){
    // console.log('Equipment render this.props ',this.props)

    const allEquipment = this.props.equipment.map(equipment => {
      return (
        <div className='padding-left' key={equipment._id}>
            <h4>{equipment.name}</h4>
            <div>{`size: ${equipment.size}`}</div>
            <div>{`description: ${equipment.description}`}</div>
            <div>{`quantity: ${equipment.quantity}`}</div>
            <div>{`type: ${equipment.type}`}</div>           
            <Link to="/equipmentadd"><button>+</button></Link>
            <Link to={`/equipmentupdate/${equipment._id}`}><button
              id={equipment._id}
              >Update</button></Link>
            <Link to={`/equipmentdelete/${equipment._id}`}><button 
              id={equipment._id}
              >Delete</button>
            </Link>
        </div>
      )
    })


    return (
        <div>
          {allEquipment}
        </div>
    )
    }
}
export default Equipment;