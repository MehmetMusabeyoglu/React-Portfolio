import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';

function Portfolio() {

    const projects = [
        {
            "title": "",
            "img_url": "",
            "deployed_url": "",
            "github_url": ""
        },
        {
            "title": "",
            "img_url": "",
            "deployed_url": "",
            "github_url": ""
        },
        {
            "title": "",
            "img_url": "",
            "deployed_url": "",
            "github_url": ""
        },
        {
            "title": "",
            "img_url": "",
            "deployed_url": "",
            "github_url": ""
        },
        {
            "title": "",
            "img_url": "",
            "deployed_url": "",
            "github_url": ""
        },
        {
            "title": "",
            "img_url": "",
            "deployed_url": "",
            "github_url": ""
        }
    ]

    return (
        <div>
            <h2 className="text-center text-light pt-3 "><b>My Projects</b></h2>
            <div className="container text-center">
                <Card className="bg-dark text-white">
                    <Card.Img src={projects.img_url} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer. <FaGithub />
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>

            </div>
        </div>

    );
}

export default Portfolio;