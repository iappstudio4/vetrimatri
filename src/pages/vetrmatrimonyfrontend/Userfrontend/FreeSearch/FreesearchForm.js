import React, { useState } from "react"
import { withTranslation, useTranslation } from "react-i18next"
import {
  AvForm,
  AvField,
  AvRadioGroup,
  AvRadio,
} from "availity-reactstrap-validation"

import { Form, Card, CardBody, Col, Row, CardTitle, Label } from "reactstrap"
import Freesearchresult from "./Freesearchresult"
//Import Breadcrumb
import Breadcrumb from "components/Common/Breadcrumb"
import { Link } from "react-router-dom"
const Freesearch = () => {
  const { t } = useTranslation()

  return (
    <React.Fragment>
      <div className="page-content">
        <div>
          <Breadcrumb title="Home" breadcrumbItem="Free search " />
        </div>
        <Row className="justify-content-center">
          <Col lg={12}>
            <div>
              <Card>
                <AvForm className="card-body">
                  <Row>
                    <Col lg="3">
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
                    <Col lg="3">
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
                    <Col lg="3">
                      <div className="mb-3">
                        <label
                          htmlFor="example-text-input"
                          className="col-md-12 col-form-label"
                        >
                          {t("Caste")}
                        </label>
                        <div className="col-md-12">
                          <AvField
                            required
                            type="select"
                            name="select2"
                            className="form-select"
                          >
                            <option value>-- Select Caste --</option>
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
                          </AvField>
                        </div>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="mb-3">
                        <label
                          htmlFor="example-text-input"
                          className="col-md-12 col-form-label"
                        >
                          {t("Education level ")}
                        </label>
                        <div className="col-md-12">
                          <AvField
                            required
                            type="select"
                            name="select2"
                            className="form-select"
                          >
                            <option value="All">All - அனைத்தும்</option>
                            <option value="8th 10th 12th">8th 10th 12th</option>
                            <option value="Diploma">Diploma</option>
                            <option value="ITI Course">ITI Course</option>
                            <option value="Under Graduate">
                              Under Graduate
                            </option>
                            <option value="Post  Graduate">
                              Post Graduate
                            </option>
                            <option value="Engineering">Engineering</option>
                            <option value="Advocate">Advocate</option>
                            <option value="ICWAI/CA/CS/CFA">
                              ICWAI/CA/CS/CFA
                            </option>
                            <option value="IAS/IPS/IRS/IES/IFS">
                              IAS/IPS/IRS/IES/IFS
                            </option>
                            <option value="Doctor">Doctor</option>
                            <option value="Ph.d">Ph.d</option>
                          </AvField>
                        </div>
                      </div>
                    </Col>
                    <Col lg={5}> </Col>
                    <Col lg={5}> </Col>
                    <Col
                      lg={2}
                      style={{
                        marginTop: "25px",
                        justifyContent: "flex-end",
                      }}
                    >
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
                    </Col>
                  </Row>
                </AvForm>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default Freesearch
