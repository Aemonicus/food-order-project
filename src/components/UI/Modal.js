import { Fragment } from "react"
import { createPortal } from "react-dom"
import styles from "./modal.module.css"

const Backdrop = () => {
  return <div className={styles.backdrop}></div>
}

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

const portalElement = document.getElementById("overlays")

export const Modal = ({ children }) => {
  return (
    <Fragment>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </Fragment>
  )
}
