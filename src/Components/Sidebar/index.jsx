import React from "react";
import { Col, Row, Button, Container } from "react-bootstrap";

//*styles
import "./Sidebar.scss";

const Sidebar = () => {
  const sampleArray = [1, 2, 3, 4, 5];

  return (
    <div className="Sidebar__cointainer d-inline-blok border ">
      <Container>
        <div className="Sidebar__header d-inline">
          <Row>
            <img
              className="Sidebar__header__avatar "
              src="https://i.pravatar.cc/300"
              alt="avatar placeholder"
            />

            <Col>
              <h5>UserName</h5>
              <p className="text-muted d-flex flex-grow-1">Name Last name</p>
            </Col>
            <Col>
              <span className="Sidebar__header__button">Switch</span>
            </Col>
          </Row>
          <Row className="Sidebar__suggestion d-flex justify-content-between   align-items-center">
            <p className="font-weight-bold text-black-50 m-0 mr-4">
              Suggestions for you
            </p>
            <Col>
              <Button
                className="
              Sidebar__suggestion__button 
              Sidebar__suggestion__Suggestbutton p-0"
              >
                See all
              </Button>
            </Col>
            {sampleArray.map((element, i) => (
              <Row key={i} className="mb-3 mt-2">
                <img
                  className="Sidebar__suggestion__avatar ml-3 align-self-center"
                  src="https://i.pravatar.cc/300"
                  alt="avatar placeholder"
                />

                <Col className="flex-grow-1 mr-3 ">
                  <h6 className="mb-0">UserName</h6>

                  <span className="">Followed</span>
                </Col>

                <Button className=" ml-3 pl-3 Sidebar__suggestion__button">
                  Follow
                </Button>
              </Row>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Sidebar;
