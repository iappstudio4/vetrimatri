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
      "https://cdn.pixabay.com/photo/2020/03/21/11/52/landscape-4953577_960_720.jpg",
      "https://wallpapercave.com/wp/wp4937436.jpg",
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
        <a>
          <div className="product-detai-imgs">
            <Row style={{ display: "flex", justifyContent: "center" }}>
              <Col md={7} xs="9">
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <div className="zoom-gallery">
                      <div
                        style={{
                          backgroundColor: "black",
                          height: "400px",
                          display: "flex",
                          alignItems: "center",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src="https://cdn.pixabay.com/photo/2020/03/21/11/52/landscape-4953577_960_720.jpg"
                          id="expandedImg1"
                          alt=""
                          className="img-fluid mx-auto d-block"
                          onClick={() => {
                            setisGallery(true)
                            setphotoIndex(1)
                          }}
                          width="100%"
                          style={{ objectFit: "fill", maxHeight: "100%" }}
                        />
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="2">
                    <div className="zoom-gallery">
                      <div
                        style={{
                          backgroundColor: "black",
                          height: "400px",
                          display: "flex",
                          alignItems: "center",
                          overflow: "hidden",
                        }}
                      >
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
                          style={{ objectFit: "fill", maxHeight: "100%" }}
                        />
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="3">
                    <div className="zoom-gallery">
                      <div
                        style={{
                          backgroundColor: "black",
                          height: "400px",
                          display: "flex",
                          alignItems: "center",
                          overflow: "hidden",
                        }}
                      >
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
                          style={{ objectFit: "fill", maxHeight: "100%" }}
                        />
                      </div>
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
                          src="https://cdn.pixabay.com/photo/2020/03/21/11/52/landscape-4953577_960_720.jpg"
                          alt=""
                          onClick={() => {
                            imageShow(product["subImage"][0], 1)
                          }}
                          className="img-fluid mx-auto d-block rounded"
                          style={{
                            height: "60px",
                            width: "900px",
                            objectFit: "cover",
                          }}
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
                          style={{
                            height: "60px",
                            width: "900px",
                            objectFit: "cover",
                          }}
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
                          style={{
                            height: "60px",
                            width: "900px",
                            objectFit: "cover",
                          }}
                        />
                      </NavLink>
                    </NavItem>
                  </div>
                </div>
              </Col>
            </Nav>
          </div>
        </a>
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
