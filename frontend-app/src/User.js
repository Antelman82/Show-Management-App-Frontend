import React, {Component} from 'react';

class User extends Component {
  render(){
    return (
        <div>
            <div>Current User: ________</div>
            <div>ShowList(s):</div>
            <ul>
              <li className='show-list'><button>2018</button></li>
              <li className='show-list'><button>2019</button></li>
              <li className='show-list'><button>2020</button></li>
              <li className='show-list'><button>2021</button></li>
              <li className='show-list'><button>All</button></li>
            </ul>
            <div>Show Details:
              <div>Status</div>
              <div>Date</div>
              <div>Show</div>
              <div>Type</div>
              <div>Role</div>
            </div> 
        </div>
    )
    }
}
export default User;