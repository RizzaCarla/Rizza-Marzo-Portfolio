import React, { Fragment } from 'react';
import { Col, Row, Container, Carousel } from 'react-bootstrap';
import { images } from '../utilities/utilities';
import GitHubIcon from '@mui/icons-material/GitHub';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const Projects = () => {
  return (
    <Fragment>

      <Row className="body-1">

        <Col>
          <h1>Skills</h1>
        </Col>

        <Col>
          <p>JavaScript</p>
          <p>React</p>
          <p>Redux</p>
        </Col>

        <Col>
          <p>Ruby</p>
          <p>Ruby on Rails</p>
          <p>Node</p>
        </Col>

        <Col>
          <p>Express</p>
          <p>Mongoose</p>
          <p>Axios</p>
        </Col>

        <Col>
          <p>HTML</p>
          <p>CSS</p>
          <p>Bootstrap</p>
        </Col>

        <Col>
          <p>MongoDB</p>
          <p>PostgreSQL</p>
          <p>SQL</p>
        </Col>

        <Col>
          <p>Firebase</p>
          <p>Heroku</p>
        </Col>

      </Row>

      <Row className="body-3">
        <Col>
          <Carousel>
            <Carousel.Item>
              {images.Satisfy1}
            </Carousel.Item>
            <Carousel.Item>
              {images.Satisfy2}
            </Carousel.Item>
            <Carousel.Item>
              {images.Satisfy3}
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col>
          <Row>
            <h1>Satisfy</h1>
            <p>A spotify clone for people passionate about music</p>
          </Row>
          <Row className="d-flex flex-row justify-content-around">
            <Col>
              <a className="no-underline" target="_blank" href="https://satisfy-your-music-cravings.herokuapp.com/#/us">
                <p><HeadphonesIcon />&nbsp;Live</p>
              </a>
            </Col>
            <Col>
              <a className="no-underline" target="_blank" href="https://github.com/RizzaCarla/Satisfy">
                <p><GitHubIcon />&nbsp;Github</p>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      
      <Row className="body-2">
        <Col>
          <Row>
            <h1>Melting Pot</h1>
            <p> A recipe sharing web app that saves generations of family recipes and shares it with the food loving community.</p>
          </Row>
          <Row className="d-flex flex-row justify-content-around">
            <Col>
              <a className="no-underline" target="_blank" href="https://melting-pot-2.herokuapp.com/#/">
                  <p><RestaurantIcon/>&nbsp;Live</p>
              </a>
            </Col>
            <Col>
              <a className="no-underline" target="_blank" href="https://github.com/ChristopherJose707/Melting-Pot">
                  <p><GitHubIcon />&nbsp;Github</p>
              </a>
            </Col>
          </Row>
        </Col>
        <Col>
          <Carousel>
            <Carousel.Item>
              {images.MeltingPot1}
            </Carousel.Item>
            <Carousel.Item>
              {images.MeltingPot2}
            </Carousel.Item>
            <Carousel.Item>
              {images.MeltingPot3}
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

    </Fragment>
  )
}

export default Projects;