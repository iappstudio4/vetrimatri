import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import ReactDrawer from "react-drawer"
import "react-drawer/lib/react-drawer.css"
import image from "../../assets/images/logos/logo-dark.png"
import { connect } from "react-redux"

import { Link } from "react-router-dom"

// Redux Store
import { showRightSidebarAction, toggleLeftmenu } from "../../store/actions"
// reactstrap

import RightSidebar from "../CommonForBoth/RightSidebar"

import logoLight from "../../assets/images/logo-light.png"

//i18n
import { withTranslation } from "react-i18next"

const Header = props => {
  let [data, setdata] = useState()

  useEffect(() => {
    let userdata = window.localStorage.getItem("authUser")
    if (userdata) {
      let set = JSON.parse(userdata)
      setdata(set)
    }
  }, [])
  const [menu, setMenu] = useState(false)
  const [isSearch, setSearch] = useState(false)
  const [socialDrp, setsocialDrp] = useState(false)
  const [position, setPosition] = useState()
  const [open, setOpen] = useState(false)

  const toggleTopDrawer = () => {
    setPosition("right")
    setOpen(!open)
  }

  const onDrawerClose = () => {
    setOpen(false)
  }

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        )
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      }
    }
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
          <a className="navbar-brand" href="#">
            <img
              style={{ marginLeft: "10px" }}
              className=""
              src={image}
              alt="..."
              height={60}
            />
          </a>

          <div className="d-flex">
            <div className="navbar-brand-box"></div>
          </div>
          <p>
            <strong> Name &nbsp;: &nbsp;</strong>
            {data && data.username} <br /> <strong>User id :&nbsp; </strong>{" "}
            {data && data.uid}
          </p>

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
