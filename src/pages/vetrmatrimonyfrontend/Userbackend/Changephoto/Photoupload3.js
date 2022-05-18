import React, { useState } from "react"
import MetaTags from "react-meta-tags"
import {
  Row,
  Col,
  Card,
  Form,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
} from "reactstrap"
import Dropzone from "react-dropzone"

import { Link } from "react-router-dom"

const FormUpload = () => {
  let handle = e => {
    e.preventDefault()
  }
  const [selectedFiles, setselectedFiles] = useState([])
  const [no, setno] = useState(3)
  const [text, settext] = useState("555")

  function handleAcceptedFiles(files) {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    )
    setselectedFiles(files)
    console.log(selectedFiles)
  }
  const removeFile = e => {
    e.preventDefault()
    setselectedFiles([])
  }

  /**
   * Formats the size
   */
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }
  let uploadFile = (e, files) => {
    e.preventDefault()
    let body = {
      file: files,
      input: text,
    }
    if (files.length === 1) {
      console.log(`$upload from ${no} `)
      console.log(body)
    } else {
      console.log("cant post emtpy ")
    }
  }

  return (
    <React.Fragment>
      <Card>
        <CardBody style={{ textAlign: "center" }}>
          <CardSubtitle className="mb-3"> </CardSubtitle>
          <Form onSubmit={e => uploadFile(e, selectedFiles)}>
            <input
              onChange={e => settext(e.target.value)}
              type="hidden"
              name="random"
              value="555"
            />
            <Dropzone
              style={{ textAlign: "center" }}
              accept=".jpeg,.jpg,.png"
              onDrop={acceptedFiles => {
                handleAcceptedFiles(acceptedFiles)
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <div style={{ height: "80px" }}>
                  <div
                    style={{ padding: "2px" }}
                    className="dz-message needsclick mt-2"
                    {...getRootProps()}
                  >
                    <input {...getInputProps()} />
                    <Row>
                      <Col lg="12">
                        {" "}
                        <i
                          className="fas fa-camera fa-2x"
                          style={{ marginBottom: "15px" }}
                        ></i>
                      </Col>
                    </Row>
                    <button className="btn btn-light" onClick={handle}>
                      choose file
                    </button>
                  </div>
                </div>
              )}
            </Dropzone>
            <div className="dropzone-previews mt-3 " id="file-previews">
              {selectedFiles.map((f, i) => {
                return (
                  <Card
                    className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                    key={i + "-file"}
                  >
                    <div
                      style={{ height: "150px", overflow: "hidden" }}
                      className="p-2"
                    >
                      <Row className="align-items-center">
                        <Col
                          lg="12"
                          style={{ margin: "auto" }}
                          className="col-auto"
                        >
                          <img
                            data-dz-thumbnail=""
                            height="80"
                            className="avatar-sm rounded bg-light"
                            alt={f.name}
                            src={f.preview}
                          />
                        </Col>

                        <Col lg="12" style={{ textAlign: "center" }}>
                          <button
                            style={{ margin: "10px" }}
                            onClick={removeFile}
                            className="btn btn-rounded btn-outline-danger "
                            type="button"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Delete"
                          >
                            <i className="fa fa-trash" />
                          </button>
                          <br />
                          <Link to="#" className="text-muted font-weight-bold">
                            {" "}
                            <p className="mb-0">
                              <strong>{f.formattedSize}</strong>
                            </p>
                            {f.name}
                          </Link>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                )
              })}
            </div>

            <button
              style={{ backgroundColor: "#E30B5C", color: "white" }}
              type="submit"
              className="btn "
            >
              Upload image
            </button>
          </Form>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default FormUpload
