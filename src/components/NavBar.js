import React from 'react'
import {Link, Route, withRouter} from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Account from './Account'
import {Menu} from 'antd'

const NavBar = (props) =>{
    const {userLoggedIn, handleAuth} = props

    return (
        <div>
            <Menu theme="light" mode="horizontal">
            
                { userLoggedIn ? (
                    <>
                       <Menu.Item>
                          <Link to="/account">Account </Link>
                       </Menu.Item>
                       <Menu.Item>
                        <Link onClick={() => {
                                localStorage.removeItem('token')
                                alert("Successfully loggedout")
                                handleAuth()
                                props.history.push("/")
                                }}>Logout</Link>
                       </Menu.Item>
                 
                    </>
                    ) : (
                    <>
                     <Menu.Item>
                          <Link to="/"> Home   </Link>
                      </Menu.Item>
                      <Menu.Item>
                         <Link to="/register"> Register  </Link>
                      </Menu.Item>
                      <Menu.Item>
                          <Link to="/login"> Login   </Link>
                      </Menu.Item>
                     
                    </>
                    )
                }

            <Route path="/" component={Home} exact={true} />
            <Route path="/register" component={Register} exact={true} />
            <Route path="/login" render={(props)=> {
                return (
                    <Login {...props} handleAuth={handleAuth} />
                )
            }} exact={true} />  
            <Route path="/account" component={Account} exact={true} />
            </Menu>  

        </div>
    )
}

export default withRouter(NavBar)