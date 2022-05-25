// import React, { Component } from 'react'

// export default class ClassCounter extends Component {
//   render() {
//     return (
//       <div>ClassCounter</div>
//     )
//   }
// }



import React, {Component, useState} from 'react'


class ClassComponent extends Component {

  // const [count, setCount] = useState();

  render() {
    return(
      <>
        <h1>count: {this.props.start}</h1>
        <button>+</button>
      </>
    )
  }
}

export default ClassComponent;