
import React from 'react'
import Header from '../components/Header'
class HeaderContainer extends React.Component{

    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        sessionStorage.clear();
    }

    render(){
        return <Header onClick={this.handleLogout}/>
    }
}

export default HeaderContainer