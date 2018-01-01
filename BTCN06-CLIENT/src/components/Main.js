

import React from 'react'
import SignUpContainer from '../containers/SignUpContainer'
import LoginContainer from '../containers/LoginContainer'
import HomeContainer from '../containers/HomeContainer'
import HeaderContainer from '../containers/HeaderContainer'
import DashBoardContainer from '../containers/DashBoardContainer'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'




class Main extends React.Component {
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
                    </Switch>
                </div>
                </Router>
            </main>
        );
    }
}

export default Main