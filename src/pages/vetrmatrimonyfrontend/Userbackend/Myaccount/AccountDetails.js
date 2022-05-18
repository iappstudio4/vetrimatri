import React from "react"

import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Table,
} from "reactstrap"

//Import Breadcrumb

const Accountdetails = () => {
  return (
    <React.Fragment>
      <Container
        style={{ backgroundColor: "white", padding: "20px" }}
        fluid={true}
      >
        <h4 style={{ color: "#E30B5C" }}>Account details</h4>
        <Row style={{ marginTop: "30px" }}>
          <Col lg={4}>
            <h3>D.ராகினி &nbsp; </h3>
          </Col>
          <Col lg={4}>
            <h3> பதிவு எண் : 20754 </h3>
          </Col>
          <Col lg={2}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <i style={{ color: "#E30B5C" }} className="bx bx-phone bx-sm">
                {" "}
              </i>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <i style={{ color: "#E30B5C" }} className="bx bx-world bx-sm">
                {" "}
              </i>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center ">
          <Col lg={6}>
            <CardBody>
              <div className="table-responsive">
                <Table className="table mb-0">
                  <tbody>
                    <tr>
                      <td>இனம் :</td>
                      <td>நாடார் - பெண் </td>
                    </tr>
                    <tr>
                      <td>பிறந்த தேதி :</td>
                      <td>11/2/12</td>
                    </tr>
                    <tr>
                      <td>வயது :</td>
                      <td>26</td>
                    </tr>
                    <tr>
                      <td>கல்வி தகுதி :</td>
                      <td>MCA</td>
                    </tr>
                    <tr>
                      <td>வேலை/தொழில் :</td>
                      <td>Own Business Juiceshop & Fruit Shop</td>
                    </tr>
                    <tr>
                      <td>பணிபுரியும் இடம் :</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>தந்தை பெயர் :</td>
                      <td>K.தனசேகரன்</td>
                    </tr>
                    <tr>
                      <td>உடன் பிறப்பு :</td>
                      <td>ஆண் பெண் 2</td>
                    </tr>
                    <tr>
                      <td>இருப்பிடம் :</td>
                      <td>மதுரை</td>
                    </tr>
                    <tr>
                      <td>குல தெய்வம் :</td>
                      <td>சீலைக்காரி அம்மன் </td>
                    </tr>
                    <tr>
                      <td>சீர் வருசை:</td>
                      <td>நேரில் </td>
                    </tr>
                    <tr>
                      <td>சொத்துக்கள்:</td>
                      <td>- </td>
                    </tr>
                    <tr>
                      <td>நட்சத்திரம்:</td>
                      <td>பூரம் பாதம் </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Col>
          <Col lg={6}>
            <CardBody>
              <div className="table-responsive">
                <Table className="table mb-0">
                  <tbody>
                    <tr>
                      <td>திசை இருப்பு :</td>
                      <td>- </td>
                    </tr>
                    <tr>
                      <td>எதிர்பார்ப்பு :</td>
                      <td>Any Degree,நல்லகுடும்பம்</td>
                    </tr>
                    <tr>
                      <td>உட்பிரிவு :</td>
                      <td>இந்து</td>
                    </tr>
                    <tr>
                      <td>பிறந்த நேரம் :</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>நிறம் :</td>
                      <td>சிகப்பு</td>
                    </tr>
                    <tr>
                      <td>உயரம் :</td>
                      <td>5.4</td>
                    </tr>
                    <tr>
                      <td>சம்பளம் :</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>தாயார் பெயர் :</td>
                      <td>D.வைகுண்டலட்சுமி</td>
                    </tr>
                    <tr>
                      <td>தாயார் வேலை :</td>
                      <td>இல்லத்தரசி</td>
                    </tr>
                    <tr>
                      <td>திருமணமானவர் :</td>
                      <td>ஆண் பெண் </td>
                    </tr>
                    <tr>
                      <td> கல்வியின் நிலை:</td>
                      <td>Post Graduate </td>
                    </tr>
                    <tr>
                      <td>ராசி:</td>
                      <td>சிம்மம் </td>
                    </tr>
                    <tr>
                      <td>லக்னம்:</td>
                      <td> கும்பம் </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Col>

          <Col lg={6}>
            <Table className="table-bordered">
              <tbody>
                <tr height={75}>
                  <td width={75} align="center" valign="middle">
                    <span className="textstyle">சனி கே</span>
                  </td>
                  <td width={75} align="center" valign="middle">
                    <span className="textstyle" />
                  </td>
                  <td width={75} align="center" valign="middle">
                    <span className="textstyle" />
                  </td>
                  <td width={75} align="center" valign="middle">
                    <span className="textstyle" />
                  </td>
                </tr>
                <tr height={75}>
                  <td width={75} align="center" valign="middle">
                    <span className="textstyle">ல</span>
                  </td>
                  <td
                    width={75}
                    align="center"
                    valign="middle"
                    colSpan={2}
                    rowSpan={2}
                  >
                    <h4 style={{ color: "#E20B5C" }}>ராசி</h4>
                  </td>
                  <td width={75} align="center" valign="middle">
                    <span className="textstyle" />
                  </td>
                </tr>
                <tr height={75}>
                  <td width={75} align="center" valign="middle">
                    <span className="textstyle">செ சு</span>
                  </td>
                  <td width={75} align="center" valign="middle">
                    <span className="textstyle">சந்</span>
                  </td>
                </tr>
                <tr height={75}>
                  <td width={75} align="center" valign="middle">
                    <span className="textstyle">சூ வி பு</span>
                  </td>
                  <td width={75} align="center" valign="middle">
                    <span className="textstyle" />
                  </td>
                  <td width={75} align="center" valign="middle">
                    <span className="textstyle" />
                  </td>
                  <td width={75} align="center" valign="middle">
                    <span className="textstyle">ரா</span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col lg={6}>
            <Table className="table-bordered">
              <tbody>
                <tr height={75}>
                  <td width={75} align="center" valign="middle">
                    <span className="textstyle">செ கே சனி</span>
                  </td>
                  <td width={75} align="center" valign="middle">
                    <span className="textstyle" />
                  </td>
                  <td width={75} align="center" valign="middle">
                    <span className="textstyle">ல</span>
                  </td>
                  <td width={75} align="center" valign="middle">
                    <span className="textstyle">வி</span>
                  </td>
                </tr>
                <tr height={75}>
                  <td width={75} align="center" valign="middle">
                    <span className="textstyle" />
                  </td>
                  <td
                    width={75}
                    align="center"
                    valign="middle"
                    colSpan={2}
                    rowSpan={2}
                  >
                    <h4 style={{ color: "#E20B5C" }}>அம்சம்</h4>
                  </td>
                  <td width={75} align="center" valign="middle">
                    <span className="textstyle" />
                  </td>
                </tr>
                <tr height={75}>
                  <td width={75} align="center" valign="middle">
                    <span className="textstyle" />
                  </td>
                  <td width={75} align="center" valign="middle">
                    <span className="textstyle" />
                  </td>
                </tr>
                <tr height={75}>
                  <td width={75} align="center" valign="middle">
                    <span className="textstyle" />
                  </td>
                  <td width={75} align="center" valign="middle">
                    <span className="textstyle">சூ சந்</span>
                  </td>
                  <td width={75} align="center" valign="middle">
                    <span className="textstyle">பு</span>
                  </td>
                  <td width={75} align="center" valign="middle">
                    <span className="textstyle">சு கே</span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>

          <h4
            style={{
              color: "#E30B5C",
              marginTop: "70px",
              marginBottom: "70px",
            }}
            className="text-center"
          >
            Your Photos
          </h4>

          <Col lg="2" md="4" sm="12">
            <img
              style={{ width: "400px", minHeight: "300px" }}
              src="https://data.whicdn.com/images/353774966/original.png?t=1615226722"
              alt="..."
              className={`img-thumbnail `}
            />
            <h4 style={{ margin: "10px" }} className="h4">
              Photo 1
            </h4>
          </Col>
          <Col lg="2" md="4" sm="12">
            <img
              style={{ width: "400px", minHeight: "300px" }}
              src="https://images.unsplash.com/photo-1610509528015-e4c30d95a5cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZlbWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt="..."
              className={`img-thumbnail`}
            />
            <h4 style={{ margin: "10px" }} className="h4">
              Photo 2
            </h4>
          </Col>
          <Col lg="2" md="4" sm="12">
            <img
              style={{ width: "400px", minHeight: "300px" }}
              src="https://images.unsplash.com/photo-1610509528015-e4c30d95a5cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZlbWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt="..."
              className={`img-thumbnail `}
            />
            <h4 style={{ margin: "10px" }} className="h4">
              Photo 3
            </h4>
          </Col>
          <Col lg="2" md="4" sm="12">
            <img
              style={{ width: "400px", minHeight: "300px" }}
              className={`img-thumbnail `}
              src="https://images.unsplash.com/photo-1610509528015-e4c30d95a5cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZlbWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt="..."
            />
            <h4 style={{ margin: "10px" }} className="h4">
              Photo 4
            </h4>
          </Col>
          <Col lg="2" md="4" sm="12">
            <img
              style={{ width: "400px", minHeight: "300px" }}
              className={`img-thumbnail `}
              src="https://images.unsplash.com/photo-1610509528015-e4c30d95a5cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZlbWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt="..."
            />
            <h4 style={{ margin: "10px" }} className="h4">
              Photo 5
            </h4>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default Accountdetails
