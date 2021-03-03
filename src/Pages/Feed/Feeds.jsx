import React from "react";
import { Row, Col } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar";
import SinglePost from "../../Components/SinglePost/SinglePost";
//*styles
import "./Feed.scss";

const Feed = () => {
  return (
    <div className="Feed__container pt-4">
      {/* //story */}
      {/*//core of the feed*/}

      {/*sidebar */}
      <Row className="justify-content-between">
        <Col>
          <SinglePost />
        </Col>
        <Col>
          <Sidebar />
        </Col>
      </Row>
    </div>
  );
};

export default Feed;
