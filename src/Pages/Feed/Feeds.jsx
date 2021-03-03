import React from "react";
import { Row, Col } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar";
import SinglePost from "../../Components/SinglePost/SinglePost";
//*styles
import "./Feed.scss";

const Feed = () => {
  return (
    <div className="Feed__container pt-4 mx-auto">
      {/* //story */}
      {/*//core of the feed*/}

      {/*sidebar */}
      <Row className="justify-content-between">
        <Col md={12} xl={4}>
          <div>
            <SinglePost />
          </div>
        </Col>
        <Col xs={0} md={0} lg={4}>
          <Sidebar />
        </Col>
      </Row>
    </div>
  );
};

export default Feed;
