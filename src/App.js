import React, { Component } from 'react';
import Persons from './Persons'
import axios from 'axios'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      persons: []
    }
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      console.log(res);
      this.setState({ persons: res.data })
    })
  }

  render() {
    return (
      <div>
        <Persons />
        {
          this.state.persons.map(p => {
            return (
              <React.Fragment>
                <ol>
                  <li>{p.name}</li>
                  <li>{p.username}</li>
                  <li>{p.company.name}</li>
                  <li>{p.address.zipcode}</li>
                </ol>
              </React.Fragment>
            )
          })
        }
      </div>
    )
  }
}

export default App;
