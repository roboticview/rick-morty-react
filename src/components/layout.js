import React, { Component } from 'react';
import ListView from './listView';
import HeroComponent from './heroComponent';
import NavBar from './navBarComponent';

class Layout extends Component {
    state = {  } 
    render() { 
        return (
            <div className='container py-5'>
                <NavBar />
                <HeroComponent/>
                <ListView />
            </div>
        );
    }
}
 
export default Layout;