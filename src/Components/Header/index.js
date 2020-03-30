import React from "react";
import {Card} from 'react-bootstrap';
import '../../index.css';

const Header = ({ children }) => (
    <Card.Header>
        <h1>
        { children }
        </h1>
        <h6>Add as many players as you like for the tournament!</h6>
    </Card.Header>
);

export default Header;