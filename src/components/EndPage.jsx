import React from "react";
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
import {Link} from 'react-router-dom'

const profileImage = require("./img/profile.jpg");

function EndPage() {
  return (
    <div className={styles.ContainerBody}>
      <Container>
        <Row className={styles.containerTitle}>
          <Col>
            <p className={styles.h2}>We hope this trip has you more.</p>
            <p className={styles.h1}>See you soon !</p>
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
            <Button className={styles.buttonFinish} tag={Link} to='/'color="danger">Restart the trip</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EndPage;
