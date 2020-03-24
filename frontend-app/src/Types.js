import React, {Component} from 'react';

class Types extends Component {
  render(){

    const showTypes = this.props.types.map(type => {
      // console.log(type.pictures[0])
      let typePictures = type.pictures.map((picture, index) => {
        return <img key={index} src={`assets/images/${picture}`} alt=''/>
      })

      return(
        <div key={type._id} className='type-container'>
            <h4>{type.type}</h4>
            <div>{type.description}</div>
            <div className='type-picture-container'>
              {typePictures}
            </div>
        </div>
      )
    })

    // console.log(this.props)
    // console.log('this.props.types[0]', this.props.types[0])
    return (
        <div>
          {showTypes}
        </div>
    )
    }
}
export default Types;