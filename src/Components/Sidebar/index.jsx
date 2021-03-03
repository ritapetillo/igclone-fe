import React, { useState } from "react";
import { Col, Row, Button, Container, Modal } from "react-bootstrap";

//*styles
import "./Sidebar.scss";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sampleArray = [1, 2, 3, 4, 5];

  return (
    <div className="Sidebar__cointainer d-inline-blok  pt-5">
      <Container>
        <div className="Sidebar__header d-inline">
          <Row>
            <img
              className="Sidebar__header__avatar"
              src="https://i.pravatar.cc/300"
              alt="avatar placeholder"
            />

            <Col className="Sidebar__header__content">
              <h5 className="Sidebar__header__username">UserName</h5>
              <p className="text-muted d-flex flex-grow-1 Sidebar__header__description">
                Name Last name
              </p>
            </Col>
            <Col className="p-0 text-right">
              <span className="Sidebar__header__button  ">Switch</span>
            </Col>
          </Row>
        </div>
        <Row className="Sidebar__suggestion d-flex justify-content-between   align-items-center">
          <h6 className=" font-weight-bold Sidebar__suggestion__title  text-black-50 m-0 mr-4">
            Suggestions for you
          </h6>
          <Col className="p-0 text-right">
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

              <Col className="flex-grow-1 mr-3 Sidebar__suggestion__content justify-content-between">
                <h6
                  onClick={handleShow}
                  className="mb-0 Sidebar__suggestion__username bolder"
                >
                  UserName
                </h6>

                <span className="Sidebar__suggestion__description text-right p-0 w-100">
                  Followed
                </span>
              </Col>

              <Button className=" ml-3 pl-3 Sidebar__suggestion__button">
                Follow
              </Button>
            </Row>
          ))}
        </Row>

        {/* 
          
          <Modal >
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
            //   <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            //   <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer> 
          </Modal>*/}
        {/* <div show={show} onHide={handleClose} className="Sidebar__modal">
          <div className="Sidebar__modal__header"></div>
            <img
              className="Sidebar__modal__avatar "
              src="https://i.pravatar.cc/300"
              alt="avatar placeholder"
            />
          <div className="Sidebar__modal__data">
            <div>
              <h6>Username</h6>
              <p>name surname</p>
              <span>Followed by ladys_miaaaaa and 2 others</span>
            </div>
          </div>
          <div className="Sidebar__modal__postPreview"></div>
          <div className="Sidebar__modal__footer"></div>
        </div>*/}
      </Container>
    </div>
  );
};

export default Sidebar;
