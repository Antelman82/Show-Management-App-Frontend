import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";

class EquipmentAdd extends Component {

  render(){
    console.log('EquipmentAdd render this.props ',this.props)

    return (
        <div>
          <h5>To add new equipment, type into field and click submit</h5>  
          <form
                noValidate
                autoComplete="off"
                onSubmit={this.props.handleNewEquipSubmit}
                onChange={this.props.handleChange}
            >
                <li><TextField fullWidth={true} type="text" name="newEquipName" placeholder="name" /></li>
                <li><TextField fullWidth={true} type="text" name="newEquipSize" placeholder="size" /></li>
                <li><TextField fullWidth={true} type="text" name="newEquipDescription" placeholder="description" /></li>
                <li><TextField fullWidth={true} type="text" name="newEquipQuantity" placeholder="quantity" /></li>
                <li><TextField fullWidth={true} type="text" name="newEquipType" placeholder="type" /></li>             
                <TextField type="submit" />
            </form>
        </div>
    )
    }
}
export default EquipmentAdd;