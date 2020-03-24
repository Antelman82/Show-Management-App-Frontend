import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";


class NewUser extends Component {
  render(){
    return (
        <div>
            <form
                noValidate
                autoComplete="off"
                // onSubmit={props.handleSubmit}
                // onChange={props.handleChange}
            >
                <li><TextField type="text" name="newFirstName" placeholder="First Name" /></li>
                <li><TextField type="text" name="newLastName" placeholder="Last Name" /></li>
                <li><TextField type="text" name="newUsername" placeholder="Username" /></li>
                <li><TextField type="text" name="newUserPassword" placeholder="Password" /></li>
                <li><TextField type="text" name="newAddress" placeholder="Address" /></li>
                <li><TextField type="text" name="newCity" placeholder="City" /></li>
                <li><TextField type="text" name="newUState" placeholder="State" /></li>
                <li><TextField type="text" name="newZipcode" placeholder="Zip" /></li>
                <li><TextField type="text" name="newUserPhone" placeholder="(XXX) XXX-XXXX" /></li>
                <li><TextField type="text" name="newUserEmail" placeholder="Email" /></li>
                
                <TextField type="submit" />
            </form>
        </div>
    )
    }
}
export default NewUser;