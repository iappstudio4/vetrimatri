import React from "react"
import MetaTags from "react-meta-tags"
import { useState } from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Modal,
  Container,
  Table,
} from "reactstrap"

const ZodiacModal = () => {
  const [modal_standard, setmodal_standard] = useState(false)
  const [modal_large, setmodal_large] = useState(false)
  const [modal_xlarge, setmodal_xlarge] = useState(false)
  const [modal_small, setmodal_small] = useState(false)
  const [modal_center, setmodal_center] = useState(false)
  const [modal_scroll, setmodal_scroll] = useState(false)
  const [modal_fullscreen, setmodal_fullscreen] = useState(false)
  const [modal_backdrop, setmodal_backdrop] = useState(false)

  function tog_standard() {
    setmodal_standard(!modal_standard)
    removeBodyCss()
  }

  function tog_fullscreen() {
    setmodal_fullscreen(!modal_fullscreen)
    removeBodyCss()
  }

  function tog_backdrop() {
    setmodal_backdrop(!modal_backdrop)
    removeBodyCss()
  }

  function removeBodyCss() {
    document.body.classList.add("no_padding")
  }

  function tog_large() {
    setmodal_large(!modal_large)
    removeBodyCss()
  }

  function tog_xlarge() {
    setmodal_xlarge(!modal_xlarge)
    removeBodyCss()
  }

  function tog_small() {
    setmodal_small(!modal_small)
    removeBodyCss()
  }

  function tog_center() {
    setmodal_center(!modal_center)
    removeBodyCss()
  }

  function tog_scroll() {
    setmodal_scroll(!modal_scroll)
    removeBodyCss()
  }

  return (
    <>
      <div className="d-flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => {
            tog_large()
          }}
          className="btn "
          data-toggle="modal"
          data-target=".bs-example-modal-lg"
          style={{ margin: "2px", backgroundColor: "#E30B5C", color: "white" }}
        >
          <i
            className="bx bx-world

"
          >
            {" "}
          </i>{" "}
          &nbsp; ஜாதக கட்டம்{" "}
        </button>
      </div>

      <div>
        <Modal
          size="lg"
          isOpen={modal_large}
          toggle={() => {
            tog_large()
          }}
        >
          <div className="modal-header">
            <h5 className="modal-title mt-0" id="myLargeModalLabel">
              ஜாதக கட்டம்{" "}
            </h5>
            <button
              onClick={() => {
                setmodal_large(false)
              }}
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <Row>
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
            </Row>
          </div>
        </Modal>
        <Modal
          size="sm"
          isOpen={modal_small}
          toggle={() => {
            tog_small()
          }}
        >
          <div className="modal-header">
            <h5 className="modal-title mt-0" id="mySmallModalLabel">
              Small Modal
            </h5>
            <button
              onClick={() => {
                setmodal_small(false)
              }}
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p className="mb-0">
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default ZodiacModal
