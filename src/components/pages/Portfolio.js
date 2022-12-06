import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import TextEditor from "../assets/TextEditor.jpg";
import BookReco from "../assets/BookReco's.png";
import BILL$ from "../assets/BILL$.jpg";
import WeatherDashboard from "../assets/WeatherDashboard.jpg";
import NoteTaker from "../assets/NoteTaker.gif";
import CodingQuiz from "../assets/CodingQuiz.png";


function Portfolio() {

    const projects = [
        {
            "title": "Text Editor",
            "deployed_url": "https://text-editor-2022-mm.herokuapp.com/",
            "github_url": "https://github.com/MehmetMusabeyoglu/Text-Editor"
        },
        {
            "title": "Book Reco's",
            "deployed_url": "https://sbhikshe.github.io/Book-Recos/",
            "github_url": "https://github.com/sbhikshe/Book-Recos"
        },
        {
            "title": "BILL$",
            "deployed_url": "https://bills-manager2022.herokuapp.com/",
            "github_url": "https://github.com/danialmirza99/bills-budget-app"
        },
        {
            "title": "Weather Dashboard",
            "deployed_url": "https://mehmetmusabeyoglu.github.io/Weather-Dashboard/",
            "github_url": "https://github.com/MehmetMusabeyoglu/Weather-Dashboard"
        },
        {
            "title": "Note Taker",
            "deployed_url": "https://mehmet-note-taker.herokuapp.com/",
            "github_url": "https://github.com/MehmetMusabeyoglu/Note-Taker"
        },
        {
            "title": "Coding Quiz",
            "deployed_url": "https://mehmetmusabeyoglu.github.io/Coding-Quiz-Game/",
            "github_url": "https://github.com/MehmetMusabeyoglu/Coding-Quiz-Game"
        }
    ]

    return (
        <div>
            <h2 className="text-center text-light pt-3"><b>My Projects</b></h2>
            <div className="container text-center">
                <Card className="text-secondary">
                    <Card.Img src={TextEditor} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title className="text-center text-light pt-5">Text Editor</Card.Title>
                        <Card.Text className="text-center text-light pt-5">
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer. <FaGithub />
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <CardGroup>
                    <Card bg="secondary" >
                        <Card.Img src={TextEditor} alt="Card image" />
                        <Card.Body>
                            <Card.Title className="text-dark"><b> <a className="text-dark" href={projects[0].deployed_url}>Text Editor</a></b> </Card.Title>
                            <Card.Text className="text-dark">
                                <b><em>This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.</em></b>
                                <a
                                    className="btn justify-content-md-center mx-1"
                                    href={projects[0].github_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    role="button"
                                    alt="GitHub icon"
                                >
                                    <FaGithub color="black" size={25} />
                                </a>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                <b><em>This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.</em></b>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card>
                        <Card.Img src={TextEditor} alt="Card image" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                <b><em>This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.</em></b>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                <b><em>This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.</em></b>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card>
                        <Card.Img src={TextEditor} alt="Card image" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                <b><em>This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.</em></b>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                <b><em>This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.</em></b>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>

            </div>
        </div>

    );
}

export default Portfolio;