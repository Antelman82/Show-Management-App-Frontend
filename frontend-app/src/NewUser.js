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
                <TextField type="text" name="newUserName" placeholder="Name" />
                <TextField type="text" name="newUserPassword" placeholder="Password" />
                <TextField type="submit" />
            </form>
        </div>
    )
    }
}
export default NewUser;