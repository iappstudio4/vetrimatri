import React, { useState } from "react"
import { withTranslation, useTranslation } from "react-i18next"
import {
  AvForm,
  AvField,
  AvRadioGroup,
  AvRadio,
} from "availity-reactstrap-validation"

import { Form, Card, CardBody, Col, Row, CardTitle, Label } from "reactstrap"

//Import Breadcrumb
import Breadcrumb from "components/Common/Breadcrumb"
import { Link } from "react-router-dom"
const FormElements = data => {
  const { t } = useTranslation()

  // {
  //   data && data.plan && console.log(data.plan)
  // }
  return (
    <React.Fragment>
      <Row style={{ marginTop: "50px" }}>
        <h2 style={{ color: "#E10B5B" }} className="text-center mb-5">
          Online payment
        </h2>
        <Col lg={12}>
          <div>
            <Card style={{ padding: "20px" }}>
              {/* <h2 className="text-center mb-5">
                {<h1 style={{ color: "#E10B5B" }}>{data.data.plan}</h1>}
              </h2> */}
              <CardBody>
                <AvForm className="card-body">
                  <Row>
                    <Col lg="6">
                      <div className="mb-3">
                        <label
                          htmlFor="example-text-input"
                          className="col-md-12 col-form-label"
                        >
                          {t("Billing Name ")}
                        </label>
                        <AvField
                          name="name"
                          placeholder="Billing name "
                          type="text"
                          errorMessage="Enter Billing name"
                          className="form-control"
                          validate={{ required: { value: true } }}
                          // value={previousMember ? previousMember[0].name : ""}
                          id="name"
                        />
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="mb-3">
                        <label
                          htmlFor="example-text-input"
                          className="col-md-12 col-form-label"
                        >
                          {t("Caste")}
                        </label>
                        <div className="col-md-12">
                          <select
                            name="select2"
                            id="select2"
                            type="select"
                            className="form-select "
                          >
                            <option value="true">-- Select Caste --</option>
                            <option value={1}>நாடார் - ஆண்</option>
                            <option value={2}>நாடார் - பெண்</option>
                            <option value={3}>அசைவப்பிள்ளைமார் - ஆண்</option>
                            <option value={67}>அசைவப்பிள்ளைமார் - பெண்</option>
                            <option value={134}>சைவப்பிள்ளை - ஆண்</option>
                            <option value={135}>சைவப்பிள்ளை - பெண்</option>
                            <option value={136}>
                              இல்லத்து பிள்ளைமார் - ஆண்
                            </option>
                            <option value={137}>
                              இல்லத்து பிள்ளைமார் - பெண்
                            </option>
                            <option value={138}>ஆசாரியர் - ஆண்</option>
                            <option value={139}>ஆசாரியர் - பெண்</option>
                            <option value={140}>யாதவர் - ஆண்</option>
                            <option value={141}>யாதவர் - பெண்</option>
                            <option value={142}>அகமுடையார் - ஆண்</option>
                            <option value={143}>அகமுடையார் - பெண்</option>
                            <option value={144}>நாயுடு - ஆண்</option>
                            <option value={145}>நாயுடு - பெண்</option>
                            <option value={146}>கள்ளர் - ஆண்</option>
                            <option value={147}>கள்ளர் - பெண்</option>
                            <option value={148}>மறவர் - ஆண்</option>
                            <option value={149}>மறவர் - பெண்</option>
                            <option value={150}>செட்டியார் - ஆண்</option>
                            <option value={151}>செட்டியார் - பெண்</option>
                            <option value={152}>கிறிஸ்தவர் - ஆண்</option>
                            <option value={153}>கிறிஸ்தவர் - பெண்</option>
                            <option value={154}>முதலியார் - ஆண்</option>
                            <option value={155}>முதலியார் - பெண்</option>
                            <option value={156}>ஆதி திராவிடர் - ஆண்</option>
                            <option value={157}>ஆதி திராவிடர் - பெண்</option>
                            <option value={158}>தேவேந்திரகுலம் - ஆண்</option>
                            <option value={159}>தேவேந்திரகுலம் - பெண்</option>
                            <option value={160}>ரெட்டியார் - ஆண்</option>
                            <option value={161}>ரெட்டியார் - பெண்</option>
                            <option value={162}>கவுண்டர் - ஆண்</option>
                            <option value={163}>கவுண்டர் - பெண்</option>
                            <option value={164}>முஸ்லீம் - ஆண்</option>
                            <option value={165}>முஸ்லீம் - பெண்</option>
                            <option value={166}>கம்மவார் நாயுடு - ஆண்</option>
                            <option value={167}>கம்மவார் நாயுடு - பெண்</option>
                            <option value={170}>அருந்ததியர் - ஆண்</option>
                            <option value={171}>அருந்ததியர் - பெண்</option>
                            <option value={172}>நாயர் - ஆண்</option>
                            <option value={173}>நாயர் - பெண்</option>
                            <option value={174}>மூப்பனார் - ஆண்</option>
                            <option value={175}>மூப்பனார் - பெண்</option>
                            <option value={176}>மருத்துவர் - ஆண்</option>
                            <option value={177}>மருத்துவர் - பெண்</option>
                            <option value={178}>வீரசைவம் - ஆண்</option>
                            <option value={179}>வீரசைவம் - பெண்</option>
                            <option value={180}>வண்ணார் - ஆண்</option>
                            <option value={181}>வண்ணார் - பெண்</option>
                            <option value={182}>வன்னியர் - ஆண்</option>
                            <option value={183}>வன்னியர் - பெண்</option>
                            <option value={184}>செளராஷ்டிரா - ஆண்</option>
                            <option value={185}>செளராஷ்டிரா - பெண்</option>
                            <option value={186}>நாயக்கர் - ஆண்</option>
                            <option value={187}>நாயக்கர் - பெண்</option>
                            <option value={188}>வேளார் - ஆண்</option>
                            <option value={189}>வேளார் - பெண்</option>
                            <option value={190}>உடையார் - ஆண்</option>
                            <option value={191}>உடையார் - பெண்</option>
                            <option value={206}>
                              ஆயிர வைசிய செட்டியார் - ஆண்
                            </option>
                            <option value={203}>வாணிய செட்டியார் - பெண்</option>
                            <option value={194}>மறுமணம் - ஆண்</option>
                            <option value={195}>மறுமணம் - பெண்</option>
                            <option value={196}>மாற்றுதிறனாளி - ஆண்</option>
                            <option value={197}>மாற்றுதிறனாளி - பெண்</option>
                            <option value={204}>24மனை செட்டியார் - ஆண்</option>
                            <option value={205}>24மனை செட்டியார் - பெண்</option>
                            <option value={202}>வாணிய செட்டியார் - ஆண்</option>
                            <option value={207}>
                              ஆயிர வைசிய செட்டியார் - பெண்
                            </option>
                          </select>
                        </div>
                      </div>
                    </Col>

                    <Col md={12}>
                      <div style={{ width: "100%" }}></div>
                    </Col>
                    <Col md={12}>
                      <div style={{ width: "100%" }}></div>{" "}
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="formrow-InputCity">
                          {" "}
                          {t("Register no ")}
                        </Label>
                        <AvField
                          name="registerno"
                          placeholder="Register no "
                          type="text"
                          errorMessage="Enter register number"
                          className="form-control"
                          validate={{ required: { value: true } }}
                          // value={previousMember ? previousMember[0].name : ""}
                          id="registerno"
                        />
                      </div>
                    </Col>

                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="formrow-InputCity">Phone no</Label>
                        <AvField
                          name="Phoneno"
                          placeholder="Contact no"
                          type="text"
                          errorMessage="Enter your contact number "
                          className="form-control"
                          validate={{ required: { value: true } }}
                          // value={previousMember ? previousMember[0].name : ""}
                          id="name"
                        />
                      </div>
                    </Col>
                    <Row>
                      {/* <Col lg={6}></Col> */}
                      <Col lg={6}>
                        <div className="mb-3 mt-2">
                          <Label htmlFor="formrow-InputCity">
                            <h4
                              className="display-7"
                              style={{ color: "#E20B5C" }}
                            >
                              {data.data.amount && (
                                <p>
                                  {" "}
                                  Selected:&nbsp;{data.data.plan} (Rs :
                                  {data.data.amount})
                                </p>
                              )}
                            </h4>
                          </Label>
                        </div>
                      </Col>
                    </Row>
                  </Row>
                  <div className="text-end">
                    {data.data.amount ? (
                      <button
                        style={{
                          margin: "10px",
                          backgroundColor: "#E30B5C",
                          color: "white",
                        }}
                        type="submit"
                        className="btn  w-md text-center"
                        // disabled="disabled"
                      >
                        Pay
                      </button>
                    ) : null}
                  </div>
                </AvForm>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "50px" }}>
        <Col lg={12}>
          <div>
            <Card style={{ padding: "20px" }}>
              <h2
                style={{ color: "#E10B5B", marginTop: "30px" }}
                className="text-center mb-5"
              >
                Transaction success{" "}
              </h2>
              {/* <h2 className="text-center mb-5">
                {<h1 style={{ color: "#E10B5B" }}>{data.data.plan}</h1>}
              </h2> */}
              <CardBody>
                <AvForm className="card-body">
                  <div className="text-center">
                    <div className="mb-4">
                      <i className="mdi mdi-check-circle-outline text-success display-4" />
                    </div>
                    <div>
                      <h5>Confirm </h5>
                      <p className="text-muted">we will get back to you soon</p>
                    </div>
                  </div>
                </AvForm>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "50px" }}>
        <Col lg={12}>
          <div>
            <Card style={{ padding: "20px" }}>
              <h2
                style={{ color: "#E10B5B", marginTop: "30px" }}
                className="text-center mb-5"
              >
                Transaction Failed{" "}
              </h2>
              {/* <h2 className="text-center mb-5">
                {<h1 style={{ color: "#E10B5B" }}>{data.data.plan}</h1>}
              </h2> */}
              <CardBody>
                <AvForm className="card-body">
                  <div className="text-center">
                    <div className="mb-4">
                      <i
                        className="fas fa-times-circle
 display-4"
                      />
                    </div>
                    <div>
                      <h5>Failed </h5>
                      <p className="text-muted">
                        Your transaction failed, please try again or contact
                        site support.
                      </p>
                      <button className="btn btn-danger">Try again</button>
                    </div>
                  </div>
                </AvForm>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default FormElements
