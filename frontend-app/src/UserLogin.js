import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";


class UserLogin extends Component {
    
    render(){
        return (
        <form
            noValidate
            autoComplete="off"
            onSubmit={this.props.handleSubmit}
            onChange={this.props.handleChange}
        >
            <TextField 
                type="text" 
                name="userName" 
                placeholder="Username" />
            <TextField 
                type="password" 
                name="password" 
                placeholder="Password" />
            <TextField 
                type="submit"/>
        </form>
        )
    }
}

export default UserLogin