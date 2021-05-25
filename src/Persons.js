import axios from 'axios';
import React, { Component } from 'react'

export class Persons extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ''
        }
    }

    nameHandler = (event) => {
        this.setState({ name: event.target.value })
    }

    handlesubmit = (event) => {
        event.preventDefault();
        const user = {
            name: this.state.name
        }
        axios.post('https://jsonplaceholder.typicode.com/users', { user }).
            then(res => {
                console.log(res)
                console.log(res.data)
            })
    }



    render() {
        return (
            <div>
                <form onSubmit={this.handlesubmit}>
                    <label>
                        Persone name:
                    <input type="text" onChange={this.nameHandler}></input>
                    </label>
                    <button type="submit">AA</button>
                </form>
            </div>
        )
    }
}

export default Persons;
