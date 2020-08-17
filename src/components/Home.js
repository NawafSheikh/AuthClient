import React, { Component } from 'react';
import axios from '../connection/axios'

class Home extends Component {
  constructor(props)
  {
    super(props)

    this.state= {name : ''}
  }

  componentWillMount()
  {
    axios.get('/users/info').then(res => {
      this.setState({name:res.data[0].name})
    }).catch(err => {
      console.log(err)
      this.setState({name:''})
    })
  }

  render() {
  return <h1>Hello {this.state.name}</h1>
  }
}

export default Home;
