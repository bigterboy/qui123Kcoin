import React from 'react'


class SideBar extends React.Component {

    render() {
        return (

            <aside>
                <div id="sidebar" className="nav-collapse ">
                    {/* sidebar menu start*/}
                    <ul className="sidebar-menu">
                        <li>
                            <a href="/wallet">
                                <i className="icon_house_alt" />
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li className="sub-menu">
                            <a href="javascript:;">
                                <i className="icon_document_alt" />
                                <span>Forms</span>
                                <span className="menu-arrow arrow_carrot-right" />
                            </a>
                            <ul className="sub">
                                <li><a href="/wallet">Form Elements</a></li>
                                <li><a href="/wallet">Form Validation</a></li>
                            </ul>
                        </li>
                        
                    </ul>
                    {/* sidebar menu end*/}
                </div>
            </aside>
        );

    }

}

export default SideBar