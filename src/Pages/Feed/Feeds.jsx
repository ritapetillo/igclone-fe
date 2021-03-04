import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar";
import SinglePost from "../../Components/SinglePost/SinglePost";
import { getFollowingUsersPostsAction } from "../../Actions/postActions";
//*styles
import "./feed.scss";

const Feed = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.followingUsersPosts);
  console.log("posts", posts);

  useEffect(() => {
    dispatch(getFollowingUsersPostsAction());
  }, []);

  return (
    <div className="Feed__container pt-4 mx-auto">
      {/* //story */}
      {/*//core of the feed*/}

      {/*sidebar */}
      <Row className="justify-content-between">
        <Col md={12} xl={4}>
          <div>{posts && posts.map((post) => <SinglePost post={post} />)}</div>
        </Col>
        <Col xs={0} md={0} lg={4}>
          <Sidebar />
        </Col>
      </Row>
    </div>
  );
};

export default Feed;
