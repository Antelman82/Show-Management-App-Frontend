import React, {Component} from 'react';
import './App.css';

import User from './User'
import Show from './Show'
import Types from './Types'
import Customer from './Customer'
import NewUser from './NewUser'
import ShowDetails from './ShowDetails'
import AsideList from './AsideList'
import UserLogin from './UserLogin'


import axios from 'axios'

import {Route, Link, Redirect, Switch, withRouter} from "react-router-dom"
const backendUrl = 'http://localhost:4000/api/'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      user: "",
      types: [],
      shows: [],
      username: '',
      userpassword: ''
    }
  }

  componentDidMount(){
    this.getAxiosTypes()
    this.getAxiosShows()
    
  }

  getAxiosTypes() {
    let typesUrl = `${backendUrl}types`
    axios({method: 'GET', url: typesUrl}).then(types =>
      this.setState({types: types.data}))
  }

  getAxiosShows() {
    let showsUrl = `${backendUrl}shows`
    axios({method: 'GET', url: showsUrl}).then(shows =>
      this.setState({shows: shows.data}))
  }

  getAxiosUser() {
    let usersUrl = `${backendUrl}users`
    axios({method: 'GET', url: usersUrl}).then(users =>
      this.setState({users: users.data}))
  }

  handleSubmit = event => {
    event.preventDefault()
    
    console.log('handleSubmit')
    console.log(this.state)
    // this.getAxiosUser()
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  } 

  render(){
    console.log("app-render this.state",this.state)


    return (
      <div className="App">
        <header>
          <h1>Show Management Application</h1>
          <Route 
            path="/"
            render={routerProps =>
              <UserLogin
                {...routerProps}
                user={this.state.user}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
              />}
          />
          <Link to="/newUser">Register</Link>
        </header>
        <div className="App-body">
          <main className="App-content">
            <Switch>
              <Route
                path="/user" 
                component={User}
                />
              <Route
                path="/show" 
                component={Show}
                />
              <Route
                path="/types" 
                render={() =>
                  <Types types={this.state.types}/>}
                />
              <Route
                path="/customer" 
                component={Customer}
                />
              <Route
                path="/newUser" 
                component={NewUser}
                />
              <Route
                path="/showdetails/:id" 
                render={routerProps =>
                  <ShowDetails 
                    {...routerProps}
                    shows={this.state.shows}
                    />}
                  />
            </Switch>
          </main>
          <nav className="App-nav">
            <h1>Navigation</h1>
              <ul>
                <li><Link to="/show">Show</Link></li>
                <li><Link to="/types">Show types</Link></li>
                <li><Link to="/customer">Customers</Link></li>
                <li><Link to="/user">User</Link></li>
                <li><Link to="/showdetails">ShowDetails(temp)</Link></li>
                <li>Equipment</li>
              </ul> 
          </nav>
          <aside className="App-sidebar">Show List
            <AsideList shows={this.state.shows}/>
          </aside>
        </div>
        <footer>Footer</footer>
      </div>
    );
  }
  
}

export default withRouter(App);
