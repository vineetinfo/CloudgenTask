import React, { Component } from 'react'
import Styled from 'styled-components';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark text-title pl-5 text-center">
        header
      </NavWrapper>
    )
  }
}


const NavWrapper = Styled.nav`
text-transform:capitalize;
text-align:center;
background:var(--mainMaroon);
color:var(--mainWhite);
font-size:1.4rem;
margin-bottom:0.5rem;
padding-bottom:0.5rem;
`