import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";


class NewUser extends Component {

  render(){
    //   console.log('NewUser render this.props ', this.props)
    return (
        <div className='padding-left'>
            <form
                noValidate
                autoComplete="off"
                onSubmit={this.props.handleNewUserSubmit}
                onChange={this.props.handleChange}
            >
                <li><TextField type="text" name="newfirstName" placeholder="First Name" /></li>
                <li><TextField type="text" name="newlastName" placeholder="Last Name" /></li>
                <li><TextField type="text" name="newuserName" placeholder="Username" /></li>
                <li><TextField type="password" name="newpassword" placeholder="Password" /></li>
                <li><TextField type="text" name="newaddress" placeholder="Address" /></li>
                <li><TextField type="text" name="newcity" placeholder="City" /></li>
                <li><TextField type="text" name="newstate" placeholder="State" /></li>
                <li><TextField type="text" name="newzip" placeholder="Zipcode" /></li>
                <li><TextField type="text" name="newphone" placeholder="(XXX) XXX-XXXX" /></li>
                <li><TextField type="text" name="newemail" placeholder="Email" /></li>
                
                <TextField type="submit" />
            </form>
        </div>
    )
    }
}
export default NewUser;