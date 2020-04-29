import React from "react";
import "./styles.css";
import {
  Container,
  Row,
  Col,
  Button,
  Toast,
  ToastHeader,
  ToastBody
} from "reactstrap";
import styles from "./EndPage.module.css";

const profileImage = require("./images/profile.jpg");

function EndPage() {
  return (
    <div className={styles.ContainerBody}>
      <Container>
        <Row className={styles.containerTitle}>
          <Col>
            <h2>We hope this trip has you more. See you soon</h2>
          </Col>
        </Row>

        <Row className={styles.containerPerson}>
          <Col>
            <div className="p-3 my-2 rounded">
              <Toast>
                <ToastHeader>Person</ToastHeader>
                <ToastBody style={{ background: "white" }}>
                  <img className={styles.photo} src={profileImage} />
                </ToastBody>
              </Toast>
            </div>
          </Col>

          <Col>
            <div className="p-3 my-2 rounded">
              <Toast>
                <ToastHeader>Person</ToastHeader>
                <ToastBody style={{ background: "white" }}>
                  <img className={styles.photo} src={profileImage} />
                </ToastBody>
              </Toast>
            </div>
          </Col>

          <Col>
            <div className="p-3 my-2 rounded">
              <Toast>
                <ToastHeader>Person</ToastHeader>
                <ToastBody style={{ background: "white" }}>
                  <img className={styles.photo} src={profileImage} />
                </ToastBody>
              </Toast>
            </div>
          </Col>

          <Col>
            <div className="p-3 my-2 rounded">
              <Toast>
                <ToastHeader>Person</ToastHeader>
                <ToastBody style={{ background: "white" }}>
                  <img className={styles.photo} src={profileImage} />
                </ToastBody>
              </Toast>
            </div>
          </Col>
        </Row>

        <Row className={styles.containerBouton}>
          <Col>
            <Button color="danger">Restart the trip</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EndPage;
