import React from "react"
import { Container } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb"
import Schemes from "./Schemes"
import Onlinepayment from "./Onlinepayment"
import Paymentoptions from "./Paymentoptions"
const index = () => {
  return (
    <div className="page-content">
      <Container
        style={{
          padding: "10px",
          marginBottom: "25px",
        }}
      >
        <Breadcrumb title="Home" breadcrumbItem={`${"Online payment"}`} />
        <Schemes />

        <Paymentoptions />
      </Container>
    </div>
  )
}

export default index
