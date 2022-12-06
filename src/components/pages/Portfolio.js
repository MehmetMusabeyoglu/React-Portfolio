import React from "react";
import { FaGithub } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
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
            <div className="container text-center pt-3">
                <CardGroup>
                    <Card variant="top" bg="secondary" className="m-3">
                        <Card.Img src={TextEditor} alt="Card image" />
                        <Card.Body>
                            <Card.Title className="text-dark"><b> <a className="text-dark" href={projects[0].deployed_url}>{projects[0].title}</a></b> </Card.Title>
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
                    </Card>
                    <Card variant="top" bg="secondary" className="m-3">
                        <Card.Img src={BookReco} alt="Card image" />
                        <Card.Body>
                            <Card.Title className="text-dark"><b> <a className="text-dark" href={projects[1].deployed_url}>{projects[1].title}</a></b> </Card.Title>
                            <Card.Text className="text-dark">
                                <b><em>This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.</em></b>
                                <a
                                    className="btn justify-content-md-center mx-1"
                                    href={projects[1].github_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    role="button"
                                    alt="GitHub icon"
                                >
                                    <FaGithub color="black" size={25} />
                                </a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card variant="top" bg="secondary" className="m-3">
                        <Card.Img src={BILL$} alt="Card image" />
                        <Card.Body>
                            <Card.Title className="text-dark"><b> <a className="text-dark" href={projects[2].deployed_url}>{projects[2].title}</a></b> </Card.Title>
                            <Card.Text className="text-dark">
                                <b><em>This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.</em></b>
                                <a
                                    className="btn justify-content-md-center mx-1"
                                    href={projects[2].github_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    role="button"
                                    alt="GitHub icon"
                                >
                                    <FaGithub color="black" size={25} />
                                </a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card variant="top" bg="secondary" className="m-3">
                        <Card.Img src={WeatherDashboard} alt="Card image" />
                        <Card.Body>
                            <Card.Title className="text-dark"><b> <a className="text-dark" href={projects[3].deployed_url}>{projects[3].title}</a></b> </Card.Title>
                            <Card.Text className="text-dark">
                                <b><em>This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.</em></b>
                                <a
                                    className="btn justify-content-md-center mx-1"
                                    href={projects[3].github_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    role="button"
                                    alt="GitHub icon"
                                >
                                    <FaGithub color="black" size={25} />
                                </a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card variant="top" bg="secondary" className="m-3">
                        <Card.Img src={NoteTaker} alt="Card image" />
                        <Card.Body>
                            <Card.Title className="text-dark"><b> <a className="text-dark" href={projects[4].deployed_url}>{projects[4].title}</a></b> </Card.Title>
                            <Card.Text className="text-dark">
                                <b><em>This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.</em></b>
                                <a
                                    className="btn justify-content-md-center mx-1"
                                    href={projects[4].github_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    role="button"
                                    alt="GitHub icon"
                                >
                                    <FaGithub color="black" size={25} />
                                </a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card variant="top" bg="secondary" className="m-3">
                        <Card.Img src={CodingQuiz} alt="Card image" />
                        <Card.Body>
                            <Card.Title className="text-dark"><b> <a className="text-dark" href={projects[5].deployed_url}>{projects[5].title}</a></b> </Card.Title>
                            <Card.Text className="text-dark">
                                <b><em>This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.</em></b>
                                <a
                                    className="btn justify-content-md-center mx-1"
                                    href={projects[5].github_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    role="button"
                                    alt="GitHub icon"
                                >
                                    <FaGithub color="black" size={25} />
                                </a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>

            </div>
        </div>

    );
}

export default Portfolio;