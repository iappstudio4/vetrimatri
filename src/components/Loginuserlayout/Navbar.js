import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Row, Col, Collapse } from "reactstrap"
import { Link, useParams, withRouter, useLocation } from "react-router-dom"
import "./Header.css"
import { toggleLeftmenu } from "store/actions"
import classname from "classnames"
import { useDispatch } from "react-redux"
//i18n
import { withTranslation } from "react-i18next"

import { connect } from "react-redux"

const Navbar = props => {
  let [login, setlogin] = useState(false)

  const [dashboard, setdashboard] = useState(false)
  const [ui, setui] = useState(false)
  const [app, setapp] = useState(false)
  const [email, setemail] = useState(false)
  const [ecommerce, setecommerce] = useState(false)
  const [crypto, setcrypto] = useState(false)
  const [project, setproject] = useState(false)
  const [task, settask] = useState(false)
  const [contact, setcontact] = useState(false)
  const [blog, setBlog] = useState(false)
  const [component, setcomponent] = useState(false)
  const [form, setform] = useState(false)
  const [table, settable] = useState(false)
  const [chart, setchart] = useState(false)
  const [icon, seticon] = useState(false)
  const [map, setmap] = useState(false)
  const [extra, setextra] = useState(false)
  const [invoice, setinvoice] = useState(false)
  const [auth, setauth] = useState(false)
  const [utility, setutility] = useState(false)

  console.log(login)
  let dispatch = useDispatch()
  let handler = () => {
    dispatch(toggleLeftmenu())
  }
  useEffect(() => {
    var matchingMenuItem = null
    var ul = document.getElementById("navigation")
    var items = ul.getElementsByTagName("a")
    for (var i = 0; i < items.length; ++i) {
      if (props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i]
        break
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem)
    }
  })
  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    if (parent) {
      parent.classList.add("active") // li
      const parent2 = parent.parentElement
      parent2.classList.add("active") // li
      const parent3 = parent2.parentElement
      if (parent3) {
        parent3.classList.add("active") // li
        const parent4 = parent3.parentElement
        if (parent4) {
          parent4.classList.add("active") // li
          const parent5 = parent4.parentElement
          if (parent5) {
            parent5.classList.add("active") // li
            const parent6 = parent5.parentElement
            if (parent6) {
              parent6.classList.add("active") // li
            }
          }
        }
      }
    }
    return false
  }

  // useEffect(() => {
  //   let currenturl = window.location.href;
  //   console.log(currenturl);
  //   if (currenturl === "http://localhost:3000/") {
  //     setlogin(false);
  //   }
  //   if (currenturl === "http://localhost:3000/memberlogin") {
  //     setlogin(false);
  //   }
  // }, [login]);
  // useEffect(() => {
  //   const credentials = localStorage.getItem(`authUser`);
  //   console.log(credentials.email);
  //   if (credentials) {
  //     setlogin(true);
  //   }
  // }, []);
  const location = useLocation()

  //destructuring pathname from location
  const { pathname } = location
  const splitLocation = pathname.split("/")

  return (
    <React.Fragment>
      <div className="topnav" style={{ backgroundColor: "#2A2D93" }}>
        <div className="container-fluid">
          <nav
            className="navbar navbar-dark navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              isOpen={props.leftMenu}
              className="navbar-collapse"
              id="topnav-menu-content"
            >
              <ul className="navbar-nav" style={{ margin: "auto" }}>
                <li className="nav-item dropdown">
                  <Link
                    onClick={handler}
                    className="nav-link"
                    to="/user/myaccount"
                  >
                    {props.t("My account")}
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    onClick={handler}
                    className="nav-link"
                    to="/user/search"
                  >
                    {props.t("Search")}
                    {props.menuOpen}
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    onClick={handler}
                    className="nav-link"
                    to="/user/changephoto"
                  >
                    {props.t("Change photo")}
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    onClick={handler}
                    className="nav-link"
                    to="/user/viewhistory"
                  >
                    {props.t("View history")}
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    onClick={handler}
                    className="nav-link"
                    to="/user/visitorlist"
                  >
                    {props.t("Visitor list")}
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    onClick={handler}
                    className="nav-link"
                    to="/user/recentviews"
                  >
                    {props.t("Recent views")}
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link onClick={handler} className="nav-link" to="/">
                    {props.t("Log out")}
                  </Link>
                </li>
              </ul>
              {/* <ul className="navbar-nav" style={{ margin: "auto" }}>
              <li className={`nav-link${splitLocation[1] === "about" ? "active" : ""}`}>
                    <Link to='/myaccount'>My account</Link>
                </li>
             
                <li className={`nav-link${splitLocation[1] === "about" ? "active" : ""}`}>
                    <Link to='/changephoto'>Change photo</Link>
                </li>
                   
                <li className={`nav-link${splitLocation[1] === "about" ? "active" : ""}`}>
                    <Link to='/search'>Search</Link>
                </li>
                   
                <li className={`nav-link${splitLocation[1] === "about" ? "active" : ""}`}>
                    <Link to='/visitorlist'>Visitor list</Link>
                </li>
                   
                <li className={`nav-link${splitLocation[1] === "about" ? "active" : ""}`}>
                    <Link to='/viewhistory'>View history</Link>
                </li>
                <li className={`nav-link${splitLocation[1] === "about" ? "active" : ""}`}>
                    <Link to='/recentviews'>Recent views</Link>
                </li>
                <li className={`nav-link${splitLocation[1] === "about" ? "active" : ""}`}>
                    <Link to='/'>Logout</Link>
                </li>

             
                              </ul> */}
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  )
}

Navbar.propTypes = {
  leftMenu: PropTypes.any,
  location: PropTypes.any,
  menuOpen: PropTypes.any,
  t: PropTypes.any,
}

const mapStatetoProps = state => {
  const { leftMenu } = state.Layout
  return { leftMenu }
}

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(Navbar))
)
