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
                <TextField type="text" name="newUsername" placeholder="Username" />
                <TextField type="text" name="newFirstName" placeholder="First Name" />
                <TextField type="text" name="newLastName" placeholder="Last Name" />
                <TextField type="text" name="newUserPassword" placeholder="Password" />
                <TextField type="text" name="newUserEmail" placeholder="Email" />
                <TextField type="text" name="newUserPhone" placeholder="(XXX) XXX-XXXX" />
                <TextField type="text" name="newAddress" placeholder="Address" />
                <TextField type="text" name="newCity" placeholder="City" />
                <TextField type="text" name="newUState" placeholder="State" />
                <TextField type="text" name="newZipcode" placeholder="Zip" />
                <TextField type="submit" />
            </form>
        </div>
    )
    }
}
export default NewUser;