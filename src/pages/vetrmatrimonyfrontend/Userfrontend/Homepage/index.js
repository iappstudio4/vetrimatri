import React from "react"

import "./Home.css"
import About from "./homepageSections/About"
import Photos from "./homepageSections/photosection"
import Carosel from "./Carousel/Femalecarousel"
import Malecarousel from "./Carousel/Malecarousel"
import Homepagebanner from "./homepageSections/Homepagebanner"
import { Container, Row } from "reactstrap"
import Photoupload from "../../Userbackend/Changephoto/Photoupload1"
import { withTranslation, useTranslation } from "react-i18next"
import Breadcrumbs from "../../../../components/Common/Breadcrumb"
import Welcome from "./homepageSections/Welcome"
import Numbers from "./homepageSections/Contactno"
import Helpline from "./homepageSections/Helpline"

const Homepage = () => {
  const { t } = useTranslation()

  return (
    <React.Fragment>
      <div className="my-5 pt-sm-5 Homepagebanner">
        <Homepagebanner />
      </div>
      <Numbers />

      <Welcome />
      {/* males  */}
      {/* <h1
        className="text-center"
        style={{ color: "#E30B5C", marginBottom: "100px" }}
      >
        {t("femalegrooms")}
      </h1>
      <Container>
        <Carosel />
        <h1
          className="text-center"
          style={{ color: "#E30B5C", marginBottom: "100px" }}
        >
          {t("malegrooms")}
        </h1>

        <Malecarousel />
      </Container> */}
      {/* Photos section */}
      <About />
      <Helpline />
    </React.Fragment>
  )
}

export default withTranslation()(Homepage)
