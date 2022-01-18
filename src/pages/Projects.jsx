import React, { Fragment } from 'react';
import { Col, Row, Container, Carousel } from 'react-bootstrap';
import { images } from '../utilities/utilities';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const Projects = () => {
  return (
    <Fragment>
      <Container className="projects">
        <Row className="p-5">
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
            <Col>
              <h1>Satisfy</h1>
              <p>A spotify clone for people passionate about music</p>
            </Col>
            <Row className="d-flex flex-col">
              <Col>
                <Link to="https://satisfy-your-music-cravings.herokuapp.com/#/us">
                  <Col className="d-flex flex-row justify-content-center">
                    <HeadphonesIcon />
                    <p>Live</p>
                  </Col>
                </Link>
              </Col>
              <Col>
                <Link to="https://github.com/RizzaCarla/Satisfy">
                  <Col className="d-flex flex-row justify-content-center">
                    <GitHubIcon />
                    <p>Github</p>
                  </Col>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
        
        <Row className="p-5">
          <Col>
            <Carousel>
              <Carousel.Item>
                {images.MeltingPot1}
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col>
            <Col>
              <h1>Melting Pot</h1>
              <p> A recipe sharing web app that saves generations of family recipes and shares it with the food loving community.</p>
            </Col>
            <Row className="d-flex flex-col">
              <Col>
                <Link to="https://melting-pot-2.herokuapp.com/#/">
                  <Col className="d-flex flex-row justify-content-center">
                    <RestaurantIcon/>
                    <p>Live</p>
                  </Col>
                </Link>
              </Col>
              <Col>
                <Link to="https://github.com/ChristopherJose707/Melting-Pot">
                  <Col className="d-flex flex-row justify-content-center">
                    <GitHubIcon />
                    <p>Github</p>
                  </Col>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default Projects;