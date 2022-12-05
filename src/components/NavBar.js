import React from "react";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function NavBar({ currentPage, handlePageChange }) {
    return (
        <div>
            <Nav justify variant="tabs" defaultActiveKey={"AboutMe"}>
                <Nav.Item>
                    <Nav.Link href={"AboutMe"}>About Me</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={"Portfolio"}>Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={"Resume"}>Resume</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={"Contact"}>Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}


export default NavBar;