import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col } from "reactstrap"

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <Col md={6}>
              © {new Date().getFullYear()} Vetrimatrimony. All Rights Reserved{" "}
            </Col>
            <Col md={6}>
              <div className="text-sm-end d-none d-sm-block">
                <Link to="/termsandcondition" className="text-muted">
                  Terms and conditions
                </Link>
                &nbsp; |&nbsp;
                <Link to="/privacypolicy" className="text-muted">
                  Privacy Policy
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
