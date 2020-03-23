import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";


class UserLogin extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return (
        <div>
            <form
                noValidate
                autoComplete="off"
                onSubmit={this.props.handleSubmit}
                onChange={this.props.handleChange}
            >
                <TextField 
                    type="text" 
                    name="username" 
                    placeholder="Username" />
                <TextField 
                    type="password" 
                    name="userpassword" 
                    placeholder="Password" />
                <TextField 
                    type="submit"/>
            </form>
        </div>
        )
    }
}

export default UserLogin