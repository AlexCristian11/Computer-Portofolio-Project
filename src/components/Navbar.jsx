import React from 'react'
import styled from 'styled-components';

function Navbar() {
  return (
    <NavBar>
        <div className="navbar--name">
            <h3>Alexandru-Cristian Popescu</h3>
        </div>
        <ul className="navbar--items">
            <li>Legend</li>
            <li>About</li>
            <li>Project</li>
            <li>Skills</li>
        </ul>
    </NavBar>
  )
}

const NavBar = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Press Start 2P', cursive;
    font-size: .7rem;
    height: 30px;
    background-color: #000;
    color: #ffff00;

    .navbar--name {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 400px;
        height: 100%;
        text-align: center;
        background-image: linear-gradient(to right, #007399, #400080);
        color: white;
    }

    ul {
        list-style-type: none;
        width: 80%;
        display: flex;
        justify-content: space-around;
    }
`

export default Navbar