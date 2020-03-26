import React, {Component} from 'react';
import { Link } from "react-router-dom"

class ConfirmDeleteEquip extends Component {

  render(){
    console.log('ConfirmDeleteEquip render this.props ',this.props)
    console.log('equipment id', this.props.match.params.id)
    const equipmentInfo = this.props.equipment.find(thisequip => thisequip._id === this.props.match.params.id)
    console.log('equipmentInfo ',equipmentInfo)
    return (
        <div>
          <div className='padding-left'>
            <h4>{equipmentInfo.name}</h4>
            <div>{`size: ${equipmentInfo.size}`}</div>
            <div>{`description: ${equipmentInfo.description}`}</div>
            <div>{`quantity: ${equipmentInfo.quantity}`}</div>
            <div>{`type: ${equipmentInfo.type}`}</div>           
          </div>
          <p><button>Confirm Delete</button></p>
        </div>
    )
    }
}
export default ConfirmDeleteEquip
;