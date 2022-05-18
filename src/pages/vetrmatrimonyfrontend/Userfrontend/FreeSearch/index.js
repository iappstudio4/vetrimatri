import React from "react"
import { Container } from "reactstrap"
import Freesearch from "./FreesearchForm"
import Freesearchresult from "./Freesearchresult"
import Helpline from "../Homepage/homepageSections/Helpline"
import Paginationcom from "./Paginationcomponent"
import Checkimg from "./Checknoimg"
import { Row, Col, Card, CardBody } from "reactstrap"
const index = () => {
  return (
    <Container>
      <Freesearch />

      <h4 style={{ marginBottom: "50px" }}>Search Results (200)</h4>

      <Freesearchresult />
      <Checkimg />
      <Freesearchresult />

      <Paginationcom />
      <Row style={{ marginTop: "30px" }}>
        <Col className="col-12">
          <Card>
            <CardBody>
              <Row>
                <Col lg="12" style={{ marginBottom: "20px" }}>
                  <div className="clearfix mt-4 mt-lg-0">
                    <span
                      style={{
                        color: "#337ab7",
                        fontWeight: 600,
                      }}
                    >
                      அன்பான வாடிக்கையாளர்களின் கவனத்திற்கு மற்ற திருமண தகவல்
                      மையங்களில் தாங்கள் முகவரிக்கு POSTAL - தபாலில் ஜாதகத்தை
                      அனுப்பி பணம் பெற முயற்சி செய்வார்கள் அவர்களிடம்
                      ஏமாறவேண்டாம் எச்சரிக்கையுடன் இருக்கும்படி
                      கேட்டுக்கொள்கிறோம்.
                    </span>
                  </div>
                </Col>
              </Row>{" "}
            </CardBody>
          </Card>
        </Col>
        <Helpline />
      </Row>
    </Container>
  )
}

export default index
