import React, { useState, useEffect } from "react"
import MetaTags from "react-meta-tags"
import Photoupload from "./Photoupload"
import {
  AvForm,
  AvField,
  AvRadioGroup,
  AvRadio,
} from "availity-reactstrap-validation"
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  NavItem,
  NavLink,
  Row,
  TabContent,
  Table,
  TabPane,
} from "reactstrap"
import classnames from "classnames"
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

const FormWizard = () => {
  let [name, setname] = useState("")
  let [con1, setcon1] = useState("")
  let [con2, setcon2] = useState("")

  const [activeTab, setactiveTab] = useState(1)
  const [activeTabVartical, setoggleTabVertical] = useState(1)
  useEffect(() => {
    console.log(name)
    console.log(activeTab)
  }, [name, activeTab])
  const [passedSteps, setPassedSteps] = useState([1])
  const [passedStepsVertical, setPassedStepsVertical] = useState([1])

  function toggleTab(tab) {
    if (activeTab !== tab) {
      var modifiedSteps = [...passedSteps, tab]
      if (tab >= 1 && tab <= 9) {
        setactiveTab(tab)
        setPassedSteps(modifiedSteps)
      }
    }
  }

  return (
    <React.Fragment>
      <div className="page-content" style={{ fontWeight: "bold" }}>
        <MetaTags>
          <title>Vetrimatrimony | Free register</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs title="Home" breadcrumbItem="Free register" />

          <Row>
            <Col lg="12">
              <AvForm className="card-body" style={{ fontSize: "14px" }}>
                <Card>
                  <CardBody>
                    {/* <h4 className="card-title mb-4">Basic Wizard</h4> */}
                    <div
                      className="wizard clearfix"
                      style={{ width: "100%", borderRadius: "30%" }}
                    >
                      <div
                        style={{ width: "100%", borderRadius: "30%" }}
                        className="steps clearfix  text-center d-none d-xl-block"
                      >
                        <ul>
                          <NavItem
                            className={classnames({ current: activeTab === 1 })}
                          >
                            <NavLink
                              className={classnames({
                                current: activeTab === 1,
                              })}
                              onClick={() => {
                                setactiveTab(1)
                              }}
                              disabled={!(passedSteps || []).includes(1)}
                            >
                              <span className="number">1</span>
                              <br></br>
                              Personal
                            </NavLink>
                          </NavItem>
                          <NavItem
                            className={classnames({ current: activeTab === 2 })}
                          >
                            <NavLink
                              className={classnames({
                                active: activeTab === 2,
                              })}
                              onClick={() => {
                                setactiveTab(2)
                              }}
                              disabled={!(passedSteps || []).includes(2)}
                            >
                              <span className="number">2</span> <br></br>
                              Personal
                            </NavLink>
                          </NavItem>
                          <NavItem
                            className={classnames({ current: activeTab === 3 })}
                          >
                            <NavLink
                              className={classnames({
                                active: activeTab === 3,
                              })}
                              onClick={() => {
                                setactiveTab(3)
                              }}
                              disabled={!(passedSteps || []).includes(3)}
                            >
                              <span className="number">3</span> <br></br>
                              Occupation
                            </NavLink>
                          </NavItem>
                          <NavItem
                            className={classnames({ current: activeTab === 4 })}
                          >
                            <NavLink
                              className={classnames({
                                active: activeTab === 4,
                              })}
                              onClick={() => {
                                setactiveTab(4)
                              }}
                            >
                              <span className="number">4</span> <br></br>
                              Family
                            </NavLink>
                          </NavItem>
                          <NavItem
                            className={classnames({ current: activeTab === 5 })}
                          >
                            <NavLink
                              className={classnames({
                                active: activeTab === 5,
                              })}
                              onClick={() => {
                                setactiveTab(5)
                              }}
                              disabled={!(passedSteps || []).includes(5)}
                            >
                              <span className="number">5</span> <br></br>
                              Property
                            </NavLink>
                          </NavItem>
                          <NavItem
                            className={classnames({ current: activeTab === 6 })}
                          >
                            <NavLink
                              className={classnames({
                                active: activeTab === 6,
                              })}
                              onClick={() => {
                                setactiveTab(6)
                              }}
                              disabled={!(passedSteps || []).includes(6)}
                            >
                              <span className="number">6</span> <br></br>
                              Horoscope
                            </NavLink>
                          </NavItem>
                          <NavItem
                            className={classnames({ current: activeTab === 7 })}
                          >
                            <NavLink
                              className={classnames({
                                active: activeTab === 7,
                              })}
                              onClick={() => {
                                setactiveTab(7)
                              }}
                              disabled={!(passedSteps || []).includes(7)}
                            >
                              {" "}
                              <span className="number">7</span> <br></br>
                              Contact{" "}
                            </NavLink>
                          </NavItem>
                          <NavItem
                            className={classnames({ current: activeTab === 8 })}
                          >
                            <NavLink
                              className={classnames({
                                active: activeTab === 8,
                              })}
                              onClick={() => {
                                setactiveTab(8)
                              }}
                              disabled={!(passedSteps || []).includes(8)}
                            >
                              <span className="number">8</span> <br></br>
                              Complete
                            </NavLink>
                          </NavItem>
                        </ul>
                      </div>
                      <div className="card-body">
                        {activeTab == 1 ? (
                          <div
                            className="d-xl-none"
                            style={{ backgroundColor: "#E20B5C" }}
                          >
                            <div
                              className="mb-4 text-white card-title  "
                              style={{
                                backgroundColor: "#E20B5C",
                                padding: "20px",
                              }}
                            >
                              Step 1/8{" "}
                            </div>
                          </div>
                        ) : activeTab == 2 ? (
                          <div
                            className="mb-4 text-white card-title d-xl-none "
                            style={{
                              backgroundColor: "#E20B5C",
                              padding: "20px",
                            }}
                          >
                            Step 2/8{" "}
                          </div>
                        ) : activeTab == 3 ? (
                          <div
                            className="mb-4 text-white card-title d-xl-none"
                            style={{
                              backgroundColor: "#E20B5C",
                              padding: "20px",
                            }}
                          >
                            Step 3/8{" "}
                          </div>
                        ) : activeTab == 4 ? (
                          <div
                            className="mb-4 text-white card-title d-xl-none"
                            style={{
                              backgroundColor: "#E20B5C",
                              padding: "20px",
                            }}
                          >
                            Step 4/8{" "}
                          </div>
                        ) : activeTab == 5 ? (
                          <div
                            className="mb-4 text-white card-title d-xl-none"
                            style={{
                              backgroundColor: "#E20B5C",
                              padding: "20px",
                            }}
                          >
                            Step 5/8{" "}
                          </div>
                        ) : activeTab == 6 ? (
                          <div
                            className="mb-4 text-white card-title d-xl-none"
                            style={{
                              backgroundColor: "#E20B5C",
                              padding: "20px",
                            }}
                          >
                            Step 6/8{" "}
                          </div>
                        ) : activeTab == 7 ? (
                          <div
                            className="mb-4 text-white card-title d-xl-none"
                            style={{
                              backgroundColor: "#E20B5C",
                              padding: "20px",
                            }}
                          >
                            Step 7/8{" "}
                          </div>
                        ) : activeTab == 8 ? (
                          <div
                            className="mb-4 text-white card-title d-xl-none"
                            style={{
                              backgroundColor: "#E20B5C",
                              padding: "20px",
                            }}
                          >
                            Complete
                          </div>
                        ) : null}
                      </div>
                      <div
                        className="content clearfix "
                        style={{ marginTop: "5px" }}
                      >
                        <TabContent activeTab={activeTab}>
                          <TabPane tabId={1}>
                            <Form>
                              <Row>
                                <h4
                                  style={{
                                    marginBottom: "30px",
                                    color: "#E20B5C",
                                  }}
                                >
                                  Personal details
                                </h4>

                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-firstname-input1">
                                      ???????????????{" "}
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-firstname-input1"
                                      placeholder="Enter name"
                                      name="name"
                                      onChange={e => setname(e.target.value)}
                                    />
                                  </div>
                                </Col>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-lastname-input2">
                                      ?????????????????? ????????????{" "}
                                    </Label>

                                    <input
                                      type="date"
                                      className="form-control"
                                      id="exampleInputDOB1"
                                      name="birthDate"
                                      placeholder="Date of Birth"
                                      defaultValue
                                      required
                                    />
                                  </div>
                                </Col>
                              </Row>

                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-phoneno-input3">
                                      ????????????
                                    </Label>
                                    <select
                                      className="form-select "
                                      name="caste"
                                      id="caste"
                                      data-title="Please select Caste"
                                      required
                                    >
                                      <option value>
                                        --- Select Caste ---
                                      </option>
                                      <option value="??????????????????">??????????????????</option>
                                      <option value="????????????????????????????????????????????????">
                                        ????????????????????????????????????????????????
                                      </option>
                                      <option value="?????????????????????????????????">
                                        ?????????????????????????????????
                                      </option>
                                      <option value="???????????????????????? ??????????????????????????????">
                                        ???????????????????????? ??????????????????????????????
                                      </option>
                                      <option value="????????????????????????">????????????????????????</option>
                                      <option value="??????????????????">??????????????????</option>
                                      <option value="??????????????????????????????">
                                        ??????????????????????????????
                                      </option>
                                      <option value="??????????????????">??????????????????</option>
                                      <option value="??????????????????">??????????????????</option>
                                      <option value="???????????????">???????????????</option>
                                      <option value="??????????????????????????????">
                                        ??????????????????????????????
                                      </option>
                                      <option value="??????????????????????????????">
                                        ??????????????????????????????
                                      </option>
                                      <option value="???????????????????????????">
                                        ???????????????????????????
                                      </option>
                                      <option value="????????? ???????????????????????????">
                                        ????????? ???????????????????????????
                                      </option>
                                      <option value="??????????????????????????????????????????">
                                        ??????????????????????????????????????????
                                      </option>
                                      <option value="??????????????????????????????">
                                        ??????????????????????????????
                                      </option>
                                      <option value="????????????????????????">????????????????????????</option>
                                      <option value="????????????????????????">????????????????????????</option>
                                      <option value="???????????????????????? ??????????????????">
                                        ???????????????????????? ??????????????????
                                      </option>
                                      <option value="?????????????????????????????????">
                                        ?????????????????????????????????
                                      </option>
                                      <option value="???????????????">???????????????</option>
                                      <option value="???????????????????????????">
                                        ???????????????????????????
                                      </option>
                                      <option value="??????????????????????????????">
                                        ??????????????????????????????
                                      </option>
                                      <option value="????????????????????????">????????????????????????</option>
                                      <option value="?????????????????????">?????????????????????</option>
                                      <option value="????????????????????????">????????????????????????</option>
                                      <option value="?????????????????????????????????">
                                        ?????????????????????????????????
                                      </option>
                                      <option value="????????????????????????">????????????????????????</option>
                                      <option value="??????????????????">??????????????????</option>
                                      <option value="?????????????????????">?????????????????????</option>
                                      <option value="?????????????????????">?????????????????????</option>
                                      <option value="?????????????????????">
                                        ?????????????????????
                                      </option>{" "}
                                    </select>
                                  </div>
                                </Col>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-email-input4">
                                      ??????????????? ???????????????{" "}
                                    </Label>
                                    <Input
                                      type="email"
                                      className="form-control"
                                      id="basicpill-email-input4"
                                      placeholder="Father name"
                                      name="fathername"
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-address-input1">
                                      ????????????????????????{" "}
                                    </Label>
                                    <select
                                      name="distri"
                                      id="distri"
                                      className="form-select "
                                      required
                                    >
                                      <option value>Select districts</option>
                                      <option value="????????????????????????">????????????????????????</option>
                                      <option value="??????????????????">??????????????????</option>
                                      <option value="???????????????????????????????????????">
                                        ???????????????????????????????????????
                                      </option>
                                      <option value="??????????????????">??????????????????</option>
                                      <option value="????????????????????????">????????????????????????</option>
                                      <option value="?????????????????????????????????">
                                        ?????????????????????????????????
                                      </option>
                                      <option value="???????????????">???????????????</option>
                                      <option value="?????????????????????????????????">
                                        ?????????????????????????????????
                                      </option>
                                      <option value="????????????????????????????????????">
                                        ????????????????????????????????????
                                      </option>
                                      <option value="???????????????">???????????????</option>
                                      <option value="?????????????????????????????????">
                                        ?????????????????????????????????
                                      </option>
                                      <option value="???????????????">???????????????</option>
                                      <option value="???????????????????????????????????????">
                                        ???????????????????????????????????????
                                      </option>
                                      <option value="????????????????????????">????????????????????????</option>
                                      <option value="??????????????????????????????">
                                        ??????????????????????????????
                                      </option>
                                      <option value="????????????????????????????????????">
                                        ????????????????????????????????????
                                      </option>
                                      <option value="????????????????????????????????????">
                                        ????????????????????????????????????
                                      </option>
                                      <option value="???????????????">???????????????</option>
                                      <option value="????????????????????????">????????????????????????</option>
                                      <option value="???????????????????????????">
                                        ???????????????????????????
                                      </option>
                                      <option value="?????????????????????">?????????????????????</option>
                                      <option value="????????????">????????????</option>
                                      <option value="?????????????????????????????????">
                                        ?????????????????????????????????
                                      </option>
                                      <option value="????????????????????????????????????">
                                        ????????????????????????????????????
                                      </option>
                                      <option value="??????????????????????????????">
                                        ??????????????????????????????
                                      </option>
                                      <option value="????????????????????????????????????">
                                        ????????????????????????????????????
                                      </option>
                                      <option value="??????????????????????????????">
                                        ??????????????????????????????
                                      </option>
                                      <option value="???????????????????????????????????????????????????">
                                        ???????????????????????????????????????????????????
                                      </option>
                                      <option value="????????????????????????????????????">
                                        ????????????????????????????????????
                                      </option>
                                      <option value="??????????????????">??????????????????</option>
                                      <option value="?????????????????????????????????">
                                        ?????????????????????????????????
                                      </option>
                                      <option value="??????????????????????????????">
                                        ??????????????????????????????
                                      </option>
                                      <option value="Other districts">
                                        Other districts
                                      </option>{" "}
                                    </select>
                                  </div>
                                </Col>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-email-input4">
                                      ???????????????????????? ????????? 2{" "}
                                    </Label>
                                    <Input
                                      type="email"
                                      className="form-control"
                                      id="basicpill-email-input4"
                                      placeholder="contact no 2"
                                      name="contactno2"
                                      onChange={e => setcon1(e.target.value)}
                                    />
                                  </div>
                                </Col>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-email-input4">
                                      ???????????????????????? ????????? 1{" "}
                                    </Label>
                                    <Input
                                      type="email"
                                      className="form-control"
                                      id="basicpill-email-input4"
                                      placeholder="contact no 1"
                                      name="contactno1"
                                      onChange={e => setcon2(e.target.value)}
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </Form>
                          </TabPane>
                          <TabPane tabId={2}>
                            <div>
                              <Form>
                                <Row>
                                  <h4
                                    style={{
                                      marginBottom: "30px",
                                      color: "#E20B5C",
                                    }}
                                  >
                                    Personal details
                                  </h4>{" "}
                                  <Col lg="6" style={{ marginTop: "10px" }}>
                                    <div className="mb-3">
                                      <Label for="basicpill-pancard-input5">
                                        ????????????????????? :&nbsp;&nbsp;&nbsp;
                                      </Label>
                                      <div className="form-check form-check-inline">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="inlineRadioOptions"
                                          id="inlineRadio1"
                                          defaultValue="option1"
                                          value="?????????"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="inlineRadio1"
                                        >
                                          ?????????{" "}
                                        </label>
                                      </div>
                                      <div className="form-check form-check-inline">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="inlineRadioOptions"
                                          id="inlineRadio2"
                                          value="????????????"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="inlineRadio2"
                                        >
                                          ????????????{" "}
                                        </label>
                                      </div>
                                    </div>
                                  </Col>{" "}
                                  <Col lg="6"></Col>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-vatno-input6">
                                        ????????????{" "}
                                      </Label>
                                      <div className="form-group">
                                        <select
                                          className="form-select "
                                          name="religion"
                                          id="religion"
                                          data-title="Please select Complexion"
                                        >
                                          <option value>- ?????????????????????????????? -</option>
                                          <option value="???????????????" selected>
                                            ???????????????
                                          </option>
                                          <option value="??????????????????????????????">
                                            ??????????????????????????????
                                          </option>
                                          <option value="????????????????????????">
                                            ????????????????????????
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-servicetax-input8">
                                        ?????????????????????????????????{" "}
                                      </Label>
                                      <input
                                        type="time"
                                        name="birthTime"
                                        className="form-control"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-companyuin-input9">
                                        ????????????{" "}
                                      </Label>
                                      <AvField
                                        required
                                        type="select"
                                        name="age"
                                        className="form-select"
                                      >
                                        <option value={18}>18</option>
                                        <option value={19}>19</option>
                                        <option value={20}>20</option>
                                        <option value={21}>21</option>
                                        <option value={22}>22</option>
                                        <option value={23}>23</option>
                                        <option value={24}>24</option>
                                        <option value={25}>25</option>
                                        <option value={26}>26</option>
                                        <option value={27}>27</option>
                                        <option value={28}>28</option>
                                        <option value={29}>29</option>
                                        <option value={30}>30</option>
                                        <option value={31}>31</option>
                                        <option value={32}>32</option>
                                        <option value={33}>33</option>
                                        <option value={34}>34</option>
                                        <option value={35}>35</option>
                                        <option value={36}>36</option>
                                        <option value={37}>37</option>
                                        <option value={38}>38</option>
                                        <option value={39}>39</option>
                                        <option value={40}>40</option>
                                        <option value={41}>41</option>
                                        <option value={42}>42</option>
                                        <option value={43}>43</option>
                                        <option value={44}>44</option>
                                        <option value={45}>45</option>
                                        <option value={46}>46</option>
                                        <option value={47}>47</option>
                                        <option value={48}>48</option>
                                        <option value={49}>49</option>
                                        <option value={50}>50</option>
                                        <option value={51}>51</option>
                                        <option value={52}>52</option>
                                        <option value={53}>53</option>
                                        <option value={54}>54</option>
                                        <option value={55}>55</option>
                                        <option value={56}>56</option>
                                        <option value={57}>57</option>
                                        <option value={58}>58</option>
                                        <option value={59}>59</option>
                                        <option value={60}>60</option>
                                      </AvField>
                                    </div>
                                  </Col>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-companyuin-input9">
                                        ???????????????{" "}
                                      </Label>

                                      <select
                                        className="form-select "
                                        id="ddlheightno"
                                        name="ddlheightno"
                                        data-title="Please select Height"
                                      >
                                        <option value>
                                          --- Select Height ---
                                        </option>
                                        <option value={105}>
                                          3ft.5in-105cm
                                        </option>
                                        <option value={107}>
                                          3ft.6in-107cm
                                        </option>
                                        <option value={110}>
                                          3ft.7in-110cm
                                        </option>
                                        <option value={112}>
                                          3ft.8in-112cm
                                        </option>
                                        <option value={115}>
                                          3ft.9in-115cm
                                        </option>
                                        <option value={117}>
                                          3ft.10in-117cm
                                        </option>
                                        <option value={120}>
                                          3ft.11in-120cm
                                        </option>
                                        <option value={122}>4ft-122cm</option>
                                        <option value={125}>
                                          4ft.1in-125cm
                                        </option>
                                        <option value={127}>
                                          4ft.2in-127cm
                                        </option>
                                        <option value={130}>
                                          4ft.3in-130cm
                                        </option>
                                        <option value={132}>
                                          4ft.4in-132cm
                                        </option>
                                        <option value={135}>
                                          4ft.5in-135cm
                                        </option>
                                        <option value={137}>
                                          4ft.6in-137cm
                                        </option>
                                        <option value={140}>
                                          4ft.7in-140cm
                                        </option>
                                        <option value={142}>
                                          4ft.8in-142cm
                                        </option>
                                        <option value={145}>
                                          4ft.9in-145cm
                                        </option>
                                        <option value={147}>
                                          4ft.10in-147cm
                                        </option>
                                        <option value={150}>
                                          4ft.11in-150cm
                                        </option>
                                        <option value={152}>5ft-152cm</option>
                                        <option value={155}>
                                          5ft.1in-155cm
                                        </option>
                                        <option value={157}>
                                          5ft.2in-157cm
                                        </option>
                                        <option value={160}>
                                          5ft.3in-160cm
                                        </option>
                                        <option value={162}>
                                          5ft.4in-162cm
                                        </option>
                                        <option value={165}>
                                          5ft.5in-165cm
                                        </option>
                                        <option value={167}>
                                          5ft.6in-167cm
                                        </option>
                                        <option value={170}>
                                          5ft.7in-170cm
                                        </option>
                                        <option value={172}>
                                          5ft.8in-172cm
                                        </option>
                                        <option value={175}>
                                          5ft.9in-175cm
                                        </option>
                                        <option value={177}>
                                          5ft.10in-177cm
                                        </option>
                                        <option value={180}>
                                          5ft.11in-180cm
                                        </option>
                                        <option value={182}>6ft-182cm</option>
                                        <option value={185}>
                                          6ft.1in-185cm
                                        </option>
                                        <option value={187}>
                                          6ft.2in-187cm
                                        </option>
                                        <option value={190}>
                                          6ft.3in-190cm
                                        </option>
                                        <option value={192}>
                                          6ft.4in-192cm
                                        </option>
                                        <option value={195}>
                                          6ft.5in-195cm
                                        </option>
                                        <option value={197}>
                                          6ft.6in-197cm
                                        </option>
                                        <option value={200}>
                                          6ft.7in-200cm
                                        </option>
                                        <option value={202}>
                                          6ft.8in-202cm
                                        </option>
                                        <option value={205}>
                                          6ft.9in-205cm
                                        </option>
                                        <option value={207}>
                                          6ft.10in-207cm
                                        </option>
                                        <option value={210}>
                                          6ft.11in-210cm
                                        </option>{" "}
                                      </select>
                                    </div>
                                  </Col>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-companyuin-input9">
                                        ???????????????{" "}
                                      </Label>
                                      <select
                                        className="form-select "
                                        name="complexion"
                                        id="complexion"
                                        data-title="Please select Complexion"
                                      >
                                        <option value>
                                          --- Select Complexion ---
                                        </option>
                                        <option value="?????????????????????">?????????????????????</option>
                                        <option value="???????????????????????????">
                                          ???????????????????????????
                                        </option>
                                        <option value="?????????????????????">?????????????????????</option>
                                        <option value="?????????????????????">?????????????????????</option>
                                      </select>
                                    </div>
                                  </Col>{" "}
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-companyuin-input9">
                                        ??????????????????????????????{" "}
                                      </Label>

                                      <select
                                        className="form-select "
                                        name="married"
                                        id="married"
                                      >
                                        <option value="???????????????????????????????????????">
                                          ???????????????????????????????????????
                                        </option>
                                        <option value="?????????????????????">?????????????????????</option>
                                      </select>
                                    </div>
                                  </Col>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-declaration-input10">
                                        ???????????????????????????{" "}
                                      </Label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="subcaste"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-declaration-input10">
                                        ???????????????????????????{" "}
                                      </Label>
                                      <select
                                        className="form-select "
                                        name="phy_status"
                                        id="physicalStatus"
                                      >
                                        <option value="?????????????????? ????????????">
                                          ?????????????????? ????????????
                                        </option>
                                        <option value="???????????????????????? ?????????????????????">
                                          ???????????????????????? ?????????????????????
                                        </option>
                                      </select>
                                    </div>
                                  </Col>
                                </Row>
                              </Form>
                            </div>
                          </TabPane>
                          <TabPane tabId={3}>
                            <div>
                              <Form>
                                <h4
                                  style={{
                                    marginBottom: "30px",
                                    color: "#E20B5C",
                                  }}
                                >
                                  Occupation details
                                </h4>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-namecard-input11">
                                      ???????????? | ??????????????????{" "}
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-namecard-input11"
                                      name="occupation"
                                      placeholder="????????????/??????????????????"
                                    />
                                  </div>
                                </Col>

                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label>????????????????????????????????? ???????????? </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-namecard-input11"
                                      name="workPlace"
                                      placeholder="????????????????????????????????? ????????????"
                                    />
                                  </div>
                                </Col>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-cardno-input12">
                                      ????????? ????????????????????????{" "}
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-cardno-input12"
                                      name="income"
                                      placeholder="????????? ????????????????????????"
                                    />
                                  </div>
                                </Col>
                              </Form>
                            </div>
                          </TabPane>
                          <TabPane tabId={4}>
                            <div>
                              <Form>
                                <h4
                                  style={{
                                    marginBottom: "30px",
                                    color: "#E20B5C",
                                  }}
                                >
                                  Family details
                                </h4>{" "}
                                <Row>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-namecard-input11">
                                        ??????????????? ????????????
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-namecard-input11"
                                        placeholder="??????????????? ????????????"
                                        name="fatherOcc"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-namecard-input11">
                                        ?????????????????? ???????????????{" "}
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-namecard-input11"
                                        placeholder="??????????????? ????????????"
                                        name="motherName"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label>
                                        ????????????????????????????????? (???????????????????????????????????????????????? ){" "}
                                      </Label>

                                      <div className="row">
                                        <div className="col-xs-2 col-md-2 divborder1">
                                          <label className="control-label">
                                            ?????????
                                          </label>
                                        </div>
                                        <div className="col-xs-3 col-md-3 divborder1">
                                          <div className="dropdown">
                                            <select
                                              name="brother"
                                              id="brother"
                                              className="form-select "
                                              style={{ width: "75px" }}
                                            >
                                              <option value={0} selected>
                                                0
                                              </option>
                                              <option value={1}>1 </option>
                                              <option value={2}>2</option>
                                              <option value={3}>3</option>
                                              <option value={4}>4</option>
                                              <option value={5}>5</option>
                                              <option value={6}>6</option>
                                              <option value={7}>7</option>
                                              <option value={8}>8</option>
                                              <option value={9}>9</option>
                                              <option value={10}>
                                                10
                                              </option>{" "}
                                            </select>
                                          </div>
                                        </div>
                                        <div className="col-xs-2 col-md-3 divborder1">
                                          <label className="control-label">
                                            ????????????
                                          </label>
                                        </div>
                                        <div className="col-xs-3 col-md-3 divborder1">
                                          <div className="form-group">
                                            <select
                                              name="sister"
                                              id="sister"
                                              className="form-select "
                                              style={{ width: "75px" }}
                                            >
                                              <option value={0} selected>
                                                0
                                              </option>
                                              <option value={1}>1</option>
                                              <option value={2}>2</option>
                                              <option value={3}>3</option>
                                              <option value={4}>4</option>
                                              <option value={5}>5</option>
                                              <option value={6}>6</option>
                                              <option value={7}>7</option>
                                              <option value={8}>8</option>
                                              <option value={9}>9</option>
                                              <option value={10}>
                                                10
                                              </option>{" "}
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-cardno-input12">
                                        ????????????????????????????????????{" "}
                                      </Label>

                                      <div className="row">
                                        <div className="col-xs-2 col-md-2 divborder1">
                                          <label className="control-label">
                                            ?????????
                                          </label>
                                        </div>
                                        <div className="col-xs-3 col-md-3 divborder1">
                                          <div className="form-group">
                                            <select
                                              name="mbrother"
                                              id="brother"
                                              className="form-select "
                                              style={{ width: "75px" }}
                                            >
                                              <option value={0} selected>
                                                0
                                              </option>
                                              <option value={1}>1</option>
                                              <option value={2}>2</option>
                                              <option value={3}>3</option>
                                              <option value={4}>4</option>
                                              <option value={5}>5</option>
                                              <option value={6}>6</option>
                                              <option value={7}>7</option>
                                              <option value={8}>8</option>
                                              <option value={9}>9</option>
                                              <option value={10}>
                                                10
                                              </option>{" "}
                                            </select>
                                          </div>
                                        </div>
                                        <div className="col-xs-2 col-md-3 divborder1">
                                          <label className="control-label">
                                            ????????????
                                          </label>
                                        </div>
                                        <div className="col-xs-3 col-md-3 divborder1">
                                          <div className="form-group">
                                            <select
                                              name="msister"
                                              id="sister"
                                              className="form-select "
                                              style={{ width: "75px" }}
                                            >
                                              <option value={0} selected>
                                                0
                                              </option>
                                              <option value={1}>1</option>
                                              <option value={2}>2</option>
                                              <option value={3}>3</option>
                                              <option value={4}>4</option>
                                              <option value={5}>5</option>
                                              <option value={6}>6</option>
                                              <option value={7}>7</option>
                                              <option value={8}>8</option>
                                              <option value={9}>9</option>
                                              <option value={10}>
                                                10
                                              </option>{" "}
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-cardno-input12">
                                        ??????????????????????????????{" "}
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control "
                                        id="basicpill-firstname-input1"
                                        placeholder="??????????????????????????????"
                                        name="name"
                                      />
                                    </div>
                                  </Col>
                                </Row>
                              </Form>
                            </div>
                          </TabPane>
                          <TabPane tabId={5}>
                            <div>
                              <Form>
                                <h4
                                  style={{
                                    marginBottom: "30px",
                                    color: "#E20B5C",
                                  }}
                                >
                                  Property details{" "}
                                </h4>{" "}
                                <Row>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-namecard-input11">
                                        ???????????????????????????{" "}
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-namecard-input11"
                                        placeholder="???????????????????????????"
                                        name="fatherOcc"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-namecard-input11">
                                        ???????????????????????????{" "}
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-namecard-input11"
                                        placeholder="???????????????????????????"
                                        name="motherName"
                                      />
                                    </div>
                                  </Col>

                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-cardno-input12">
                                        ??????????????????{" "}
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control "
                                        id="basicpill-firstname-input1"
                                        placeholder="??????????????????"
                                        name="name"
                                      />
                                    </div>
                                  </Col>
                                </Row>
                              </Form>
                            </div>
                          </TabPane>{" "}
                          <TabPane tabId={6}>
                            <div>
                              <Form>
                                <h4
                                  style={{
                                    marginBottom: "30px",
                                    color: "#E20B5C",
                                  }}
                                >
                                  Horoscope & Photo details
                                </h4>{" "}
                                <Row>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-namecard-input11">
                                        ?????????????????????????????????{" "}
                                      </Label>

                                      <select
                                        name="star"
                                        id="star"
                                        className="form-select"
                                      >
                                        <option value>Select Star</option>
                                        <option value="??????????????????">??????????????????</option>
                                        <option value="????????????">????????????</option>
                                        <option value="??????????????????????????????">
                                          ??????????????????????????????
                                        </option>
                                        <option value="??????????????????">??????????????????</option>
                                        <option value="????????????????????????????????????">
                                          ????????????????????????????????????
                                        </option>
                                        <option value="??????????????????????????????">
                                          ??????????????????????????????
                                        </option>
                                        <option value="??????????????????????????????">
                                          ??????????????????????????????
                                        </option>
                                        <option value="???????????????">???????????????</option>
                                        <option value="????????????????????????">
                                          ????????????????????????
                                        </option>
                                        <option value="????????????">????????????</option>
                                        <option value="???????????????">???????????????</option>
                                        <option value="????????????????????????">
                                          ????????????????????????
                                        </option>
                                        <option value="??????????????????">??????????????????</option>
                                        <option value="????????????????????????">
                                          ????????????????????????
                                        </option>
                                        <option value="??????????????????">??????????????????</option>
                                        <option value="?????????????????????">?????????????????????</option>
                                        <option value="??????????????????">??????????????????</option>
                                        <option value="??????????????????">??????????????????</option>
                                        <option value="???????????????">???????????????</option>
                                        <option value="?????????????????????">?????????????????????</option>
                                        <option value="??????????????????????????????">
                                          ??????????????????????????????
                                        </option>
                                        <option value="???????????????????????????">
                                          ???????????????????????????
                                        </option>
                                        <option value="????????????????????????">
                                          ????????????????????????
                                        </option>
                                        <option value="???????????????">???????????????</option>
                                        <option value="???????????????????????????">
                                          ???????????????????????????
                                        </option>
                                        <option value="????????????????????????????????????">
                                          ????????????????????????????????????
                                        </option>
                                        <option value="???????????????">???????????????</option>{" "}
                                      </select>
                                    </div>
                                  </Col>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-cardno-input12">
                                        ???????????????{" "}
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control "
                                        id="basicpill-firstname-input1"
                                        placeholder="???????????????"
                                        name="name"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-namecard-input11">
                                        ????????????{" "}
                                      </Label>
                                      <select
                                        name="rasi"
                                        id="rasi"
                                        className="form-select"
                                      >
                                        <option value>Select Rasi</option>
                                        <option value="???????????????">???????????????</option>
                                        <option value="??????????????????">??????????????????</option>
                                        <option value="?????????????????????">?????????????????????</option>
                                        <option value="???????????????">???????????????</option>
                                        <option value="?????????????????????">?????????????????????</option>
                                        <option value="???????????????">???????????????</option>
                                        <option value="??????????????????">??????????????????</option>
                                        <option value="?????????????????????????????????">
                                          ?????????????????????????????????
                                        </option>
                                        <option value="???????????????">???????????????</option>
                                        <option value="???????????????">???????????????</option>
                                        <option value="?????????????????????">?????????????????????</option>
                                        <option value="???????????????">
                                          ???????????????
                                        </option>{" "}
                                      </select>
                                    </div>
                                  </Col>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label>????????????????????? </Label>

                                      <select
                                        name="lakam"
                                        id="lakam"
                                        className="form-select "
                                      >
                                        <option value>Select Lagnam</option>
                                        <option value="???????????????">???????????????</option>
                                        <option value="??????????????????">??????????????????</option>
                                        <option value="?????????????????????">?????????????????????</option>
                                        <option value="???????????????">???????????????</option>
                                        <option value="?????????????????????">?????????????????????</option>
                                        <option value="???????????????">???????????????</option>
                                        <option value="??????????????????">??????????????????</option>
                                        <option value="?????????????????????????????????">
                                          ?????????????????????????????????
                                        </option>
                                        <option value="???????????????">???????????????</option>
                                        <option value="???????????????">???????????????</option>
                                        <option value="?????????????????????">?????????????????????</option>
                                        <option value="???????????????">
                                          ???????????????
                                        </option>{" "}
                                      </select>
                                    </div>
                                  </Col>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-cardno-input12">
                                        ???????????? ?????????????????????{" "}
                                      </Label>

                                      <select
                                        name="dhishai"
                                        id="dhishai"
                                        className="form-select"
                                      >
                                        <option value>
                                          Select Dhishai Irupu
                                        </option>
                                        <option value="????????????">????????????</option>
                                        <option value="?????????">?????????</option>
                                        <option value="???????????????">???????????????</option>
                                        <option value="????????????">????????????</option>
                                        <option value="???????????????????????????">
                                          ???????????????????????????
                                        </option>
                                        <option value="?????????????????????">?????????????????????</option>
                                        <option value="????????????????????????">
                                          ????????????????????????
                                        </option>
                                        <option value="????????????????????????">
                                          ????????????????????????
                                        </option>
                                        <option value="????????????">????????????</option>
                                        <option value="?????????????????????">
                                          ?????????????????????
                                        </option>{" "}
                                      </select>
                                    </div>
                                  </Col>
                                  <Col lg="6">
                                    <Label for="basicpill-cardno-input12">
                                      Your photo
                                    </Label>
                                    <Photoupload />
                                  </Col>
                                  <Col lg="12">
                                    <div className="mb-3">
                                      <Row>
                                        <Col lg="4">
                                          <div className="form-group">
                                            <input
                                              type="text"
                                              className="form-control input-sm textbox1 text-center"
                                              id="years"
                                              name="years"
                                              placeholder="??????????????????  "
                                            />
                                          </div>
                                        </Col>
                                        <Col lg="4">
                                          <div className="form-group">
                                            <input
                                              type="text"
                                              className="form-control input-sm textbox1 text-center"
                                              id="years"
                                              name="years"
                                              placeholder="??????????????? "
                                            />
                                          </div>
                                        </Col>
                                        <Col lg="4">
                                          <div className="form-group">
                                            <input
                                              type="text"
                                              className="form-control input-sm textbox1 text-center"
                                              id="years"
                                              name="years"
                                              placeholder="???????????? "
                                            />
                                          </div>
                                        </Col>
                                      </Row>
                                    </div>
                                  </Col>
                                  <Col lg="12">
                                    <div
                                      className="col-md-12 divborder1"
                                      style={{
                                        marginTop: "1em",
                                        textAlign: "center",
                                      }}
                                    >
                                      <div className="row">
                                        <div className="col-md-12 divborder1">
                                          ???????????? ?????????????????? : ???????????? ???????????????????????? ??????????????????
                                          ???????????? ???????????? ????????????????????????????????? ??????????????????????????????????????????.
                                        </div>
                                      </div>
                                      <div
                                        className="row"
                                        style={{
                                          marginTop: "1em",
                                        }}
                                      >
                                        <div className="col-xs-0 col-md-1" />
                                        <div
                                          className="col-xs-6 col-md-2 "
                                          style={{ textAlign: "center" }}
                                        >
                                          <span className="col1">??????????????? : </span>
                                          <span className="col2">pu</span>
                                        </div>
                                        <div
                                          className="col-xs-6 col-md-2 divborder1"
                                          style={{ textAlign: "center" }}
                                        >
                                          <span className="col1">
                                            ????????????????????? :{" "}
                                          </span>
                                          <span className="col2">sun</span>
                                        </div>
                                        <div
                                          className="col-xs-6 col-md-2 divborder1"
                                          style={{ textAlign: "center" }}
                                        >
                                          <span className="col1">???????????? : </span>
                                          <span className="col2">ragu</span>
                                        </div>
                                        <div
                                          className="col-xs-6 col-md-2 divborder1"
                                          style={{ textAlign: "center" }}
                                        >
                                          <span className="col1">
                                            ????????????????????? :{" "}
                                          </span>
                                          <span className="col2">vij</span>
                                        </div>
                                        <div
                                          className="col-xs-6 col-md-2 divborder1"
                                          style={{ textAlign: "center" }}
                                        >
                                          <span className="col1">
                                            ??????????????????????????? :{" "}
                                          </span>
                                          <span className="col2">chk</span>
                                        </div>
                                        <div className="col-xs-0 col-md-1 divborder1" />
                                      </div>
                                      <div
                                        className="row"
                                        style={{
                                          marginTop: "1em",
                                          textAlign: "center",
                                        }}
                                      >
                                        <div className="col-xs-0 col-md-1 divborder1" />
                                        <div
                                          className="col-xs-6 col-md-2 divborder1"
                                          style={{ textAlign: "center" }}
                                        >
                                          <span className="col1">????????? : </span>
                                          <span className="col2">sat</span>
                                        </div>
                                        <div
                                          className="col-xs-6 col-md-2 divborder1"
                                          style={{ textAlign: "center" }}
                                        >
                                          <span className="col1">
                                            ???????????????????????? :{" "}
                                          </span>
                                          <span className="col2">chan</span>
                                        </div>
                                        <div
                                          className="col-xs-6 col-md-2 divborder1"
                                          style={{ textAlign: "center" }}
                                        >
                                          <span className="col1">???????????? : </span>
                                          <span className="col2">kee</span>
                                        </div>
                                        <div
                                          className="col-xs-6 col-md-2 divborder1"
                                          style={{ textAlign: "center" }}
                                        >
                                          <span className="col1">
                                            ???????????????????????? :{" "}
                                          </span>
                                          <span className="col2">sev</span>
                                        </div>
                                        <div
                                          className="col-xs-6 col-md-2 divborder1"
                                          style={{ textAlign: "center" }}
                                        >
                                          <span className="col1">
                                            ????????????????????? :{" "}
                                          </span>
                                          <span className="col2">lac</span>
                                        </div>
                                        <div className="col-xs-0 col-md-1 divborder1" />
                                      </div>
                                    </div>
                                    <div
                                      className="d-flex justify-content-center"
                                      style={{ marginTop: "50px" }}
                                    >
                                      <Row class>
                                        <Col
                                          lg="6"
                                          md="6"
                                          style={{ padding: "40px" }}
                                        >
                                          <Table
                                            border={0}
                                            cellPadding={5}
                                            style={{
                                              borderCollapse: "collapse",
                                            }}
                                            height={200}
                                          >
                                            <tbody>
                                              <tr>
                                                <td height={50} width={50}>
                                                  <textarea
                                                    style={{
                                                      overflow: "hidden",
                                                    }}
                                                    rows={3}
                                                    cols={5}
                                                    name="rasi1"
                                                    id="r1"
                                                    defaultValue={""}
                                                  />
                                                </td>
                                                <td height={50} width={50}>
                                                  <textarea
                                                    style={{
                                                      overflow: "hidden",
                                                    }}
                                                    rows={3}
                                                    cols={5}
                                                    name="rasi2"
                                                    id="r2"
                                                    defaultValue={""}
                                                  />
                                                </td>
                                                <td height={50} width={50}>
                                                  <textarea
                                                    style={{
                                                      overflow: "hidden",
                                                    }}
                                                    rows={3}
                                                    cols={5}
                                                    name="rasi3"
                                                    id="r3"
                                                    defaultValue={""}
                                                  />
                                                </td>
                                                <td height={50} width={50}>
                                                  <textarea
                                                    style={{
                                                      overflow: "hidden",
                                                    }}
                                                    rows={3}
                                                    cols={5}
                                                    name="rasi4"
                                                    id="r4"
                                                    defaultValue={""}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td height={50} width={50}>
                                                  <textarea
                                                    style={{
                                                      overflow: "hidden",
                                                    }}
                                                    rows={3}
                                                    cols={5}
                                                    name="rasi5"
                                                    id="r5"
                                                    defaultValue={""}
                                                  />
                                                </td>
                                                <td
                                                  height={100}
                                                  colSpan={2}
                                                  rowSpan={2}
                                                  align="center"
                                                >
                                                  ????????????
                                                </td>
                                                <td height={50} width={50}>
                                                  <textarea
                                                    style={{
                                                      overflow: "hidden",
                                                    }}
                                                    rows={3}
                                                    cols={5}
                                                    name="rasi6"
                                                    id="r6"
                                                    defaultValue={""}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td height={50} width={50}>
                                                  <textarea
                                                    style={{
                                                      overflow: "hidden",
                                                    }}
                                                    rows={3}
                                                    cols={5}
                                                    name="rasi7"
                                                    id="r7"
                                                    defaultValue={""}
                                                  />
                                                </td>
                                                <td height={50} width={50}>
                                                  <textarea
                                                    style={{
                                                      overflow: "hidden",
                                                    }}
                                                    rows={3}
                                                    cols={5}
                                                    name="rasi8"
                                                    id="r8"
                                                    defaultValue={""}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td height={50} width={50}>
                                                  <textarea
                                                    style={{
                                                      overflow: "hidden",
                                                    }}
                                                    rows={3}
                                                    cols={5}
                                                    name="rasi9"
                                                    id="r9"
                                                    defaultValue={""}
                                                  />
                                                </td>
                                                <td height={50} width={50}>
                                                  <textarea
                                                    style={{
                                                      overflow: "hidden",
                                                    }}
                                                    rows={3}
                                                    cols={5}
                                                    name="rasi10"
                                                    id="r10"
                                                    defaultValue={""}
                                                  />
                                                </td>
                                                <td height={50} width={50}>
                                                  <textarea
                                                    style={{
                                                      overflow: "hidden",
                                                    }}
                                                    rows={3}
                                                    cols={5}
                                                    name="rasi11"
                                                    id="r11"
                                                    defaultValue={""}
                                                  />
                                                </td>
                                                <td height={50} width={50}>
                                                  <textarea
                                                    style={{
                                                      overflow: "hidden",
                                                    }}
                                                    rows={3}
                                                    cols={5}
                                                    name="rasi12"
                                                    id="r12"
                                                    defaultValue={""}
                                                  />
                                                </td>
                                              </tr>
                                            </tbody>
                                          </Table>
                                        </Col>
                                        <Col
                                          lg="6"
                                          md="6"
                                          style={{ padding: "40px" }}
                                        >
                                          {" "}
                                          <Table
                                            border={0}
                                            cellPadding={5}
                                            style={{
                                              borderCollapse: "collapse",
                                            }}
                                            height={200}
                                          >
                                            <tbody>
                                              <tr>
                                                <td>
                                                  <textarea
                                                    style={{
                                                      overflow: "hidden",
                                                    }}
                                                    rows={3}
                                                    cols={5}
                                                    name="am1"
                                                    id="a1"
                                                    defaultValue={""}
                                                  />
                                                </td>
                                                <td>
                                                  <textarea
                                                    style={{
                                                      overflow: "hidden",
                                                    }}
                                                    rows={3}
                                                    cols={5}
                                                    name="am2"
                                                    id="a2"
                                                    defaultValue={""}
                                                  />
                                                </td>
                                                <td>
                                                  <textarea
                                                    style={{
                                                      overflow: "hidden",
                                                    }}
                                                    rows={3}
                                                    cols={5}
                                                    name="am3"
                                                    id="a3"
                                                    defaultValue={""}
                                                  />
                                                </td>
                                                <td>
                                                  <textarea
                                                    style={{
                                                      overflow: "hidden",
                                                    }}
                                                    rows={3}
                                                    cols={5}
                                                    name="am4"
                                                    id="a4"
                                                    defaultValue={""}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <textarea
                                                    style={{
                                                      overflow: "hidden",
                                                    }}
                                                    rows={3}
                                                    cols={5}
                                                    name="am5"
                                                    id="a5"
                                                    defaultValue={""}
                                                  />
                                                </td>
                                                <td
                                                  height={100}
                                                  colSpan={2}
                                                  rowSpan={2}
                                                  align="center"
                                                >
                                                  ??????????????????
                                                </td>
                                                <td>
                                                  <textarea
                                                    style={{
                                                      overflow: "hidden",
                                                    }}
                                                    rows={3}
                                                    cols={5}
                                                    name="am6"
                                                    id="a6"
                                                    defaultValue={""}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <textarea
                                                    style={{
                                                      overflow: "hidden",
                                                    }}
                                                    rows={3}
                                                    cols={5}
                                                    name="am7"
                                                    id="a7"
                                                    defaultValue={""}
                                                  />
                                                </td>
                                                <td>
                                                  <textarea
                                                    style={{
                                                      overflow: "hidden",
                                                    }}
                                                    rows={3}
                                                    cols={5}
                                                    name="am8"
                                                    id="a8"
                                                    defaultValue={""}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <textarea
                                                    style={{
                                                      overflow: "hidden",
                                                    }}
                                                    rows={3}
                                                    cols={5}
                                                    name="am9"
                                                    id="a9"
                                                    defaultValue={""}
                                                  />
                                                </td>
                                                <td>
                                                  <textarea
                                                    style={{
                                                      overflow: "hidden",
                                                    }}
                                                    rows={3}
                                                    cols={5}
                                                    name="am10"
                                                    id="a10"
                                                    defaultValue={""}
                                                  />
                                                </td>
                                                <td>
                                                  <textarea
                                                    style={{
                                                      overflow: "hidden",
                                                    }}
                                                    rows={3}
                                                    cols={5}
                                                    name="am11"
                                                    id="a11"
                                                    defaultValue={""}
                                                  />
                                                </td>
                                                <td>
                                                  <textarea
                                                    style={{
                                                      overflow: "hidden",
                                                    }}
                                                    rows={3}
                                                    cols={5}
                                                    name="am12"
                                                    id="a12"
                                                    defaultValue={""}
                                                  />
                                                </td>
                                              </tr>
                                            </tbody>
                                          </Table>
                                        </Col>
                                      </Row>
                                    </div>
                                    <Row>
                                      <Col
                                        lg="6"
                                        style={{
                                          marginTop: "30px",
                                        }}
                                      ></Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </Form>
                            </div>
                          </TabPane>
                          <TabPane tabId={7}>
                            <div>
                              <Form>
                                <h4
                                  style={{
                                    marginBottom: "30px",
                                    color: "#E20B5C",
                                  }}
                                >
                                  Contact details
                                </h4>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-namecard-input11">
                                      ??????????????????
                                    </Label>
                                    <textarea
                                      className="form-control"
                                      rows={5}
                                      id="comment"
                                      name="address"
                                      defaultValue={""}
                                    />
                                  </div>
                                </Col>

                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label>??????????????????????????????????????? </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-namecard-input11"
                                      name="workPlace"
                                      placeholder="??????????????????????????????????????? "
                                    />
                                  </div>
                                </Col>
                              </Form>
                            </div>
                          </TabPane>
                          <TabPane tabId={8}>
                            <div className="row justify-content-center">
                              <Col lg="6">
                                <div className="text-center">
                                  <div className="mb-4">
                                    <i className="mdi mdi-check-circle-outline text-success display-4" />
                                  </div>
                                  <div>
                                    <h5>Confirm </h5>
                                    <p className="text-muted">
                                      Great you have completed 100 %
                                    </p>
                                  </div>
                                </div>
                              </Col>
                            </div>
                          </TabPane>
                        </TabContent>
                      </div>
                      <div className="actions clearfix">
                        <ul>
                          <li
                            className={
                              activeTab === 1 ? "previous disabled" : "previous"
                            }
                          >
                            <Link
                              style={{ backgroundColor: "#E20B5C" }}
                              to="#"
                              onClick={() => {
                                toggleTab(activeTab - 1)
                              }}
                            >
                              Previous
                            </Link>
                          </li>
                          <li
                            className={
                              activeTab === 9 ? "next disabled" : "next"
                            }
                          >
                            {activeTab == 8 ? (
                              <Link
                                style={{ backgroundColor: "#E20B5C" }}
                                to="#"
                                onClick={e => {
                                  e.preventDefault()
                                  toggleTab(activeTab + 1)
                                }}
                              >
                                View plans
                              </Link>
                            ) : (
                              <Link
                                style={{ backgroundColor: "#E20B5C" }}
                                to="#"
                                onClick={e => {
                                  e.preventDefault()
                                  toggleTab(activeTab + 1)
                                }}
                              >
                                {" "}
                                next
                              </Link>
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </AvForm>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default FormWizard
