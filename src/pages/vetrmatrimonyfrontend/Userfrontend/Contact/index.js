import React from "react"
import { Container } from "reactstrap"
import Contact from "./Contact"
import Breadcrumb from "components/Common/Breadcrumb"
import Map from "./Map"
const index = () => {
  return (
    <div className="page-content">
      <Container
        style={{
          padding: "10px",
        }}
      >
        <Breadcrumb title="Home" breadcrumbItem={`${"Contact"}`} />
        <Contact />
      </Container>
    </div>
  )
}

export default index
