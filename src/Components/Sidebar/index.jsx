import React, { useState, useEffect } from "react";
import { Col, Row, Button, Container, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getFollowingUsersPostsAction } from "../../Actions/postActions";
import { followUser, unfollowUser } from "../../Api/userApi";
import uniqid from "uniqid";
//*styles
import "./Sidebar.scss";

const Sidebar = props => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [follow, setFollow] = useState(false);
  const [usersFollow, setUsersFollow] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const currentUser = useSelector(
    state => state.currentUser?.user?.currentUser
  );

  const followingUsers = useSelector(
    state => state.currentUser?.user?.currentUser?.following
  );
console.log("followingUsers._id", followingUsers._id)
  useEffect(() => {
    isFollow();
    setUsersFollow([...usersFollow, followingUsers._id]);
    console.log("usersFollow", usersFollow);
  }, []);

  const isFollow = async () => {
    const follow = await currentUser?.following.includes(followingUsers._id);
    setFollow(follow);
  };

  const handleFollow = async ()  => {
    if (follow) {
      await unfollowUser(followingUsers._id);
      const newArray = usersFollow.filter(user => user !== followingUsers._id);
      setUsersFollow(newArray);
    } else {
      await followUser(followingUsers._id);
      setUsersFollow([...usersFollow, followingUsers._id]);
    }
    setFollow(!follow);
  };

  return (
    <div className="Sidebar__cointainer d-inline-blok  pt-5">
      <Container>
        <div className="Sidebar__header d-inline">
          <Row>
{currentUser && currentUser?.imageUrl ? (

              <img
                className="Sidebar__header__avatar"
                src={currentUser?.imageUrl}
                alt="avatar placeholder"
              />
            ) : (
              <img
                className="Sidebar__header__avatar"
                src="https://i.pravatar.cc/300"
                alt="avatar placeholder"
              />
            )}

            <Col className="Sidebar__header__content">
              <h5 className="Sidebar__header__username">
                {currentUser?.username}
              </h5>
              <p className="text-muted d-flex flex-grow-1 Sidebar__header__description">
                {currentUser?.name}
                {currentUser?.lastname}
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
          {followingUsers &&
            followingUsers.slice(0, 4).map(following => (
              <>
                <Row key={uniqid} className="mb-3 mt-2">
                  {following.imageUrl ? (
                    <img
                      className="Sidebar__suggestion__avatar ml-3 align-self-center"
                      src={following.imageUrl}
                      alt="avatar placeholder"
                    />
                  ) : (
                    <img
                      className="Sidebar__suggestion__avatar ml-3 align-self-center"
                      src="https://i.pravatar.cc/300"
                      alt="avatar placeholder"
                    />
                  )}

                  <Col className="flex-grow-1 mr-3 Sidebar__suggestion__content justify-content-between">
                    <h6
                      onClick={handleShow}
                      className="mb-0 Sidebar__suggestion__username bolder"
                    >
                      {following.username}
                    </h6>

                    <span className="Sidebar__suggestion__description text-right p-0 w-100">
                      Followed
                    </span>
                  </Col>
                  <div
                    className=" ml-3 pl-3 Sidebar__suggestion__button"
                    onClick={() => handleFollow()}
                  >
                    <div>{isFollow ? "Unfollow" : "Follow"}</div>
                  </div>
                  {/* <Button className=" ml-3 pl-3 Sidebar__suggestion__button">
                    Unfollow
                  </Button> */}
                </Row>
              </>
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
