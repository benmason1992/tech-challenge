import React from "react";
import {Card} from 'react-bootstrap';
import '../../index.css';

const Header = ({ children }) => (
    <Card.Header>
        <h1>
        { children }
        </h1>
    </Card.Header>
);

export default Header;