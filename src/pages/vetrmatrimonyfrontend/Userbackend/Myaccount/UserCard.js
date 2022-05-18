import React, { useState } from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  Media,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import { withTranslation, useTranslation } from "react-i18next"

//Import Images

function CardUser(props) {
  const [settingsMenu, setSettingsMenu] = useState(false)
  //Setting Menu
  const toggleSettings = () => {
    setSettingsMenu(settingsMenu)
  }
  const { t } = useTranslation()

  return (
    <React.Fragment>
      <Row>
        <Col lg="4">
          <Media>
            <div className="me-3">
              <img
                src={
                  "https://st2.depositphotos.com/6571396/9693/i/600/depositphotos_96937402-stock-photo-beautiful-girl-with-pink-glasses.jpg"
                }
                alt=""
                className="avatar-md rounded-circle img-thumbnail"
              />
            </div>
            <Media className="align-self-center" body>
              <div className="text-muted">
                <p className="mb-2">{t("welcome")}</p>
                <p className="mb-0">{t("registered")}</p>
                <p className="mb-0">{t("validity")}</p>
                <p className="mb-0">
                  Last login:&ensp;&ensp; 26-02-2022 13:50:03
                </p>
              </div>
            </Media>
          </Media>
        </Col>

        <Col lg="4" className="align-self-center">
          <div className="text-lg-center mt-4 mt-lg-0">
            <Row>
              <Col xs="4">
                <div>
                  <p className="text-muted text-truncate mb-2">
                    {t("Allocate")}
                  </p>
                  <h5 className="mb-0">70</h5>
                </div>
              </Col>
              <Col xs="4">
                <div>
                  <p className="text-muted text-truncate mb-2">
                    {t("Balance")}
                  </p>
                  <h5 className="mb-0">70</h5>
                </div>
              </Col>

              <Col xs="4"></Col>
            </Row>
          </div>
        </Col>

        <Col lg="4">
          <div className="clearfix mt-4 mt-lg-0">
            <Dropdown
              isOpen={settingsMenu}
              toggle={toggleSettings}
              className="float-end"
            >
              <DropdownToggle
                style={{
                  margin: "10px",
                  backgroundColor: "#E30B5C",
                  color: "white",
                }}
                tag="button"
                className="btn "
              >
                {t("View history")}
              </DropdownToggle>
              <DropdownToggle
                style={{
                  margin: "10px",
                  backgroundColor: "#E30B5C",
                  color: "white",
                }}
                tag="button"
                className="btn"
              >
                {t("Print")}
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end">
                <DropdownItem href="#">Action</DropdownItem>
                <DropdownItem href="#">Another action</DropdownItem>
                <DropdownItem href="#">Something else</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default CardUser
