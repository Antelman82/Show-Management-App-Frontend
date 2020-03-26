import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";

class EquipmentUpdate extends Component {

  render(){
    // console.log('EquipmentDetails render this.props ',this.props)
    // console.log(`this equipment's id `, this.props.match.params.id)

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
                <li>{`name: ${equipmentInfo.name}`}<TextField fullWidth={true} type="text" name="equipName" placeholder="update name"/></li>
                <li>{`size: ${equipmentInfo.size}`}<TextField fullWidth={true} type="text" name="equipSize" placeholder="update size" /></li>
                <li>{`description: ${equipmentInfo.description}`}<TextField fullWidth={true} type="text" name="equipDescription" placeholder="update description" /></li>
                <li>{`quantity: ${equipmentInfo.quantity}`}<TextField fullWidth={true} type="text" name="equipQuantity" placeholder="update quantity" /></li>
                <li>{`type: ${equipmentInfo.type}`}<TextField fullWidth={true} type="text" name="equipType" placeholder="update type" /></li>             
                <TextField type="submit" />
            </form>
        </div>
    )
    }
}
export default EquipmentUpdate;