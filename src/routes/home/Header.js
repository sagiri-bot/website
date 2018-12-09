import React, { Component } from 'react'
import { Container, Button, Col, Row } from 'reactstrap';
import sagiri from '../../SagiriLogo.svg';

class Header extends Component {
  render() {
    return (
      <div className="sagiri-hero">
        <Container className="sagiri-hero-buttons d-flex justify-content-center flex-column">
          <Row className="mt-auto mb-auto text-center">
            <Col xs="12">
              <img src={sagiri} alt="Sagiri" className="mb-4" width="300px"/>
              <h1>Make your Discord more awesome</h1>
              <Button className="hero-button mt-4" /*href="/invite"*/ color="blurple" outline>
                <i className="fab fa-discord mr-2" />
                Invite
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Header