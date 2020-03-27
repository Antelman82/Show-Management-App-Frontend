import React, {Component} from 'react';

class Types extends Component {
  render(){

    const showTypes = this.props.types.map(type => {
      let typePictures = type.pictures.map((picture, index) => {
        return <img key={index} src={`assets/images/${picture}`} alt=''/>
      })

      return(
        <div className='type-container padding-left'>
            <h4>{type.type}</h4>
            <div>{type.description}</div>
            <div className='type-picture-container'>
              {typePictures}
            </div>
        </div>
      )
    })

    return (
        <div>
          {showTypes}
        </div>
    )
    }
}
export default Types;