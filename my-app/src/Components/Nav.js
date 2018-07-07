import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import {NavLink} from 'react-router-dom';

const Nav = () => (
      <div>
        <NavLink to="/page1">Page1</NavLink>
        <NavLink to="/page2">Page2</NavLink>
        <NavLink to="/page3">Page3</NavLink>
        <NavLink to="/board">Board</NavLink>
        <NavLink to="/square">Square</NavLink>
      </div>
)

export default Nav;
