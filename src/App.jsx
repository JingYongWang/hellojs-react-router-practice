import React from 'react'
import {Link} from 'react-router'

require('vendor/vendor.scss');

export class App extends React.Component {
  render() {
    return (
      <div>
        React Example
        <div>
          <Link to  ="/counter">Counter</Link>
          <Link to  ="/about/:name">about</Link>
        </div>
        {this.props.children}
      </div>
    )
  }
}
