import React, { useState, useEffect, useRef } from "react"
import MetaTags from "react-meta-tags"
import Photoupload from "./Photoupload"

import {
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Button,
  CardTitle,
  CardSubtitle,
  Label,
  Input,
  Container,
  CustomInput,
  Form,
  InputGroup,
  UncontrolledAlert,
} from "reactstrap"
import {
  AvForm,
  AvField,
  AvRadioGroup,
  AvRadio,
} from "availity-reactstrap-validation"
//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css"
import Flatpickr from "react-flatpickr"

//redux
import { useSelector, useDispatch } from "react-redux"

// actions
// import {
//   addNewMember,
//   getCaste,
//   addMemberFail,
//   clearError,
//   updateMember,
// } from "../../../store/actions"

//Data
import {
  rasi,
  star,
  district,
  direction,
  height,
  education,
} from "../../../common/member"

//SweetAlert
import SweetAlert from "react-bootstrap-sweetalert"

//Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb"
//Import CSS
// import "./index.css"
const AddMember = hideSubmit => {
  const previousMember = {}
  console.log(hideSubmit.hideSubmit)
  const dispatch = useDispatch()
  const formRef = useRef(null)
  // const {
  //   error,
  //   caste,
  //   existingMember,
  //   memberId,
  //   member,
  //   previousMember,
  //   successMessage,
  // } = useSelector(state => ({
  //   caste: state.caste.caste,
  //   error: state.members.error.message,
  //   existingMember: state.members.error.existingMember,
  //   memberId: state.members.members.memberId,
  //   successMessage: state.members.members.message,
  //   member: state.members.members.member,
  //   previousMember: state.members.members.previousMember,
  // }))
  //console.log("Pre"+ JSON.stringify(previousMember));
  const [selectedCaste, setSelectedCaste] = useState(false)
  const [validationError, setvalidationError] = useState([])
  const [selectedCasteDB, setSelectedCasteDB] = useState(false)
  const [ageCalculate, setageCalculate] = useState(0)
  // useEffect(() => {
  //   dispatch(getCaste())
  //   //dispatch(clearError())
  // }, [dispatch, error])

  const handleChange = value => {
    caste.map(option => {
      if (option.name === value) {
        //console.log(option.name);
        //selectOptionSetter(value)
        setSelectedCasteDB(option.db)
      }
    })
  }

  let splitYmd, siblings, siblingsStatus

  // if (previousMember) {
  //   const value = previousMember[0].ymd
  //   splitYmd = value.split("/")

  //   const sibValue = previousMember[0].siblings
  //   siblings = sibValue.split("/")

  //   const sibStaValue = previousMember[0].siblingStatus
  //   siblingsStatus = sibStaValue.split("/")

  //   //console.log(defaultValues.gender);
  //   //const velli = handleChange(previousMember[0].caste);
  //   //
  //   if (selectedCaste === false) {
  //     caste.map(option => {
  //       if (option.name === previousMember[0].caste) {
  //         //console.log(option.name);
  //         //selectOptionSetter(value)
  //         setSelectedCasteDB(option.db)
  //         setSelectedCaste(true)
  //       }
  //     })
  //   }
  //   //console.log(selectedCasteDB);
  // }
  const [validation, setValidation] = useState({
    fnm: null,
    lnm: null,
    unm: null,
    city: null,
    stateV: null,
  })

  let errorNames = []
  // const handleValidSubmit = (event, values) => {
  //   //console.log(values);
  //   formRef.current.reset()
  //   setvalidationError([])
  //   if (previousMember) {
  //     dispatch(updateMember(values))
  //     //previousMember.length = 0;
  //   } else {
  //     dispatch(addNewMember(values))
  //   }
  // }
  const handleInvalidSubmit = (event, errors, values) => {
    setvalidationError(errors.join(","))
  }

  let vals = ""
  if (validationError.length != "0") {
    vals = validationError.split(",")
    if (vals.includes("name")) {
      errorNames.push("Name")
    }
    if (vals.includes("religion")) {
      errorNames.push("Religion")
    }
    if (vals.includes("caste")) {
      errorNames.push("Caste")
    }
    if (vals.includes("birthDate")) {
      errorNames.push("Date of Birth")
    }
    if (vals.includes("fatherName")) {
      errorNames.push("Father Name")
    }
    if (vals.includes("district")) {
      errorNames.push("District")
    }
    if (vals.includes("mobile1")) {
      errorNames.push("Phone 1")
    }
    if (vals.includes("mobile2")) {
      errorNames.push("Phone 2")
    }
  }
  const ageArr = []
  for (var i = 18; i < 60; i++) {
    ageArr.push(i)
  }
  const siblingsArr = []
  for (var i = 1; i <= 20; i++) {
    siblingsArr.push(i)
  }

  // generage select dropdown option list dynamically
  const Options = ({ options }) => {
    return options.map(option => (
      <option key={option.id} value={option.value}>
        {option.name}
      </option>
    ))
  }
  function handleSubmit(e) {
    e.preventDefault()
    const modifiedV = { ...validation }
    var fnm = document.getElementById("validationTooltip01").value
    var lnm = document.getElementById("validationTooltip02").value
    var unm = document.getElementById("validationTooltipUsername").value
    var city = document.getElementById("validationTooltip03").value
    var stateV = document.getElementById("validationTooltip04").value

    if (fnm === "") {
      modifiedV["fnm"] = false
    } else {
      modifiedV["fnm"] = true
    }

    if (lnm === "") {
      modifiedV["lnm"] = false
    } else {
      modifiedV["lnm"] = true
    }

    if (unm === "") {
      modifiedV["unm"] = false
    } else {
      modifiedV["unm"] = true
    }

    if (city === "") {
      modifiedV["city"] = false
    } else {
      modifiedV["city"] = true
    }

    if (stateV === "") {
      modifiedV["stateV"] = false
    } else {
      modifiedV["stateV"] = true
    }
    setValidation(modifiedV)
  }
  const calculate_age = dob1 => {
    var today = new Date()
    var birthDate = new Date(dob1) // create a date object directly from `dob1` argument
    var age_now = today.getFullYear() - birthDate.getFullYear()
    var m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--
    }
    //console.log(age_now);
    return age_now
  }
  const handleChange_age = (fieldName, value) => {
    //console.log("DOB:", value);
    const age = calculate_age(value)
    setageCalculate(age)
    //console.log("AGE:", age);
  }
  //for change tooltip display propery
  const onChangeValidation = (fieldName, value) => {
    const modifiedV = { ...validation }
    if (value !== "") {
      modifiedV[fieldName] = true
    } else {
      modifiedV[fieldName] = false
    }
    setValidation(modifiedV)
  }
  const defaultValues = {
    gender: "ஆண்",
    maritalStatus: "திருமணமாகாதவர்",
    physicalStatus: "இயல்பு நிலை",
    siblingsMale: "0",
    siblingsFemale: "0",
    siblingStatusMale: "0",
    siblingStatusFemale: "0",
  }
  return (
    <React.Fragment>
      {/* <div className="page-content">
        <MetaTags>
          <title>
            New Member | Vetri Matrimony
          </title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs title="Offline" breadcrumbItem="New Member" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="h5 mb-4"></CardTitle>
                  
                  <Form className="row gy-2 gx-3 align-items-center">
                  {/*<Row>
                 
                    <div className="col-sm-4">
                      <Label htmlFor="autoSizingInput">Name</Label>
                      <Input type="hidden" className="form-control" id="autoSizingInput" placeholder="Reg No" />
                    </div>
                    
                    <div className="col-sm-4">
                      <label className="visually-hidden" htmlFor="autoSizingSelect">Preference</label>
                      <select defaultValue="0" className="form-select">
                        <option value="0">Caste</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="col-sm-auto">
                      <button type="submit" className="btn btn-primary w-md">Edit</button>
                    </div>
                    </Row>* / } 
                  </Form>
                </CardBody>
              </Card>
            </Col>
                  </Row> */}
      <Row>
        <Col xl="12">
          {/* {error ? (
            <UncontrolledAlert color="danger" role="alert">
              {error}
            </UncontrolledAlert>
          ) : null} */}
          {/* {existingMember ? (
            <SweetAlert
              title={error}
              warning
              onConfirm={() => {
                dispatch(clearError(""))
              }}
            >
              The provided details already existed in below id number
              <b> {existingMember[0].idNum}</b>
            </SweetAlert>
          ) : null}
          {member ? (
            <SweetAlert
              title={successMessage}
              success
              onConfirm={() => {
                dispatch(clearError(""))
              }}
            >
              <Row>
                <Col md="6" style={{ textAlign: "right" }}>
                  Name
                </Col>
                <Col md="6" style={{ textAlign: "left" }}>
                  {member.name}
                </Col>
              </Row>
              <Row>
                <Col md="6" style={{ textAlign: "right" }}>
                  Father Name
                </Col>
                <Col md="6" style={{ textAlign: "left" }}>
                  {member.fatherName}
                </Col>
              </Row>
              <Row>
                <Col md="6" style={{ textAlign: "right" }}>
                  Marital Status
                </Col>
                <Col md="6" style={{ textAlign: "left" }}>
                  {member.maritalStatus}
                </Col>
              </Row>
              <Row>
                <Col md="6" style={{ textAlign: "right" }}>
                  Religion
                </Col>
                <Col md="6" style={{ textAlign: "left" }}>
                  {member.religion}
                </Col>
              </Row>
              <Row>
                <Col md="6" style={{ textAlign: "right" }}>
                  Caste
                </Col>
                <Col md="6" style={{ textAlign: "left" }}>
                  {member.caste}
                </Col>
              </Row>
              <Row>
                <Col md="6" style={{ textAlign: "right" }}>
                  Register Number
                </Col>
                <Col md="6" style={{ textAlign: "left", fontWeight: "900" }}>
                  <b>{member.idNum}</b>
                </Col>
              </Row>
            </SweetAlert>
          ) : null} */}
          <Card>
            <CardBody>
              <AvForm
                className="needs-validation"
                onValidSubmit={(e, v) => {
                  handleValidSubmit(e, v)
                }}
                ref={formRef}
                onInvalidSubmit={(e, err, v) => {
                  handleInvalidSubmit(e, err, v)
                }}
                model={defaultValues}
              >
                <Row>
                  <h4 className="mb-3 h4">Personal Details</h4>
                  <Col md="4">
                    {(() => {
                      // if (previousMember) {
                      //   return (
                      //     <AvField
                      //       name="memId"
                      //       placeholder="memId"
                      //       type="hidden"
                      //       errorMessage="memId"
                      //       className="form-control"
                      //       validate={{ required: { value: true } }}
                      //       value={previousMember[0]._id}
                      //       id="memId"
                      //     />
                      //   )
                      // }
                    })()}
                    <FormGroup className="mb-3">
                      <Label htmlFor="name">
                        பெயர் <span style={{ color: "red" }}>*</span>
                      </Label>
                      <AvField
                        name="name"
                        placeholder="பெயர்"
                        type="text"
                        errorMessage="Enter Name"
                        className="form-control"
                        validate={{ required: { value: true } }}
                        // value={previousMember ? previousMember[0].name : ""}
                        id="name"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <Label className="d-block mb-3" htmlFor="gender">
                      பாலினம்
                    </Label>
                    <AvRadioGroup
                      inline
                      name="gender"
                      id="gender"
                      required
                      // value={previousMember ? previousMember[0].gender : "ஆண்"}
                      errorMessage="Choose Gender"
                    >
                      <AvRadio label="ஆண்" value="ஆண்" />
                      <AvRadio label="பெண்" value="பெண்" />
                    </AvRadioGroup>
                  </Col>
                  <Col md="4">
                    <label htmlFor="religion">
                      மதம் <span style={{ color: "red" }}>*</span>
                    </label>
                    <AvField
                      type="select"
                      name="religion"
                      className="form-select"
                      id="religion"
                      required
                      // value={previousMember ? previousMember[0].religion : 0}
                    >
                      <option value="0">Select</option>
                      <option value="இந்து">இந்து</option>
                      <option value="கிறிஸ்தவர்">கிறிஸ்தவர்</option>
                      <option value="முஸ்லீம்">முஸ்லீம்</option>
                    </AvField>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md="4">
                    <FormGroup className="mb-3">
                      <Label htmlFor="caste">
                        இனம் <span style={{ color: "red" }}>*</span>
                      </Label>
                      <AvField
                        type="select"
                        name="caste"
                        className="form-select"
                        id="caste"
                        required
                        // value={previousMember ? previousMember[0].caste : 0}
                      >
                        <option value="0">Select</option>
                        {/* {caste.map(option => (
                          <option key={option._id} value={option.name}>
                            {option.name}
                          </option>
                        ))} */}
                      </AvField>
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup className="mb-3">
                      <Label htmlFor="subCaste">உட்பிரிவு</Label>
                      <AvField
                        name="subCaste"
                        placeholder="உட்பிரிவு"
                        type="text"
                        errorMessage="Enter Father Name"
                        className="form-control"
                        validate={{ required: { value: false } }}
                        // value={previousMember ? previousMember[0].subCaste : ""}
                        id="subCaste"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup className="mb-3">
                      <Label htmlFor="birthDate">
                        பிறந்த தேதி <span style={{ color: "red" }}>*</span>
                      </Label>
                      <AvField
                        name="birthDate"
                        placeholder="Date of Birth"
                        type="date"
                        errorMessage="Enter Date of Birth"
                        className="form-control"
                        onChange={(e, v) => {
                          handleChange_age(e, v)
                        }}
                        validate={{
                          required: { value: true },
                          max: {
                            value: new Date(
                              new Date().setFullYear(
                                new Date().getFullYear() - 18
                              )
                            ),
                            errorMessage: "Age must be above 18 years",
                          },
                          min: {
                            value: new Date(
                              new Date().setFullYear(
                                new Date().getFullYear() - 60
                              )
                            ),
                            errorMessage: "Choose correct date",
                          },
                        }}
                        // value={
                        //   previousMember ? previousMember[0].birthDate : ""
                        // }
                        id="birthDate"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="birthTime">பிறந்த நேரம் (24 Hrs)</Label>
                      <AvField
                        name="birthTime"
                        placeholder="பிறந்த நேரம் (HH:MM)"
                        type="text"
                        className="form-control"
                        validate={{ required: { value: false } }}
                        // value={
                        //   previousMember ? previousMember[0].birthTime : ""
                        // }
                        id="birthTime"
                      />
                      {/*<InputGroup>
                            <Flatpickr
                              name="birthTime"
                              className="form-control d-block"
                              placeholder="பிறந்த நேரம்"
                              id="birthTime"
                              options={{
                                enableTime: true,
                                noCalendar: true,
                                dateFormat: "H:i"
                              }}
                            />
                            <div className="input-group-append">
                              <span className="input-group-text">
                                <i className="mdi mdi-clock-outline" />
                              </span>
                            </div>
                          </InputGroup>*/}
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup className="mb-3">
                      <Label htmlFor="age">வயது</Label>
                      <AvField
                        name="age"
                        placeholder="வயது"
                        type="select"
                        errorMessage="Enter Date of Birth"
                        className="form-select"
                        validate={{ required: { value: true } }}
                        // value={
                        //   previousMember ? previousMember[0].age : ageCalculate
                        // }
                        id="age"
                      >
                        <option value="0">Select</option>
                        {ageArr.map((option, i) => (
                          <option key={i} value={option}>
                            {option}
                          </option>
                        ))}
                      </AvField>
                    </FormGroup>
                  </Col>

                  <Col md="4">
                    <FormGroup className="mb-3">
                      <Label htmlFor="height">உயரம்</Label>
                      <AvField
                        type="select"
                        name="height"
                        className="form-select"
                        id="height"
                        // value={previousMember ? previousMember[0].height : 0}
                      >
                        <Options options={height} />
                      </AvField>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md="4">
                    <label htmlFor="skinTone">நிறம்</label>
                    <AvField
                      type="select"
                      name="skinTone"
                      className="form-select"
                      id="skinTone"
                      // value={previousMember ? previousMember[0].skinTone : 0}
                    >
                      <option value="0">Select</option>
                      <option value="சிவப்பு">சிவப்பு</option>
                      <option value="கருப்பு">கருப்பு</option>
                      <option value="புதுநிறம்">புதுநிறம்</option>
                      <option value="மாநிறம்">மாநிறம்</option>
                    </AvField>
                  </Col>

                  <Col md="4">
                    <label htmlFor="maritalStatus">திருமண நிலை</label>
                    <AvField
                      type="select"
                      name="maritalStatus"
                      errorMessage="Select Marital Status"
                      className="form-select"
                      validate={{ required: { value: true } }}
                      id="maritalStatus"
                      // value={
                      //   previousMember
                      //     ? previousMember[0].maritalStatus
                      //     : "திருமணமாகாதவர்"
                      // }
                    >
                      <option value="திருமணமாகாதவர்">திருமணமாகாதவர்</option>
                      <option value="மறுமணம்">மறுமணம்</option>
                    </AvField>
                  </Col>
                  <Col md="4">
                    <label htmlFor="physicalStatus">உடல் தகுதி</label>
                    <AvField
                      type="select"
                      name="physicalStatus"
                      className="form-select"
                      id="physicalStatus"
                      // value={
                      //   previousMember
                      //     ? previousMember[0].physicalStatus
                      //     : "இயல்பு நிலை"
                      // }
                    >
                      <option value="இயல்பு நிலை">இயல்பு நிலை</option>
                      <option value="மாற்றுதிறனாளி">மாற்றுதிறனாளி</option>
                    </AvField>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col md="4">
                    <FormGroup className="mb-3">
                      <Label htmlFor="education">கல்வி தகுதி</Label>
                      <AvField
                        name="education"
                        placeholder="கல்வி தகுதி"
                        type="text"
                        errorMessage="Enter Father Name"
                        className="form-control"
                        validate={{ required: { value: false } }}
                        // value={
                        //   previousMember ? previousMember[0].education : ""
                        // }
                        id="education"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <Label htmlFor="qualification">பட்டயம்</Label>
                    <AvField
                      type="select"
                      name="qualification"
                      className="form-select"
                      // value={
                      //   previousMember ? previousMember[0].qualification : 0
                      // }
                    >
                      <Options options={education} />
                    </AvField>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <h4 className="mb-3 h4">Occupation Details</h4>
                  <Col md="4">
                    <FormGroup className="mb-3">
                      <Label htmlFor="occupation">வேலை/தொழில்</Label>
                      <AvField
                        name="occupation"
                        placeholder="வேலை/தொழில்"
                        type="text"
                        errorMessage="Enter Father Name"
                        className="form-control"
                        validate={{ required: { value: false } }}
                        // value={
                        //   previousMember ? previousMember[0].occupation : ""
                        // }
                        id="occupation"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup className="mb-3">
                      <Label htmlFor="workPlace">பணிபுரியும் இடம்</Label>
                      <AvField
                        name="workPlace"
                        placeholder="பணிபுரியும் இடம்"
                        type="text"
                        errorMessage="Enter Mother Name"
                        className="form-control"
                        validate={{ required: { value: false } }}
                        // value={
                        //   previousMember ? previousMember[0].workPlace : ""
                        // }
                        id="workPlace"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup className="mb-3">
                      <Label htmlFor="income">மாத வருமானம்</Label>
                      <AvField
                        name="income"
                        placeholder="மாத வருமானம்"
                        type="text"
                        errorMessage="Enter Mother Name"
                        className="form-control"
                        validate={{ required: { value: false } }}
                        // value={previousMember ? previousMember[0].income : ""}
                        id="income"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <h4 className="mb-3 h4">Family Details</h4>
                  <Col md="3">
                    <FormGroup className="mb-3">
                      <Label htmlFor="fatherName">
                        தந்தை பெயர் <span style={{ color: "red" }}>*</span>
                      </Label>
                      <AvField
                        name="fatherName"
                        placeholder="தந்தை பெயர்"
                        type="text"
                        errorMessage="Enter Father Name"
                        className="form-control"
                        validate={{ required: { value: true } }}
                        // value={
                        //   previousMember ? previousMember[0].fatherName : ""
                        // }
                        id="fatherName"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3">
                    <FormGroup className="mb-3">
                      <Label htmlFor="fatherOcc">தந்தை வேலை</Label>
                      <AvField
                        name="fatherOcc"
                        placeholder="தந்தை வேலை"
                        type="text"
                        errorMessage="Enter Father Name"
                        className="form-control"
                        validate={{ required: { value: false } }}
                        // value={
                        //   previousMember ? previousMember[0].fatherOcc : ""
                        // }
                        id="fatherOcc"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3">
                    <FormGroup className="mb-3">
                      <Label htmlFor="motherName">தாயார் பெயர்</Label>
                      <AvField
                        name="motherName"
                        placeholder="தாயார் பெயர்"
                        type="text"
                        errorMessage="Enter Mother Name"
                        className="form-control"
                        validate={{ required: { value: false } }}
                        // value={
                        //   previousMember ? previousMember[0].motherName : ""
                        // }
                        id="motherName"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3">
                    <FormGroup className="mb-3">
                      <Label htmlFor="motherOcc">தாயார் வேலை</Label>
                      <AvField
                        name="motherOcc"
                        placeholder="தாயார் வேலை"
                        type="text"
                        errorMessage="Enter Father Name"
                        className="form-control"
                        validate={{ required: { value: false } }}
                        // value={
                        //   previousMember ? previousMember[0].motherOcc : ""
                        // }
                        id="motherOcc"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col md="3">
                    <FormGroup className="mb-3">
                      <Label htmlFor="">உடன்பிறப்பு (இவரையும் சேர்த்து)</Label>
                    </FormGroup>
                  </Col>

                  <Col md="1" className="mb-3">
                    <label htmlFor="siblingsMale">ஆண்</label>
                    <AvField
                      type="select"
                      name="siblingsMale"
                      className="form-select"
                      // value={previousMember ? siblings[0] : 0}
                    >
                      <option value="0">0</option>
                      {siblingsArr.map((option, i) => (
                        <option key={i} value={option}>
                          {option}
                        </option>
                      ))}
                    </AvField>
                  </Col>
                  <Col md="1" className="mb-3">
                    <label htmlFor="siblingsFemale">பெண்</label>
                    <AvField
                      type="select"
                      name="siblingsFemale"
                      className="form-select"
                      // value={previousMember ? siblings[1] : 0}
                    >
                      <option value="0">0</option>
                      {siblingsArr.map((option, i) => (
                        <option key={i} value={option}>
                          {option}
                        </option>
                      ))}
                    </AvField>
                  </Col>
                  <Col md="1" className="mb-3"></Col>

                  <Col md="3">
                    <FormGroup className="mb-3">
                      <Label htmlFor="motherwork">திருமணமானவர்</Label>
                    </FormGroup>
                  </Col>
                  <Col md="1" className="mb-3">
                    <label htmlFor="siblingStatusMale">ஆண்</label>
                    <AvField
                      type="select"
                      name="siblingStatusMale"
                      className="form-select"
                      // value={previousMember ? siblingsStatus[0] : 0}
                    >
                      <option value="0">0</option>
                      {siblingsArr.map((option, i) => (
                        <option key={i} value={option}>
                          {option}
                        </option>
                      ))}
                    </AvField>
                  </Col>
                  <Col md="1" className="mb-3">
                    <label htmlFor="siblingStatusFemale">பெண்</label>
                    <AvField
                      type="select"
                      name="siblingStatusFemale"
                      className="form-select"
                      // value={previousMember ? siblingsStatus[1] : 0}
                    >
                      <option value="0">0</option>
                      {siblingsArr.map((option, i) => (
                        <option key={i} value={option}>
                          {option}
                        </option>
                      ))}
                    </AvField>
                  </Col>
                  <Col md="1" className="mb-3"></Col>
                  <Col md="12">
                    <FormGroup className="mb-3">
                      <Label htmlFor="god">குல தெய்வம்</Label>
                      <AvField
                        name="god"
                        placeholder="குல தெய்வம்"
                        type="text"
                        errorMessage="Enter Father Name"
                        className="form-control"
                        validate={{ required: { value: false } }}
                        // value={previousMember ? previousMember[0].god : ""}
                        id="god"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <h4 className="mb-3 h4">Property Details</h4>

                  <Col md="4">
                    <FormGroup className="mb-3">
                      <Label htmlFor="dowry">சீர்வருசை</Label>
                      <AvField
                        name="dowry"
                        placeholder="சீர்வருசை"
                        type="text"
                        errorMessage="Enter Mother Name"
                        className="form-control"
                        validate={{ required: { value: false } }}
                        // value={previousMember ? previousMember[0].dowry : ""}
                        id="dowry"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="8">
                    <FormGroup className="mb-3">
                      <Label htmlFor="assets">சொத்துக்கள்</Label>
                      <AvField
                        name="assets"
                        placeholder="சொத்துக்கள்"
                        type="text"
                        errorMessage="Enter Father Name"
                        className="form-control"
                        validate={{ required: { value: false } }}
                        // value={previousMember ? previousMember[0].assets : ""}
                        id="assets"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md="12">
                    <FormGroup className="mb-3">
                      <Label htmlFor="others">மற்றவை</Label>
                      <AvField
                        name="others"
                        placeholder="மற்றவை"
                        type="text"
                        errorMessage="Enter Mother Name"
                        className="form-control"
                        validate={{ required: { value: false } }}
                        // value={previousMember ? previousMember[0].others : ""}
                        id="others"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <h4 className="mb-3 h4">Horoscope Details</h4>

                  <Col md="4" className="mb-3">
                    <label htmlFor="star">நட்சத்திரம்</label>
                    <AvField
                      type="select"
                      name="star"
                      className="form-select"
                      // value={previousMember ? previousMember[0].star : 0}
                    >
                      <Options options={star} />
                    </AvField>
                  </Col>
                  <Col md="4" className="mb-3">
                    <label htmlFor="paadham">பாதம்</label>
                    <AvField
                      type="select"
                      name="paadham"
                      className="form-select"
                      // value={previousMember ? previousMember[0].paadham : 0}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </AvField>
                  </Col>
                  <Col md="4" className="mb-3">
                    <label htmlFor="raasi">ராசி</label>
                    <AvField
                      type="select"
                      name="raasi"
                      className="form-select"
                      // value={previousMember ? previousMember[0].raasi : 0}
                    >
                      <Options options={rasi} />
                    </AvField>
                  </Col>
                </Row>
                <Row>
                  <Col md="4" className="mb-3">
                    <label htmlFor="laknam">லக்னம்</label>
                    <AvField
                      type="select"
                      name="laknam"
                      className="form-select"
                      // value={previousMember ? previousMember[0].laknam : 0}
                    >
                      <Options options={rasi} />
                    </AvField>
                  </Col>
                  <Col md="4" className="mb-3">
                    <label htmlFor="directionOfLiving">திசைஇருப்பு</label>
                    <AvField
                      type="select"
                      name="directionOfLiving"
                      className="form-select"
                      // value={
                      //   // previousMember ? previousMember[0].directionOfLiving : 0
                      // }
                    >
                      <Options options={direction} />
                    </AvField>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col md="4">
                    <FormGroup className="mb-3">
                      <Label htmlFor="starYear">வருடம்</Label>
                      <AvField
                        name="starYear"
                        placeholder="வருடம்"
                        type="text"
                        errorMessage="Enter Father Name"
                        className="form-control"
                        validate={{ required: { value: false } }}
                        // value={previousMember ? splitYmd[0] : ""}
                        id="starYear"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup className="mb-3">
                      <Label htmlFor="starMonth">மாதம்</Label>
                      <AvField
                        name="starMonth"
                        placeholder="மாதம்"
                        type="text"
                        errorMessage="Enter Father Name"
                        className="form-control"
                        validate={{ required: { value: false } }}
                        // value={previousMember ? splitYmd[1] : ""}
                        id="starMonth"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup className="mb-3">
                      <Label htmlFor="starDay">நாள்</Label>
                      <AvField
                        name="starDay"
                        placeholder="நாள்"
                        type="text"
                        errorMessage="Enter Mother Name"
                        className="form-control"
                        validate={{ required: { value: false } }}
                        // value={previousMember ? splitYmd[2] : ""}
                        id="starDay"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="2" style={{ marginTop: "20px" }}>
                    <FormGroup>
                      <Label
                        className={"text-center"}
                        for="basicpill-cardno-input12"
                      >
                        Upload your photo
                      </Label>
                      <Photoupload />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6" className="mb-5">
                    <Row className="mb-3">
                      <Col lg="2" md="2" sm="2" xs="3">
                        <AvField
                          type="textarea"
                          id="zodiac1"
                          rows="3"
                          placeholder=""
                          name="zodiac1"
                          // value={
                          //   previousMember
                          //     ? previousMember[0].raasi_box[0].zodiac1
                          //     : ""
                          // }
                        />
                      </Col>
                      <Col lg="2" md="2" sm="2" xs="3">
                        <AvField
                          type="textarea"
                          id="zodiac2"
                          maxLength="225"
                          rows="3"
                          placeholder=""
                          name="zodiac2"
                          // value={
                          //   previousMember
                          //     ? previousMember[0].raasi_box[0].zodiac2
                          //     : ""
                          // }
                        />
                      </Col>
                      <Col lg="2" md="2" sm="2" xs="3">
                        <AvField
                          type="textarea"
                          id="zodiac3"
                          maxLength="225"
                          rows="3"
                          placeholder=""
                          name="zodiac3"
                          // value={
                          //   previousMember
                          //     ? previousMember[0].raasi_box[0].zodiac3
                          //     : ""
                          // }
                        />
                      </Col>
                      <Col lg="2" md="2" sm="2" xs="3">
                        <AvField
                          type="textarea"
                          id="zodiac4"
                          maxLength="225"
                          rows="3"
                          placeholder=""
                          name="zodiac4"
                          // value={
                          //   previousMember
                          //     ? previousMember[0].raasi_box[0].zodiac4
                          //     : ""
                          // }
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col lg="2" md="2" sm="2" xs="3">
                        <AvField
                          type="textarea"
                          id="zodiac5"
                          maxLength="225"
                          rows="3"
                          placeholder=""
                          name="zodiac5"
                          // value={
                          //   previousMember
                          //     ? previousMember[0].raasi_box[0].zodiac5
                          //     : ""
                          // }
                        />
                      </Col>
                      <Col
                        lg="4"
                        md="4"
                        sm="4"
                        xs="6"
                        style={{
                          textAlign: "center",
                          marginTop: "25px",
                          fontWeight: "900",
                        }}
                      >
                        ராசி
                      </Col>

                      <Col lg="2" md="2" sm="2" xs="3">
                        <AvField
                          type="textarea"
                          id="zodiac6"
                          maxLength="225"
                          rows="3"
                          placeholder=""
                          name="zodiac6"
                          //  value={
                          //     previousMember
                          //        ? previousMember[0].raasi_box[0].zodiac6
                          //       : ""
                          //   }
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col lg="2" md="2" sm="2" xs="3">
                        <AvField
                          type="textarea"
                          id="zodiac7"
                          maxLength="225"
                          rows="3"
                          placeholder=""
                          name="zodiac7"
                          // value={
                          //   previousMember
                          //     ? previousMember[0].raasi_box[0].zodiac7
                          //     : ""
                          // }
                        />
                      </Col>
                      <Col lg="4" md="4" sm="4" xs="6"></Col>
                      <Col lg="2" md="2" sm="2" xs="3">
                        <AvField
                          type="textarea"
                          id="zodiac8"
                          maxLength="225"
                          rows="3"
                          placeholder=""
                          name="zodiac8"
                          // value={
                          //   previousMember
                          //     ? previousMember[0].raasi_box[0].zodiac8
                          //     : ""
                          // }
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col lg="2" md="2" sm="2" xs="3">
                        <AvField
                          type="textarea"
                          id="zodiac9"
                          maxLength="225"
                          rows="3"
                          placeholder=""
                          name="zodiac9"
                          // value={
                          //   previousMember
                          //     ? previousMember[0].raasi_box[0].zodiac9
                          //     : ""
                          // }
                        />
                      </Col>
                      <Col lg="2" md="2" sm="2" xs="3">
                        <AvField
                          type="textarea"
                          id="zodiac10"
                          maxLength="225"
                          rows="3"
                          placeholder=""
                          name="zodiac10"
                          // value={
                          //   previousMember
                          //     ? previousMember[0].raasi_box[0].zodiac10
                          //     : ""
                          // }
                        />
                      </Col>
                      <Col lg="2" md="2" sm="2" xs="3">
                        <AvField
                          type="textarea"
                          id="zodiac11"
                          maxLength="225"
                          rows="3"
                          placeholder=""
                          name="zodiac11"
                          // value={
                          //   previousMember
                          //     ? previousMember[0].raasi_box[0].zodiac11
                          //     : ""
                          // }
                        />
                      </Col>
                      <Col lg="2" md="2" sm="2" xs="3">
                        <AvField
                          type="textarea"
                          id="zodiac12"
                          maxLength="225"
                          rows="3"
                          placeholder=""
                          name="zodiac12"
                          // value={
                          //   previousMember
                          //     ? previousMember[0].raasi_box[0].zodiac12
                          //     : ""
                          // }
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col md="6">
                    <Row className="mb-3">
                      <Col lg="2" md="2" sm="2" xs="3">
                        <AvField
                          type="textarea"
                          id="amsam1"
                          maxLength="225"
                          rows="3"
                          placeholder=""
                          name="amsam1"
                          // value={
                          //   previousMember
                          //     ? previousMember[0].amsam_box[0].amsam1
                          //     : ""
                          // }
                        />
                      </Col>
                      <Col lg="2" md="2" sm="2" xs="3">
                        <AvField
                          type="textarea"
                          id="amsam2"
                          maxLength="225"
                          rows="3"
                          placeholder=""
                          name="amsam2"
                          // value={
                          //   previousMember
                          //     ? previousMember[0].amsam_box[0].amsam2
                          //     : ""
                          // }
                        />
                      </Col>
                      <Col lg="2" md="2" sm="2" xs="3">
                        <AvField
                          type="textarea"
                          id="amsam3"
                          maxLength="225"
                          rows="3"
                          placeholder=""
                          name="amsam3"
                          // value={
                          //   previousMember
                          //     ? previousMember[0].amsam_box[0].amsam3
                          //     : ""
                          // }
                        />
                      </Col>
                      <Col lg="2" md="2" sm="2" xs="3">
                        <AvField
                          type="textarea"
                          id="amsam4"
                          maxLength="225"
                          rows="3"
                          placeholder=""
                          name="amsam4"
                          // value={
                          //   previousMember
                          //     ? previousMember[0].amsam_box[0].amsam4
                          //     : ""
                          // }
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col lg="2" md="2" sm="2" xs="3">
                        <AvField
                          type="textarea"
                          id="amsam5"
                          maxLength="225"
                          rows="3"
                          placeholder=""
                          name="amsam5"
                          // value={
                          //   previousMember
                          //     ? previousMember[0].amsam_box[0].amsam5
                          //     : ""
                          // }
                        />
                      </Col>
                      <Col
                        lg="4"
                        md="4"
                        sm="4"
                        xs="6"
                        style={{
                          textAlign: "center",
                          marginTop: "25px",
                          fontWeight: "900",
                        }}
                      >
                        அம்சம்
                      </Col>

                      <Col lg="2" md="2" sm="2" xs="3">
                        <AvField
                          type="textarea"
                          id="amsam6"
                          maxLength="225"
                          rows="3"
                          placeholder=""
                          name="amsam6"
                          // value={
                          //   previousMember
                          //     ? previousMember[0].amsam_box[0].amsam6
                          //     : ""
                          // }
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col lg="2" md="2" sm="2" xs="3">
                        <AvField
                          type="textarea"
                          id="amsam7"
                          maxLength="225"
                          rows="3"
                          placeholder=""
                          name="amsam7"
                          // value={
                          //   previousMember
                          //     ? previousMember[0].amsam_box[0].amsam7
                          //     : ""
                          // }
                        />
                      </Col>
                      <Col lg="4" md="4" sm="4" xs="6"></Col>
                      <Col lg="2" md="2" sm="2" xs="3">
                        <AvField
                          type="textarea"
                          id="amsam8"
                          maxLength="225"
                          rows="3"
                          placeholder=""
                          name="amsam8"
                          // value={
                          //   previousMember
                          //     ? previousMember[0].amsam_box[0].amsam8
                          //     : ""
                          // }
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col lg="2" md="2" sm="2" xs="3">
                        <AvField
                          type="textarea"
                          id="amsam9"
                          maxLength="225"
                          rows="3"
                          placeholder=""
                          name="amsam9"
                          // value={
                          //   previousMember
                          //     ? previousMember[0].amsam_box[0].amsam9
                          //     : ""
                          // }
                        />
                      </Col>
                      <Col lg="2" md="2" sm="2" xs="3">
                        <AvField
                          type="textarea"
                          id="amsam10"
                          maxLength="225"
                          rows="3"
                          placeholder=""
                          name="amsam10"
                          // value={
                          //   previousMember
                          //     ? previousMember[0].amsam_box[0].amsam10
                          //     : ""
                          // }
                        />
                      </Col>
                      <Col lg="2" md="2" sm="2" xs="3">
                        <AvField
                          type="textarea"
                          id="amsam11"
                          maxLength="225"
                          rows="3"
                          placeholder=""
                          name="amsam11"
                          // value={
                          //   previousMember
                          //     ? previousMember[0].amsam_box[0].amsam11
                          //     : ""
                          // }
                        />
                      </Col>
                      <Col lg="2" md="2" sm="2" xs="3">
                        <AvField
                          type="textarea"
                          id="amsam12"
                          maxLength="225"
                          rows="3"
                          placeholder=""
                          name="amsam12"
                          // value={
                          //   previousMember
                          //     ? previousMember[0].amsam_box[0].amsam12
                          //     : ""
                          // }
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <h4 className="mb-3 h4">Address Details</h4>
                  <Col md="12">
                    <FormGroup className="mb-3">
                      <Label htmlFor="place">இருப்பிடம்</Label>
                      <AvField
                        name="place"
                        placeholder="இருப்பிடம்"
                        type="text"
                        errorMessage="Enter Father Name"
                        className="form-control"
                        validate={{ required: { value: false } }}
                        // value={previousMember ? previousMember[0].place : ""}
                        id="place"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md="4">
                    <FormGroup className="mb-3">
                      <Label htmlFor="address1">முகவரி</Label>
                      <AvField
                        name="address1"
                        placeholder="முகவரி"
                        type="text"
                        errorMessage="Enter Father Name"
                        className="form-control"
                        validate={{ required: { value: false } }}
                        // value={previousMember ? previousMember[0].address1 : ""}
                        id="address1"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup className="mb-3">
                      <Label htmlFor="address2">முகவரி</Label>
                      <AvField
                        name="address2"
                        placeholder="முகவரி"
                        type="text"
                        className="form-control"
                        validate={{ required: { value: false } }}
                        // value={previousMember ? previousMember[0].address2 : ""}
                        id="address2"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup className="mb-3">
                      <label htmlFor="district">
                        மாவட்டம் <span style={{ color: "red" }}>*</span>
                      </label>
                      <AvField
                        type="select"
                        name="district"
                        errorMessage="Select District"
                        className="form-select"
                        validate={{ required: { value: true } }}
                        // value={previousMember ? previousMember[0].district : 0}
                      >
                        <Options options={district} />
                      </AvField>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <h4 className="mb-3 h4">Contact Details</h4>
                  <Col md="4">
                    <FormGroup className="mb-3">
                      <Label htmlFor="mobile1">
                        போன் 1 <span style={{ color: "red" }}>*</span>
                      </Label>
                      <AvField
                        name="mobile1"
                        placeholder="போன் 1"
                        type="text"
                        errorMessage="Enter Mobile Number"
                        className="form-control"
                        // value={previousMember ? previousMember[0].mobile1 : ""}
                        validate={{
                          required: { value: true },
                          pattern: {
                            value: "^[0-9]+$",
                            errorMessage: "Mobile No must be numbers",
                          },
                          minLength: {
                            value: 10,
                            errorMessage: "Mobile No must be 10 characters",
                          },
                          maxLength: {
                            value: 10,
                            errorMessage: "Mobile No must be 10 characters",
                          },
                        }}
                        id="mobile1"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup className="mb-3">
                      <Label htmlFor="mobile2">
                        போன் 2 <span style={{ color: "red" }}>*</span>
                      </Label>
                      <AvField
                        name="mobile2"
                        placeholder="போன் 2"
                        type="text"
                        errorMessage="Enter Mobile Number"
                        className="form-control"
                        // value={previousMember ? previousMember[0].mobile2 : ""}
                        validate={{
                          required: { value: true },
                          pattern: {
                            value: "^[0-9]+$",
                            errorMessage: "Mobile No must be numbers",
                          },
                          minLength: {
                            value: 10,
                            errorMessage: "Mobile No must be 10 characters",
                          },
                          maxLength: {
                            value: 10,
                            errorMessage: "Mobile No must be 10 characters",
                          },
                        }}
                        id="mobile2"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup className="mb-3">
                      <Label htmlFor="emailId">மின்னஞ்சல்</Label>
                      <AvField
                        name="email"
                        placeholder="மின்னஞ்சல்"
                        type="text"
                        errorMessage="Enter Father Name"
                        className="form-control"
                        validate={{ required: { value: false } }}
                        // value={previousMember ? previousMember[0].email : ""}
                        id="email"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="4">
                    <FormGroup className="mb-3">
                      <Label htmlFor="matrimonyFor">
                        யாருக்கான திருமண விவரம்
                      </Label>
                      <AvField
                        name="matrimonyFor"
                        placeholder="யாருக்கான திருமண விவரம்"
                        type="text"
                        errorMessage="Enter Father Name"
                        className="form-control"
                        validate={{ required: { value: false } }}
                        // value={
                        //   previousMember ? previousMember[0].matrimonyFor : ""
                        // }
                        id="matrimonyFor"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="8">
                    <FormGroup className="mb-3">
                      <Label htmlFor="expectation">எதிர்பார்ப்பு</Label>
                      <AvField
                        name="expectation"
                        placeholder="எதிர்பார்ப்பு"
                        type="text"
                        errorMessage="Enter Father Name"
                        className="form-control"
                        validate={{ required: { value: false } }}
                        // value={
                        //   previousMember ? previousMember[0].expectation : ""
                        // }
                        id="expectation"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                {/* {hideSubmit.hideSubmit == 0 ? (
                  <Button
                    color="primary"
                    type="submit"
                    style={{ float: "right", marginLeft: "20px" }}
                  >
                    Submit
                  </Button>
                ) : (
                  ""
                )} */}
                <Button
                  type="submit"
                  style={{
                    float: "right",
                    marginLeft: "20px",
                    backgroundColor: "#E30B5C",
                  }}
                >
                  Submit
                </Button>
                <br />
                <br />
                <br />
                {validationError.length != "0" ? (
                  <UncontrolledAlert color="danger" role="alert">
                    {"Invalid: " + errorNames.map(name => " " + name)}
                  </UncontrolledAlert>
                ) : (
                  ""
                )}
                {/*<Button 
                      color="secondary" 
                      type="button" 
                      style={{"float": "left"}}
                      onClick={handleFormReset()}
                    >
                      Reset
                    </Button>*/}
              </AvForm>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/*</Container>
      </div>*/}
    </React.Fragment>
  )
}

export default AddMember
