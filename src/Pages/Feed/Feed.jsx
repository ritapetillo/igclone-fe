import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar";
import SinglePost from "../../Components/SinglePost/SinglePost";
import { getFollowingUsersPostsAction } from "../../Actions/postActions";
import { fetchAllUsers } from "../../Api/userApi";
import { socketContext } from "../../Context/SocketContext";

//*styles
import "./feed.scss";

const Feed = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.followingUsersPosts);
  const { socket } = useContext(socketContext);
  useEffect(() => {
    dispatch(getFollowingUsersPostsAction());
    socket.emit("checkFollowers");
  }, []);

  return (
    <Container>
      <div className="Feed__container pt-4 mx-auto" id="feed">
        <Row className="justify-content-between " id="feed">
          <Col md={12} lg={12} xl={4} className="d-flex p-0 ">
            <div className="Feed__post mx-auto ">
              {posts ? posts?.map((post) => <SinglePost post={post} />) : ""}
            </div>
          </Col>
          <Col xs={0} md={0} lg={5}>
            <Sidebar />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Feed;
