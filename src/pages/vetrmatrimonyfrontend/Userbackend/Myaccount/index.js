import React from "react"
import MetaTags from "react-meta-tags"
import { Container, Row, Col, Card, CardBody } from "reactstrap"
import Usercard from "pages/vetrmatrimonyfrontend/Userbackend/Myaccount/UserCard"
import { withTranslation, useTranslation } from "react-i18next"
import Breadcrumb from "components/Common/Breadcrumb"
import Accountdetails from "./AccountDetails"
const Myaccount = () => {
  const { t } = useTranslation()

  return (
    <React.Fragment>
      <MetaTags>
        <title>My account</title>
      </MetaTags>

      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumb title="My account" breadcrumbItem={`${t("myaccount")}`} />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <Usercard />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
        <Accountdetails />
      </div>
    </React.Fragment>
  )
}

export default Myaccount
