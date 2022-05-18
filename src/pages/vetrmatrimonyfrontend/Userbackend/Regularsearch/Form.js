import Multiselecter from "./Multiselecter"
import React, { useState } from "react"
import { withTranslation, useTranslation } from "react-i18next"
import {
  AvForm,
  AvField,
  AvRadioGroup,
  AvRadio,
} from "availity-reactstrap-validation"

import Cityselect from "./Cityselecter"
import { Form, Card, CardBody, Col, Row, CardTitle, Label } from "reactstrap"

//Import Breadcrumb
import Breadcrumb from "components/Common/Breadcrumb"
import { Link } from "react-router-dom"
const FormElements = () => {
  const { t } = useTranslation()

  return (
    <React.Fragment>
      <div className="page-content">
        <div>
          <div className="container-fluid">
            <Breadcrumb title="My account" breadcrumbItem="Search" />
          </div>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div>
                <Card style={{ padding: "20px" }}>
                  <CardBody>
                    <AvForm className="card-body">
                      <Row>
                        <Col lg="6">
                          <div className="mb-3">
                            <label
                              htmlFor="example-text-input"
                              className="col-md-12 col-form-label"
                            >
                              {t("agefrom")}
                            </label>
                            <AvField
                              required
                              type="select"
                              name="select1"
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
                            <label
                              htmlFor="example-text-input"
                              className="col-md-12 col-form-label"
                            >
                              {t("ageto")}
                            </label>
                            <div className="col-md-12">
                              <AvField
                                required
                                type="select"
                                name="select2"
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
                          </div>
                        </Col>

                        <Col md={12}>
                          <div style={{ width: "100%" }}>
                            <Multiselecter />{" "}
                          </div>
                        </Col>
                        <Col md={12}>
                          <div style={{ width: "100%" }}>
                            <Cityselect />{" "}
                          </div>{" "}
                        </Col>
                      </Row>

                      <Row>
                        <Col lg={5}>
                          <div className="mb-3">
                            <Label htmlFor="formrow-InputCity">
                              {" "}
                              {t("education")}
                            </Label>
                            <AvField
                              className="form-select"
                              type="select"
                              name="select3"
                            >
                              <option selected>All - அனைத்தும்</option>

                              <option value={1}>8th 10th 12th</option>
                              <option value={2}>Diploma</option>
                              <option value={3}>ITI Course</option>
                              <option value={3}>Under Graduate</option>
                              <option value={3}>Post Graduate</option>
                              <option value={3}>Engineering</option>
                            </AvField>
                          </div>
                        </Col>
                        <Col lg={5}>
                          <div className="mb-12">
                            <Label htmlFor="formrow-InputCity">
                              {" "}
                              {t("pagination")}
                            </Label>
                            <AvField
                              className="form-select"
                              type="select"
                              name="select4"
                            >
                              <option value={1}>5</option>
                              <option value={2}>10</option>
                              <option value={3}>15</option>
                              <option value={3}>20</option>
                              <option value={3}>30</option>
                              <option value={3}>50</option>
                            </AvField>
                          </div>
                        </Col>

                        <Col lg={12}>
                          <div className="mb-3">
                            <Label htmlFor="formrow-InputCity"></Label>
                            <AvRadioGroup inline name="radioExample3">
                              <AvRadio label="All" value="Bulbasaur" />
                              <AvRadio label="With photo" value="Squirtle" />
                              <AvRadio
                                label="Without photo"
                                value="Charmander"
                              />
                            </AvRadioGroup>
                          </div>
                        </Col>
                      </Row>

                      <button
                        style={{
                          margin: "10px",
                          backgroundColor: "#E30B5C",
                          color: "white",
                        }}
                        type="submit"
                        className="btn  w-md text-center"
                      >
                        Search
                      </button>
                    </AvForm>
                  </CardBody>
                </Card>
              </div>
            </Col>

            <Col lg={8}>
              <Col lg={12}></Col>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4 text-center">
                    {t("memberidsearch")}
                  </CardTitle>

                  <Form>
                    <div className="mb-3" style={{ display: "flex" }}>
                      <div
                        className="input-group mb-3"
                        style={{ height: "30px" }}
                      >
                        <label
                          style={{ width: "100px", marginTop: "10px" }}
                          htmlFor="formrow-firstname-Input"
                        >
                          பதிவு எண் :
                        </label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Member id"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                          <Link to="/user/searchresults">
                            {" "}
                            <button
                              style={{
                                backgroundColor: "#E30B5C",
                                color: "white",
                              }}
                              className="btn "
                              type="button"
                            >
                              Search
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div></div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default FormElements
