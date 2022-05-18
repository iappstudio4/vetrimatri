import PropTypes from "prop-types"
import MetaTags from "react-meta-tags"
import React from "react"

import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap"

//redux
import { useSelector, useDispatch } from "react-redux"

import { withRouter, Link } from "react-router-dom"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

//Social Media Imports
import { GoogleLogin } from "react-google-login"
// import TwitterLogin from "react-twitter-auth"

// actions
import { loginUser, apiError, socialLogin } from "../../../../store/actions"

// import images
import profile from "assets/images/profile-img.png"
import logo from "assets/images/logo.svg"
import Breadcrumb from "components/Common/Breadcrumb"
//Import config

const Login = props => {
  const dispatch = useDispatch()

  const { error } = useSelector(state => ({
    error: state.Login.error,
  }))

  // handleValidSubmit
  const handleValidSubmit = (event, values) => {
    dispatch(loginUser(values, props.history))
  }

  const signIn = (res, type) => {
    if (type === "google" && res) {
      const postData = {
        name: res.profileObj.name,
        email: res.profileObj.email,
        token: res.tokenObj.access_token,
        idToken: res.tokenId,
      }
      dispatch(socialLogin(postData, props.history, type))
    } else if (type === "facebook" && res) {
      const postData = {
        name: res.name,
        email: res.email,
        token: res.accessToken,
        idToken: res.tokenId,
      }
      dispatch(socialLogin(postData, props.history, type))
    }
  }

  //handleGoogleLoginResponse

  //handleTwitterLoginResponse
  // const twitterResponse = e => {}

  //handleFacebookLoginResponse

  return (
    <React.Fragment>
      <MetaTags>
        <title>Login | Skote - React Admin & Dashboard Template</title>
      </MetaTags>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Row>
          <div className="container-fluid">
            {/* <Breadcrumb title="Home" breadcrumbItem="Mmember login" /> */}
          </div>
          <Col
            lg="6 text-center"
            style={{ color: "white", paddingTop: "70px" }}
          >
            <h4 className="display-6 " style={{ color: "white" }}>
              வெற்றியின் சேவைகள்
            </h4>
            <ul style={{ color: "white", listStyle: "none" }}>
              <li>
                {" "}
                <h4 style={{ color: "white" }}>
                  தமிழில் வரன்களின் விபரம்{" "}
                </h4>{" "}
              </li>
              <li>
                {" "}
                <h4 style={{ color: "white" }}>
                  ஜாதக கட்டங்கள், புகைபடம்
                </h4>{" "}
              </li>
              <li>
                {" "}
                <h4 style={{ color: "white" }}>
                  அனைத்து இனத்தவருக்கும் சேவை{" "}
                </h4>{" "}
              </li>
              <li>
                {" "}
                <h4 style={{ color: "white" }}>
                  எந்த விதமான மறைமுக கட்டணமும் இல்லை
                </h4>{" "}
              </li>
              <li>
                {" "}
                <h4 style={{ color: "white" }}>
                  பல்லாயிரக்கணக்கான வரன்கள் உள்ளன
                </h4>{" "}
              </li>
            </ul>
          </Col>
          <Col md={12} lg={5} style={{ paddingTop: "40px", padding: "20px" }}>
            <Card
              className="overflow-hidden"
              style={{
                padding: "50px",
                backgroundColor: "rgba(255, 255, 255, 0.781)",
              }}
            >
              <div className="bg-primary bg-soft"></div>
              <CardBody className="pt-0">
                <div className="p-2">
                  <AvForm
                    className="form-horizontal"
                    onValidSubmit={(e, v) => {
                      handleValidSubmit(e, v)
                    }}
                  >
                    {error ? <Alert color="danger">{error}</Alert> : null}

                    <div className="mb-3">
                      <AvField
                        name="email"
                        label="Email"
                        value="admin@themesbrand.com"
                        className="form-control"
                        placeholder="Enter email"
                        type="email"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <AvField
                        name="password"
                        label="Password"
                        value="123456"
                        type="password"
                        required
                        placeholder="Enter Password"
                      />
                    </div>

                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customControlInline"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customControlInline"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="mt-3 d-grid">
                      <button
                        style={{ backgroundColor: "#E30B5C" }}
                        className="btn btn-primary btn-block"
                        type="submit"
                      >
                        Log In
                      </button>
                    </div>
                  </AvForm>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Container></Container>
      </div>
    </React.Fragment>
  )
}

export default withRouter(Login)

Login.propTypes = {
  history: PropTypes.object,
}
