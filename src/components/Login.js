import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';

class Login extends Component {
  constructor(props)
  {
    super(props);
    this.state = {name: '', password: ''}

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
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
  {console.log(1)
    this.props.handler(this.state.name, this.state.password)

  }

  render() {
    console.log(3)
    if(this.state.loggedIn === true)
    {
      console.log(4)
      return <Redirect to="/"/>
    }
    else{
      return (
        <div>
          <h1>
            Login
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
             <button onClick={this.onClick}>
               Login
             </button>
             <br/>
             <Link to="/Create">
               Create new account
             </Link>
         </div>
    );
    }
  }
}

export default Login;
