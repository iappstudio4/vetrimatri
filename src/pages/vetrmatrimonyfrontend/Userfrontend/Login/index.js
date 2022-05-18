import React from "react"
import MetaTags from "react-meta-tags"
import { Link } from "react-router-dom"
import image from "../images/Background.jpg"
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
import Loginform from "./Loginform"
import Breadcrumb from "components/Common/Breadcrumb"
//Impo

const Memberlogin = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Member login</title>
      </MetaTags>

      <div
        className="my-5 pt-sm-1"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "auto",
        }}
      >
        <div style={{ marginBottom: "30px" }}>
          <Loginform />
        </div>
      </div>
      {/* Photos section */}
    </React.Fragment>
  )
}

export default Memberlogin
