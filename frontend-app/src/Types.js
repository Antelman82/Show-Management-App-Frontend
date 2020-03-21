import React, {Component} from 'react';

class Types extends Component {
  render(){
    return (
        <div>
            <div>Show Types</div>
              <div nameClass='type-container'>
                <h4>Fireworks</h4>
                <div>Description</div>
                <div className='type-picture-container'>
                  <div>Image</div>
                  <div>Image</div>
                </div>
              </div>
              <div nameClass='type-container'>
                <h4>Pyrotechnics</h4>
                <div>Description</div>
                <div className='type-picture-container'>
                  <div>Image</div>
                  <div>Image</div>
                </div>
              </div>
              <div nameClass='type-container'>
                <h4>Special Effects</h4>
                <div>Description</div>
                <div className='type-picture-container'>
                  <div>Image</div>
                  <div>Image</div>
                </div>
              </div>
        </div>
    )
    }
}
export default Types;