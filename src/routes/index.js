import Search from "pages/vetrmatrimonyfrontend/Userbackend/Regularsearch"
import Viewhistory from "pages/vetrmatrimonyfrontend/Userbackend/Viewhistory/index"
import Visitorlist from "pages/vetrmatrimonyfrontend/Userbackend/Visitorlist/indiex"
import Recentviews from "pages/vetrmatrimonyfrontend/Userbackend/Recentviews/index"
import Changephoto from "pages/vetrmatrimonyfrontend/Userbackend/Changephoto/index"
import Myaccount from "pages/vetrmatrimonyfrontend/Userbackend/Myaccount"
import Memberlogin from "pages/vetrmatrimonyfrontend/Userfrontend/Login"
import Homepage from "pages/vetrmatrimonyfrontend/Userfrontend/Homepage"
import Privacy from "../pages/vetrmatrimonyfrontend/Userfrontend/PrivacyPolicy/index"
import Searchresult from "../pages/vetrmatrimonyfrontend/Userbackend/SearchResults/index"
import Printpage from "pages/vetrmatrimonyfrontend/Userbackend/SearchResults/Print"
import Termsandcondtion from "pages/TermsandCondition/index"
import Freesearch from "pages/vetrmatrimonyfrontend/Userfrontend/FreeSearch/index"
import contact from "pages/vetrmatrimonyfrontend/Userfrontend/Contact/index"
// import Freeregister from "../pages/vetrmatrimonyfrontend/Freeregister2/index"
import Freeregister from "../pages/vetrmatrimonyfrontend/Freeregister/index"
import Onlineregister from "../pages/vetrmatrimonyfrontend/Onlineregister/index"
const authProtectedRoutes = [
  { path: "/user/viewhistory", component: Viewhistory },
  { path: "/user/visitorlist", component: Visitorlist },
  { path: "/user/recentviews", component: Recentviews },
  { path: "/user/changephoto", component: Changephoto },
  { path: "/user/search", component: Search },
  { path: "/user/myaccount", component: Myaccount },
  { path: "/user/searchresults", component: Searchresult },
]

const Print = [{ path: "/user/print", component: Printpage }]

const publicRoutes = [
  { path: "/", component: Homepage },

  { path: "/memberlogin", component: Memberlogin },
  { path: "/privacypolicy", component: Privacy },
  { path: "/termsandcondition", component: Termsandcondtion },
  { path: "/freesearch", component: Freesearch },
  // { path: "/freeregister", component: Freeregister },
  { path: "/freeregister", component: Freeregister },
  { path: "/contact", component: contact },
  { path: "/onlinepayment", component: Onlineregister },
]

export { publicRoutes, authProtectedRoutes, Print }
