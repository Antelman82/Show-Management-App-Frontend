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
import Home from './Home'
import EquipmentUpdate from './EquipmentUpdate'
import EquipmentAdd from './EquipmentAdd'
import ConfirmDeleteEquip from './ConfirmDeleteEquip'
import ApiCalls from './ApiCalls'


import axios from 'axios'

import {Route, Link, Redirect, Switch, withRouter} from "react-router-dom"
let backendUrl = process.env.REACT_APP_BACKEND_APP_URL || 'http://localhost:8080/api/equipments'
// let backendUrl = 'https://show-management-app-backend.herokuapp.com/api/'
class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      users: [],
      types: [],
      shows: [],
      equipments: [],
      userName: '',
      userpassword: '',
      customers: [],
      userInfo: {},
      equipmentInfo: {},
      newfirstName: '',
      newlastName: '',
      newuserName: '',
      newaddress: '',
      newcity: '',
      newstate: '',
      newphone: '',
      newemail: '',
      newpassword: '',
      newzip: '',
      newEquipName: '',
      newEquipSize: '',
      newEquipDescription: '',
      newEquipQuantity: '',
      newEquipType: '',
      equipName: '',
      equipSize: '',
      equipDescription: '',
      equipQuantity: '',
      equipType: ''
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
      this.setState({equipments: equipment.data}))
  }

  getAxiosUsers() {
    let userUrl = `${backendUrl}users`
    axios({method: 'GET', url: userUrl}).then(users =>
      this.setState({users: users.data}))
  }

  handleSubmit = event => {
    event.preventDefault()
    let userUrl = `${backendUrl}users/userName/${this.state.userName}`
        axios({method: 'GET', url: userUrl}).then(user => {
            // console.log('usercomp getaxiosusers', user)
            this.setState({
                userInfo: user.data
            })}
        )
    // console.log('handleSubmit')
    // console.log('handleSubmit this.state', this.state)
    // this.getAxiosUser()
    this.props.history.push(`/user/${this.state.userName}`)
  }

  handleNewUserSubmit = event => {
    event.preventDefault()
    // console.log('handleNewUserSubmit ', event, this.state)
    axios({
      method: "POST",
      url: `${backendUrl}users`,
      data: {
        firstName: this.state.newfirstName,
        lastName: this.state.newlastName,
        userName: this.state.newuserName,
        password: this.state.newpassword,
        address: this.state.newaddress,
        city: this.state.newcity,
        state: this.state.newstate,
        zip: this.state.newzip,
        phone: this.state.newphone,
        email: this.state.newemail
      }
    }).then(newUser => {
      // console.log('newuser-axios-then', newUser)
      this.setState({
        userName: this.state.newuserName,
        newfirstName: '',
        newlastName: '',
        newuserName: '',
        newpassword: '',
        newaddress: '',
        newcity: '',
        newstate: '',
        newzip: '',
        newphone: '',
        newemail: ''
      })
      let userUrl = `${backendUrl}users/userName/${this.state.userName}`
      axios({method: 'GET', url: userUrl}).then(user => {
        // console.log('usercomp getaxiosusers', user)
        this.setState({
            userInfo: user.data
        })})
    })
    this.props.history.push(`/user/${this.state.userName}`)
  }
  handleEquipUpdateSubmit = event => {
    event.preventDefault()
    console.log('handleEquipUpdateSubmit ', event)
  }

  handleNewEquipSubmit = event => {
    event.preventDefault()
    // console.log('handleNewEquipSubmit ', event)
    axios({
      method: "POST",
      url: `${backendUrl}equipments`,
      data: {
        name: this.state.newEquipName,
        size: this.state.newEquipSize,
        description: this.state.newEquipDescription,
        quantity: this.state.newEquipQuantity,
        type: this.state.newEquiptype,
      }
    }).then(newEquip => {
      // console.log('newuser-axios-then', newUser)
      this.setState({
        newEquipName: '',
        newEquipSize: '',
        newEquipDescription: '',
        newEquipQuantity: '',
        newEquiptype: ''
      })
    })
    this.getAxiosEquipment()
    this.props.history.push(`/equipment`)
  }

  handleDeleteEquip = event => {
    event.preventDefault()
    console.log('handleDeleteEquip ', event.target.id)
    axios({
      method: 'DELETE',
      url: `${backendUrl}equipments/${event.target.id}`
    }).then(deletedEquipment => {
      console.log(deletedEquipment)
    })
    this.getAxiosEquipment()
    this.props.history.push(`/equipment`)
  }

  handleChange = (event) => {
    console.log('handleChange event.target.name ', event.target.name)
    this.setState({
      [event.target.name]: event.target.value
    })
  } 

  render(){
    console.log("app-render this.state",this.state)
    return (
      <div className="App">
        <header className='topnav'>
          <h1>Show Management</h1>
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
            <div className='register-link'><Link to="/newUser">Register</Link></div>
          </div>
        </header>
        <div className="App-body">
          <main className="App-content">
            <Switch>
              <Route
                path="/home" 
                component={Home}
              />
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
                  data={this.state} 
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
                render={routerProps => 
                  <NewUser 
                  {...routerProps}
                  props={this.state}
                  handleNewUserSubmit={this.handleNewUserSubmit}
                  handleChange={this.handleChange}/>}

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
                  <Equipment {...this.props} equipment={this.state.equipments}/>} 
                />
              <Route
                path="/equipmentupdate/:id"
                render={routerProps =>
                  <EquipmentUpdate 
                    {...this.props} 
                    {...routerProps} 
                    equipment={this.state.equipments}
                    handleChange={this.handleChange}
                    handleEquipUdateSubmit={this.handleEquipUpdateSubmit} />} 
                />
              <Route
                path="/equipmentadd"
                render={routerProps =>
                  <EquipmentAdd
                    {...routerProps}
                    handleChange={this.handleChange}
                    handleNewEquipSubmit={this.handleNewEquipSubmit}
                    />} 
                />
              <Route
                path="/equipmentdelete/:id"
                render={routerProps =>
                  <ConfirmDeleteEquip 
                    {...this.props}
                    {...routerProps}
                    equipment={this.state.equipments}
                    handleDeleteEquip={this.handleDeleteEquip}
                    />} 
                />
              <Route path="/*" render={() => <Redirect to="/home" />} />
            </Switch>
          </main>
          <nav className="App-nav">
            {/* <h3>Navigation</h3> */}
              <ul>
                {/* <li><Link to="/show">Show</Link></li> */}
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/types">Show types</Link></li>
                <li><Link to="/customer">Customers</Link></li>
                <li><Link to="/users">Users</Link></li>
                {/* <li><Link to="/showdetails">ShowDetails(temp)</Link></li> */}
                <li><Link to="/equipment">Equipment</Link></li>
              </ul> 
          </nav>
          <aside className="App-sidebar">
            <h4>Show List</h4>
            <AsideList shows={this.state.shows}/>
          </aside>
        </div>
        <footer>© Antelman & Brueschke Enterprises, LLC</footer>
      </div>
    );
  }
}

export default withRouter(App);
