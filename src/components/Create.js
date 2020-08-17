import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from '../connection/axios'

class Create extends Component {
  constructor(props)
  {
    super(props);
    this.state = {name: '', password: ''}

    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  onChange(e)
  {
    if(e.target.name === 'name')
    {
      this.setState({name: e.target.value})
    }
    else
    {
      this.setState({password: e.target.value})
    }
  }

  onClick(e)
  {
    axios.post(`/users/create`, {name: this.state.name, password:this.state.password})
  }

  render() {
    return (
      <div>
        <h1>
          Create Account
        </h1>
           <label>
             <input placeholder="Username" type="text" name="name" onChange={this.onChange} />
           </label>
           <br/>
           <label>
             <input placeholder="Password" type="text" name="password" onChange={this.onChange}/>
           </label>
           <br/>
           <br/>
           <Link to="/" onClick={this.onClick}>
             SignUp
           </Link>
       </div>
  );
  }
}

export default Create;
