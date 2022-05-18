import React from "react"
import MetaTags from 'react-meta-tags';
import { useState } from "react";
import { Link } from "react-router-dom"
import classs from './App.css'
import Photoupload1 from "./Photoupload1"
import Photoupload2 from "./Photoupload2"
import Photoupload3 from "./Photoupload3"
import Photoupload4 from "./Photoupload4"
import Photoupload5 from "./photoupload5"
import { withTranslation,useTranslation } from "react-i18next"

import {
  Form,
  CardText,
    Container,
  Table,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";

const Changephoto = (number) => {
  console.log(number)

  const { t } = useTranslation();

  return (
    <React.Fragment>
 <MetaTags>
          <title>Change photo</title>
        </MetaTags>
    <div className="page-content" style={{height:"100%" ,marginBottom:"20px"}}>

    <div className="container-fluid" >
    <Breadcrumb title="My account" breadcrumbItem="Change photo" />

 <div style={{backgroundColor:"white"}}>


          <Row >
            <Col lg="12">

              <div className="text-center" >

                <Row className="justify-content-center mt-5">
                  <Row  className="justify-content-center ">
                  <Col lg={10}  >

              <Card   color="info" className="text-white-50" >
                <CardBody style={{backgroundColor:"#E30B5C"}} >
                  <CardTitle className="mb-4 text-white">
                    <i className="mdi mdi-alert-circle-outline me-3" />Info
                    Card
                  </CardTitle>
                  <CardText ><h5 style={{color:"white"}}>              
                      After photo Approval, your photo come to Live
 </h5>
                  </CardText>
                  <CardText >
                    <h5 style={{color:"white"}}>                 
                      உங்கள் புகைப்படம் ஒப்புதலுக்கு பிறகு, நடைமுறைக்கு வரும்
 </h5>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
                  </Row>
              <Col lg="2" md="4" sm="7">
                
                <img  style={{width:"300px",height:"230px"}}  src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="..." className={`img-thumbnail ${classs.image}`}/>
                <h4 className="h4">Photo 1</h4>

                <Photoupload1  />
           

        
              </Col>
                   <Col lg="2" md="4" sm="7">
                <img  style={{width:"300px",height:"230px"}}   src="https://images.unsplash.com/photo-1610509528015-e4c30d95a5cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZlbWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="..."className={`img-thumbnail`} />
                <h4 className="h4">Photo 2</h4>

                <Photoupload2  />

                   </Col>
                   <Col lg="2" md="4" sm="7">
                <img  style={{width:"300px",height:"230px"}}  src="https://images.unsplash.com/photo-1610509528015-e4c30d95a5cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZlbWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="..." className={`img-thumbnail `}/>
                <h4 className="h4">Photo 3</h4>

                <Photoupload3 />

                   </Col>  
                   <Col lg="2" md="4" sm="7">
                <img style={{width:"300px",height:"230px"}}  className={`img-thumbnail `} src="https://images.unsplash.com/photo-1610509528015-e4c30d95a5cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZlbWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="..." />
                <h4 className="h4">Photo 4</h4>

                <Photoupload4   />

                   </Col>  
                   <Col lg="2" md="4" sm="7">
                <img style={{width:"300px",height:"230px"}}  className={`img-thumbnail `} src="https://images.unsplash.com/photo-1610509528015-e4c30d95a5cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZlbWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="..." />
                <h4 className="h4">Photo 5</h4>

                <Photoupload5 />

                   </Col>  
              </Row>
    
              </div>
            </Col>
      
          </Row>
      </div>
      </div>
      </div>

      </React.Fragment>
   )
}

export default Changephoto
