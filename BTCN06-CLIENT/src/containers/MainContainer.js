

import React from 'react'
import SignUpContainer from './SignUpContainer'
import LoginContainer from './LoginContainer'
import HomeContainer from './HomeContainer'
import HeaderContainer from './HeaderContainer'
import DashBoardContainer from './DashBoardContainer'
import VertifyContainer from './VertifyContainer'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'




class MainContainer extends React.Component {
    render() {
        return (
            <main>
                <Router>
                <div> 
                    <Route path='/*' component={HeaderContainer}/>
                    <Switch>
                        <Route exact path='/' component={HomeContainer} />
                        <Route path='/sign-up' component={SignUpContainer} />
                        <Route path='/login' component={LoginContainer} />
                        <Route path='/wallet' component = {DashBoardContainer}/>
                        <Route path='/vertify' component = {VertifyContainer}/>
                    </Switch>
                </div>
                </Router>
            </main>
        );
    }
}

export default MainContainer