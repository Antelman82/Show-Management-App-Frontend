import React, {Component} from 'react';
// import './App.css';

import User from './User'
import Show from './Show'
import Types from './Types'
import Customer from './Customer'
import NewUser from './NewUser'
import ShowDetails from './ShowDetails'
import AsideList from './AsideList'
import UserLogin from './UserLogin'
import Equipment from './Equipment'
import Users from './Users'
import ApiCalls from './ApiCalls'


import axios from 'axios'

import {Route, Link, Redirect, Switch, withRouter} from "react-router-dom"
const backendUrl = 'http://localhost:4000/api/'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      users: [],
      types: [],
      shows: [],
      equipments: [],
      username: '',
      userpassword: '',
      customers: []
    }
  }

  componentDidMount(){
    
    // let types = ApiCalls.getTypes()
    // let users = ApiCalls.getUsers()
    // let shows = ApiCalls.getShows()
    // let equipments = ApiCalls.getEquipments()
    // let customers = ApiCalls.getCustomers()

    // this.setState({
    //   types: types,
    //   users: users,
    //   shows: shows,
    //   equipments: equipments,
    //   customers: customers 
    // })
    // this.getAxiosGeneric('types')
    // this.getAxiosGeneric('shows')
    // this.getAxiosGeneric('customers')
    // this.getAxiosGeneric('equipments')
    // this.getAxiosGeneric('users')
    this.getAxiosTypes()
    this.getAxiosShows()
    this.getAxiosCustomers()
    this.getAxiosEquipment()
    this.getAxiosUsers()
  }

 
  // getAxiosGeneric(val) {
  //   let valUrl = `${backendUrl}${val}`
  //   axios.get(valUrl).then(response => {
  //     // this.response = response.data
  //     this.setState({
  //       [val]: response.data
  //     })
  //   }).catch(e => {
  //     this.errors.push(e)
  //   })
  // }

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

  getAxiosCustomers() {
    let customersUrl = `${backendUrl}customers`
    axios({method: 'GET', url: customersUrl}).then(customers =>
      this.setState({customers: customers.data}))
  }

  getAxiosEquipment() {
    let equipmentUrl = `${backendUrl}equipments`
    axios({method: 'GET', url: equipmentUrl}).then(equipment =>
      this.setState({equipment: equipment.data}))
  }

  getAxiosUsers() {
    let userUrl = `${backendUrl}users`
    axios({method: 'GET', url: userUrl}).then(users =>
      this.setState({users: users.data}))
  }

  handleSubmit = event => {
    event.preventDefault()
    
    // console.log('handleSubmit')
    // console.log(this.state)
    // this.getAxiosUser()
    this.props.history.push(`/user/${this.state.username}`)

  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  } 

  render(){
    // console.log("app-render this.state",this.state)


    return (
      <div className="App">
        <header className='topnav'>
          <h1><Link to="/">Show Management</Link></h1>
          <div className="login-container">
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
          </div>
        </header>
        <div className="App-body">
          <main className="App-content">
            <Switch>
              <Route
                path="/users" 
                render={() =>
                  <Users users={this.state.users}
                />}
              />
              <Route
                path="/user" 
                render={routerProps =>
                  <User 
                  {...routerProps} 
                  user={this.state.username}
                />}
              />
              <Route
                path="/types" 
                render={() =>
                  <Types types={this.state.types}
                />}
              />
              <Route
                path="/customer"
                render={()=>
                  <Customer customers={this.state.customers}
                />} 
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
              <Route
                path="/equipment"
                render={()=>
                  <Equipment equipment={this.state.equipment}/>} 
                />
            </Switch>
          </main>
          <nav className="App-nav">
            <h3>Navigation</h3>
              <ul>
                {/* <li><Link to="/show">Show</Link></li> */}
                <li><Link to="/types">Show types</Link></li>
                <li><Link to="/customer">Customers</Link></li>
                <li><Link to="/users">Users</Link></li>
                {/* <li><Link to="/showdetails">ShowDetails(temp)</Link></li> */}
                <li><Link to="/equipment">Equipment</Link></li>
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
