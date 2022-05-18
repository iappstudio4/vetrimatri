import React, { useState } from "react"
import PropTypes from "prop-types"
import ReactDrawer from "react-drawer"
import "react-drawer/lib/react-drawer.css"
import logo from "../../assets/images/logos/logo-dark.png"

import { connect } from "react-redux"

// Redux Store
import { showRightSidebarAction, toggleLeftmenu } from "../../store/actions"
// reactstrap

// Import menuDropdown

import RightSidebar from "../CommonForBoth/RightSidebar"

// import images

//i18n
import { withTranslation } from "react-i18next"

const Header = props => {
  const [position, setPosition] = useState()
  const [open, setOpen] = useState(false)

  const toggleTopDrawer = () => {
    setPosition("right")
    setOpen(!open)
  }

  const onDrawerClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <header id="page-topbar" style={{ backgroundColor: "white" }}>
        <div
          className="navbar-header"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: " space-between",
          }}
        >
          <button
            style={{ marginLeft: "10px" }}
            className="btn btn-outline-danger d-none  d-lg-block"
          >
            <i
              className="bx bx-phone
"
            >
              {" "}
              99123812321
            </i>
          </button>

          <a className="navbar-brand" href="#">
            <img
              style={{ marginLeft: "10px" }}
              className=""
              src={logo}
              alt="..."
              height={60}
            />
          </a>
          <button className="btn btn-outline-danger d-none d-lg-block">
            <i className="bx bx-user "> Free register</i>{" "}
          </button>

          <button
            style={{ marginLeft: "auto" }}
            type="button"
            className="btn btn-sm px-3 font-size-16 d-lg-none header-item "
            data-toggle="collapse"
            onClick={() => {
              props.toggleLeftmenu(!props.leftMenu)
            }}
            data-target="#topnav-menu-content"
          >
            <i className="fa fa-fw fa-bars" />
          </button>
        </div>
      </header>
      <ReactDrawer open={open} position={position} onClose={onDrawerClose}>
        <RightSidebar onClose={onDrawerClose} />
      </ReactDrawer>
    </React.Fragment>
  )
}

Header.propTypes = {
  leftMenu: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func,
}

const mapStatetoProps = state => {
  const { layoutType, showRightSidebar, leftMenu } = state.Layout
  return { layoutType, showRightSidebar, leftMenu }
}

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
})(withTranslation()(Header))
