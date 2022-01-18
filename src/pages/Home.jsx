import React, { Fragment } from 'react';
import { Container, Row, Col, Ratio } from 'react-bootstrap';
import { images } from '../utilities/utilities';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home = () => {
  return (
    <Fragment>

        <Row className="home body-1 p-5">
          <Col xs="12" sm="6" md="4" lg="4" xl="4" className="d-flex justify-content-center align-items-center align-self-center">
            {images.profilePic}
          </Col>
          <Col xs="12" sm="12" md="8" lg="8" xl="8">
            <h1>Rizza Marzo</h1>
            <p>Software Engineer</p>
            <p>I'm passionate about many things, and programming is one of them. It's very satisfying solving problems and using a language to build beautiful and user friendly web apps.</p>
            <p>I also love hiking, traveling, painting, and air plants.</p>

            <Container>
              <Row>
                <Col>
                  <Ratio aspectRatio="16x9">
                    {images.AirPlant1}
                  </Ratio>
                </Col>
                <Col>
                  <Ratio aspectRatio="16x9">
                    {images.AirPlant2}
                  </Ratio>
                </Col>
                <Col>
                  <Ratio aspectRatio="16x9">
                    {images.AirPlant3}
                  </Ratio>
                </Col>
              </Row>
            </Container>
              
            <hr />

            <Container className="p-5">
              <h1>Profiles</h1>
              <Row className="d-flex flex-row justify-content-around">
                <Col>
                  <a className="no-underline" target="_blank" href="https://github.com/RizzaCarla">
                    <GitHubIcon /> &nbsp;
                    Github
                  </a>
                </Col>
                <Col>
                  <a className="no-underline" target="_blank" href="https://www.linkedin.com/in/rizzamarzo/">
                    <LinkedInIcon /> &nbsp;
                    LinkedIn
                  </a>
                </Col>
              </Row>
            </Container>

          </Col>
        </Row>

    </Fragment>
  )
}

export default Home