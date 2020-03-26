import axios from 'axios'
const backendUrl = 'http://localhost:4000/api/'

const ApiCalls = {
    getTypes: function() {
        let typesUrl = `${backendUrl}types`
        axios({method: 'GET', url: typesUrl}).then(response => {
            // return response.data
            console.log('getTypes response ',response.data)
        })
    },
    
    getShows: function() {
        let showsUrl = `${backendUrl}shows`
        axios({method: 'GET', url: showsUrl}).then(response => {
            // return response.data
            console.log('getShows response ', response.data)
        })
    },

    getUsers: function() {
        let usersUrl = `${backendUrl}users`
        axios({method: 'GET', url: usersUrl}).then(response => {
            // return response.data
            console.log('getUser response ', response.data)
        })
    },

    getCustomers() {
        let customersUrl = `${backendUrl}customers`
        axios({method: 'GET', url: customersUrl}).then(response => {
            // return response.data
            console.log('getCustomers', response.data)
        })
    },

    getEquipments() {
        let equipmentUrl = `${backendUrl}equipments`
        axios({method: 'GET', url: equipmentUrl}).then(response => {
            // return response.data
            console.log('getEquipments reponse ', response.data)
        })
    },

    getUsers() {
        let userUrl = `${backendUrl}users`
        axios({method: 'GET', url: userUrl}).then(response => {
            // return response.data
            console.log('getUsers response ', response.data)
        })
    },
}
export default ApiCalls