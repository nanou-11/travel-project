import React, { useState } from "react";
import {
  Button,
  Modal,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

import styles from "./CardWebcam.module.css";

const CardWebcam = ({ city, country, video }) => {
  const { buttonLabel, className } = { city, country, video };

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <Card>
          <iframe
            className={`${styles.video} mx-auto d-block`}
            src={video}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            width="500" height ="325"
          ></iframe>
          <CardBody>
            <CardTitle className={styles.text}>{city}</CardTitle>
            <CardSubtitle className={styles.text}>{country}</CardSubtitle>
          </CardBody>
        </Card>
      </Modal>
    </div>
  );
};

export default CardWebcam;
