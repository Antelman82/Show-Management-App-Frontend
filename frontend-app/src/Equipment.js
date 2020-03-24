import React, {Component} from 'react';

class Equipment extends Component {
  constructor(props){
    super(props)
  }
  render(){
    console.log('Equipment render this.props ',this.props)

    const allEquipment = this.props.equipment.map(equipment => {
      return (
        <div key={equipment._id}>
            <h4>{equipment.name}</h4>
            <div>{`size: ${equipment.size}`}</div>
            <div>{`description: ${equipment.description}`}</div>
            <div>{`quantity: ${equipment.quantity}`}</div>
            <div>{`type: ${equipment.type}`}</div>
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