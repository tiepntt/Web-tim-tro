import React from "react";
import { Col, Row } from "react-bootstrap";
import { InfoProfile } from "./Info";
import { ProfileSidebar } from "./sideBar-profile";

interface Props {}

export const Profile = (props: Props) => {
  return (
    <div className="profile">
      <Row>
        <Col md={3}>
          <ProfileSidebar />
        </Col>
        <Col md={9}>
          <InfoProfile />
        </Col>
      </Row>
    </div>
  );
};
