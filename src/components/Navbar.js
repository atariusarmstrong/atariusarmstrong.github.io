import React, { Component } from 'react';
import styled from 'styled-components'

const NavBar = styled.div`
    width: 100vw;
    height: 60px;
    background-color: gold;
`
const List = styled.ul`
    list-style-type: none;
    float: right;
    li {
        display: inline;
        text-transform: uppercase;
        padding: 10px;
    }
`

class Navbar extends Component {
    render() {
        return (
            <NavBar>
                <List>
                    <li>About Me</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </List>
            </NavBar>
        );
    }
}

export default Navbar;