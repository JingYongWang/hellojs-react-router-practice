import React from 'react'
import {Link} from 'react-router'

require('vendor/vendor.scss');

export class App extends React.Component {
  render() {
    return (
      <div>
        React Example
        <div>
          <Link to = "/counter">
            <button className = 'btn'> counter Page</button>
          </Link>
          {/*http://localhost:8000/about/test*/}
          <Link to = "/about/:name" style = {{ marginLeft: 30  }}>
            <button className = 'btn'> About Page</button>          
          </Link>
        </div>
        {this.props.children}
      </div>
    )
  }
}
