import React from "react"
import { Container, Row } from "reactstrap"
import Freeregister from "./Freeregisterform"
import Breadcrumb from "components/Common/Breadcrumb"
const index = () => {
  return (
    <div>
      <Container
        style={{
          padding: "10px",
          marginBottom: "25px",
          marginTop: "150px",
        }}
      >
        <Breadcrumb title="Home" breadcrumbItem={`${"Free register"}`} />
        <Freeregister />
      </Container>
    </div>
  )
}

export default index
