import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";


function NavBar({ currentPage, handlePageChange }) {
    return (
        <div>
            <Navbar bg="secondary" expand="lg">
                <Container>
                    <Navbar.Brand className="text-dark" href={"AboutMe"}><em>Mehmet Musabeyoglu</em></Navbar.Brand>
                    <Nav justify variant="tabs" defaultActiveKey={"AboutMe"} onSelect={(item) => handlePageChange(item)}>
                        <Nav.Item>
                            <Nav.Link className="text-dark" eventKey={"AboutMe"}>About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-dark" eventKey={"Portfolio"}>Portfolio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-dark" eventKey={"Resume"}>Resume</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-dark" eventKey={"Contact"}>Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
}


export default NavBar;