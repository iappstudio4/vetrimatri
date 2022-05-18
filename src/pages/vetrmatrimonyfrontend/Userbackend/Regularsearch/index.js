import React from "react"
import MetaTags from "react-meta-tags"
import { useState } from "react"
import { Link } from "react-router-dom"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Form,
  InputGroup,
  Input,
} from "reactstrap"
import Formsearch from "./Form"
//Import Countdown

//Import Images
import Breadcrumb from "components/Common/Breadcrumb"

const Regularsearch = () => {
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span></span>
    } else {
      return (
        <>
          <div className="coming-box">
            {days} <span>Days</span>
          </div>{" "}
          <div className="coming-box">
            {hours} <span>Hours</span>
          </div>{" "}
          <div className="coming-box">
            {minutes} <span>Minutes</span>
          </div>{" "}
          <div className="coming-box">
            {seconds} <span>Seconds</span>
          </div>
        </>
      )
    }
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title>Regular search</title>
      </MetaTags>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-white">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <Formsearch />
    </React.Fragment>
  )
}

export default Regularsearch
