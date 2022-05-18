import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  CardTitle,
  CardSubtitle,
  CardText,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  Modal,
  ModalHeader,
  ModalBody,
  Table,
  TabPane,
} from "reactstrap"
import classnames from "classnames"
import { isEmpty } from "lodash"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import ModalVideo from "react-modal-video"
import "react-modal-video/scss/modal-video.scss"

//Import Star Ratings
import StarRatings from "react-star-ratings"

//Import Product Images
import { productImages } from "assets/images/product"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"

//Import actions
import {
  getProductDetail as onGetProductDetail,
  getProductComments,
  onAddReply as onAddReplyAction,
  onAddComment as onAddCommentAction,
} from "store/actions"

//redux
import { useSelector, useDispatch } from "react-redux"
import img1 from "../../../../assets/images/small/img-1.png"
import img2 from "../../../../assets/images/small/img-2.png"
import img3 from "../../../../assets/images/small/img-3.png"
import img4 from "../../../../assets/images/small/img-4.jpg"
import img5 from "../../../../assets/images/small/img-5.jpg"
import img6 from "../../../../assets/images/small/img-6.jpg"
import img7 from "../../../../assets/images/small/img-7.jpg"

const EcommerceProductDetail = props => {
  const images = [img1, img2, img3, img4, img5, img6]

  const dispatch = useDispatch()

  // const { product, productComments } = useSelector(state => ({
  //   product: state.ecommerce.product,
  //   productComments: state.ecommerce.productComments,
  // }))
  const product = {
    subImage: [
      "data:image/jpeg;base64,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",
      "/static/media/Pro-1a.f3070a42.png",
      "/static/media/Pro-1b.466c5951.png",
    ],
  }
  console.log(product)

  const [activeTab, setActiveTab] = useState("1")

  useEffect(() => {
    dispatch(onGetProductDetail(1))
  }, [dispatch])

  const toggleTab = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }
  const [photoIndex, setphotoIndex] = useState(0)
  const [isFits, setisFits] = useState(false)
  const [isEffects, setisEffects] = useState(false)
  const [isGallery, setisGallery] = useState(false)
  const [isGalleryZoom, setisGalleryZoom] = useState(false)
  const [isOpen, setisOpen] = useState(false)
  const [isOpen1, setisOpen1] = useState(false)
  const [modal, setmodal] = useState(false)

  const imageShow = (img, id) => {
    const expandImg = document.getElementById("expandedImg" + id)
    expandImg.src = img
  }

  useEffect(() => {
    dispatch(getProductComments())
  }, [dispatch])

  const [comments, setComments] = useState([])

  const onClickReply = commentId => {
    const modifiedComments = [...comments]

    const commentIdx = (modifiedComments || []).findIndex(
      comment => comment.commentId.toString() === commentId.toString()
    )
    if (commentIdx > -1) {
      if (modifiedComments[commentIdx]) {
        modifiedComments[commentIdx]["showAddComment"] = true

        for (let i = 0; i < (modifiedComments || []).length; i++) {
          if (i !== commentIdx) {
            modifiedComments[i]["showAddComment"] = false
          }
        }
      } else {
        modifiedComments[commentIdx]["showAddComment"] = false
      }
      setComments(modifiedComments)
    }
  }

  const onCancelReply = commentId => {
    if (commentId) {
      const modifiedComments = [...comments]
      for (let i = 0; i < (modifiedComments || []).length; i++) {
        modifiedComments[i]["showAddComment"] = false
      }
      setComments(modifiedComments)
    }
  }

  return (
    <React.Fragment>
      {isFits ? (
        <Lightbox
          mainSrc={images[photoIndex]}
          enableZoom={false}
          imageCaption={
            "Caption. Can be aligned it to any side and contain any HTML."
          }
          onCloseRequest={() => {
            setisFits(!isFits)
          }}
        />
      ) : null}

      {isEffects ? (
        <Lightbox
          mainSrc={images[3]}
          enableZoom={false}
          onCloseRequest={() => {
            setisEffects(!isEffects)
          }}
        />
      ) : null}

      {isGallery ? (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          enableZoom={true}
          onCloseRequest={() => {
            setisGallery(false)
          }}
          onMovePrevRequest={() => {
            setphotoIndex((photoIndex + images.length - 1) % images.length)
          }}
          onMoveNextRequest={() => {
            setphotoIndex((photoIndex + 1) % images.length)
          }}
          imageCaption={"Photo " + parseFloat(photoIndex + 1)}
        />
      ) : null}

      {isGalleryZoom ? (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => {
            setisGalleryZoom(false)
          }}
          onMovePrevRequest={() => {
            setphotoIndex((photoIndex + images.length - 1) % images.length)
          }}
          onMoveNextRequest={() => {
            setphotoIndex((photoIndex + 1) % images.length)
          }}
        />
      ) : null}

      {!isEmpty(product) && (
        <div className="product-detai-imgs">
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col md={7} xs="9">
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <div className="zoom-gallery">
                    <img
                      src="https://cdn.pixabay.com/photo/2020/03/21/11/52/landscape-4953577_1280.jpg"
                      id="expandedImg1"
                      alt=""
                      className="img-fluid mx-auto d-block"
                      onClick={() => {
                        setisGallery(true)
                        setphotoIndex(0)
                      }}
                      width="275"
                      style={{
                        width: "300px",
                        height: "400px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </TabPane>
                <TabPane tabId="2">
                  <div className="zoom-gallery">
                    <img
                      src="https://images.unsplash.com/photo-1610509528015-e4c30d95a5cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZlbWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                      id="expandedImg2"
                      alt=""
                      className="img-fluid mx-auto d-block"
                      onClick={() => {
                        setisGallery(true)
                        setphotoIndex(1)
                      }}
                      width="275"
                      style={{
                        width: "300px",
                        height: "400px",
                        objectFit: "cover",
                        backgroundSizeL: "100%",
                      }}
                    />
                  </div>
                </TabPane>
                <TabPane tabId="3">
                  <div className="zoom-gallery">
                    <img
                      src="https://images.unsplash.com/photo-1610509528015-e4c30d95a5cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZlbWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                      id="expandedImg3"
                      alt=""
                      className="img-fluid mx-auto d-block"
                      onClick={() => {
                        setisGallery(true)
                        setphotoIndex(2)
                      }}
                      width="275"
                      style={{
                        width: "300px",
                        height: "400px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
          <Nav style={{ display: "flex", justifyContent: "center" }}>
            <Col md="7" lg="7" sm="7">
              <div style={{ display: "flex" }}>
                <div
                  className={classnames({
                    active: activeTab === "1",
                  })}
                  onClick={() => {
                    toggleTab("1")
                  }}
                >
                  <NavItem>
                    <NavLink>
                      <img
                        src="data:image/jpeg;base64,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"
                        alt=""
                        onClick={() => {
                          imageShow(product["subImage"][0], 1)
                        }}
                        className="img-fluid mx-auto d-block rounded"
                        style={{ height: "100px", width: "1000px" }}
                      />
                    </NavLink>
                  </NavItem>
                </div>
                <div
                  className={classnames({
                    active: activeTab === "2",
                  })}
                  onClick={() => {
                    toggleTab("2")
                  }}
                >
                  <NavItem>
                    <NavLink>
                      <img
                        src="https://images.unsplash.com/photo-1610509528015-e4c30d95a5cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZlbWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                        alt=""
                        onClick={() => {
                          imageShow(
                            product["subImage"][1],

                            2
                          )
                        }}
                        className="img-fluid mx-auto d-block rounded"
                        style={{ height: "100px", width: "1000px" }}
                      />
                    </NavLink>
                  </NavItem>
                </div>
                <div
                  className={classnames({
                    active: activeTab === "3",
                  })}
                  onClick={() => {
                    toggleTab("3")
                  }}
                >
                  <NavItem>
                    <NavLink>
                      {" "}
                      <img
                        src="http://localhost:3000/static/media/Pro-1b.466c5951.png"
                        alt=""
                        onClick={() => {
                          imageShow(product["subImage"][2], 3)
                        }}
                        className="img-fluid mx-auto d-block rounded"
                        style={{ height: "100px", width: "1000px" }}
                      />
                    </NavLink>
                  </NavItem>
                </div>
              </div>
            </Col>
          </Nav>
        </div>
      )}
    </React.Fragment>
  )
}

EcommerceProductDetail.propTypes = {
  product: PropTypes.object,
  match: PropTypes.any,
  onGetProductDetail: PropTypes.func,
}

export default EcommerceProductDetail
