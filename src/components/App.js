import React , { Component } from 'react'
import '../styles/App.css';
import Home from './Home'
import Login from './Login'
import Create from './Create'
import axios from '../connection/axios'
import {
  BrowserRouter as Router,
  Route,
  Switch, Redirect
} from 'react-router-dom';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {loggedIn: null, username:''}

    this.logIn = this.logIn.bind(this)
  }

  logIn(name,password)
  {
    axios.post(`/users/login`, {name: name, password:password})
    .then(res => {
      console.log(2)
      sessionStorage.setItem('authToken', res.data.accessToken);
      axios.defaults.headers.common = {'Authorization': `bearer ${sessionStorage.getItem('authToken')}`}
      this.setState({loggedIn: true})
      console.log(this.state)
    }).catch(err => {
      console.log(err)
      this.setState({loggedIn : false})
    })
  }

  check()
  {
    axios.get('/users/check').then(res => {
      if(this.state.loggedIn !== true)
      {
        this.setState({loggedIn : true})
      }
    }).catch(err => {
      console.log(err)
      if(this.state.loggedIn !== false)
      {
        this.setState({loggedIn : false})
      }
    })
  }

  componentWillMount()
  {
    this.check()
  }

  render()
  {
    if(this.state.loggedIn == null)
    {
      return(<p>Loading........</p>)
    }
    else{
      return (
        <div className="App">
          <Router>
            <Switch>
              <Route exact path = '/' component={Home}>
              {this.state.loggedIn ? <Home/>: <Redirect to='/login'/>}
              </Route>
              <Route exact path = '/login'>
              {this.state.loggedIn ? <Redirect to='/'/>: <Login handler={this.logIn}/>}
              </Route>
              <Route exact path = '/Create' component={Create}/>
            </Switch>
          </Router>
        </div>
      );
    }
  }
}

export default App;

//{axios.defaults.headers.common['Authorization'].split(' ')[1] === '_' ? <Redirect to='/login'/> : <Home />}
