import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onModalClose} />;
  };

  const ModalOverlay = (props) => {
    return (
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>{props.message}</div>
        <footer className={styles.actions}>
          <Button onClick={props.onModalClose}>Okay</Button>
        </footer>
      </Card>
    );
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onModalClose={props.onModalClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onModalClose={props.onModalClose}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
