import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";

class EquipmentUpdate extends Component {

  render(){
    console.log('EquipmentDetails render this.props ',this.props)
    console.log(`this equipment's id `, this.props.match.params.id)

    const equipmentInfo = this.props.equipment.find(thisequip => thisequip._id === this.props.match.params.id)
    console.log('equipmentInfo ', equipmentInfo)
    return (
        <div>
          <h5>To update value, type into field and click submit</h5>  
          <form
                noValidate
                autoComplete="off"
                onSubmit={this.props.handleEquipUpdateSubmit}
                onChange={this.props.handleChange}
            >
                <li><TextField fullWidth={true} type="text" name="name" defaultValue={`${equipmentInfo.name}`} /></li>
                <li><TextField fullWidth={true} type="text" name="size" defaultValue={`${equipmentInfo.size}`} /></li>
                <li><TextField fullWidth={true} type="text" name="description" defaultValue={`${equipmentInfo.description}`} /></li>
                <li><TextField fullWidth={true} type="text" name="quantity" defaultValue={`${equipmentInfo.quantity}`} /></li>
                <li><TextField fullWidth={true} type="text" name="type" defaultValue={`${equipmentInfo.type}`} /></li>             
                <TextField type="submit" />
            </form>
        </div>
    )
    }
}
export default EquipmentUpdate;