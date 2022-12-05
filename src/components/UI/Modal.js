import { Fragment } from "react"
import { createPortal } from "react-dom"
import styles from "./modal.module.css"

const Backdrop = ({ onClose }) => {
  return <div className={styles.backdrop} onClick={onClose}></div>
}

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

const portalElement = document.getElementById("overlays")

export const Modal = ({ children, onClose }) => {
  return (
    <Fragment>
      {createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </Fragment>
  )
}
