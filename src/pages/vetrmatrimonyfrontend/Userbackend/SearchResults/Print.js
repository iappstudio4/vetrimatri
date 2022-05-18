import React, { useEffect } from "react"
import { Table } from "reactstrap"
const Print = () => {
  useEffect(() => {
    window.print()
  }, [])
  return (
    <div style={{ height: "100vh" }} align="center">
      <div>
        <table border={0} cellPadding={5} cellSpacing={0} width={850}>
          <tbody>
            <tr>
              <td
                colSpan={5}
                style={{ borderStyle: "solid", borderWidth: "1px" }}
              >
                <p align="center">
                  <b>
                    <font size={6}>வெற்றி திருமண தகவல் மையம்</font>
                  </b>
                  <br />
                  பிளாட் நம்பர் : 5, லேக் ஏரியா, மாட்டுத்தாவணி பஸ் நிலையம்
                  அருகில், மதுரை - 107, தமிழ்நாடு, தொலை பேசி எண் :{" "}
                  <b>
                    <font size={4}>
                      7397113833, 7397043396, 7397094709, 7397152597,
                      9629145176, 9629145339
                    </font>
                  </b>
                </p>
              </td>
            </tr>
            <tr>
              <td
                width={909}
                colSpan={5}
                style={{ borderTopStyle: "solid", borderTopWidth: "1px" }}
              >
                <table
                  border={0}
                  cellPadding={8}
                  style={{
                    borderStyle: "double",
                    borderWidth: "5px",
                    borderCollapse: "collapse",
                    paddingLeft: "4px",
                    paddingRight: "4px",
                    paddingTop: "1px",
                    paddingBottom: "1px",
                  }}
                  width={840}
                  id="table5"
                >
                  <tbody>
                    <tr height="10px">
                      <td width={146} bgcolor="#999999">
                        <b>
                          <span lang="ta">
                            <font size={2}>J.பாலமுருகன்</font>
                          </span>
                        </b>
                      </td>
                      <td width={381} bgcolor="#999999" colSpan={3}>
                        <p align="center">
                          <font size={1} face="Tahoma">
                            <span lang="ta">
                              இது வெற்றி திருமண தகவல் மையத்தில் எடுக்கப்பட்ட
                              ஜாதகம்
                            </span>
                          </font>
                        </p>
                      </td>
                      <td width={239} bgcolor="#999999">
                        <p align="right">
                          <b>பதிவு எண் :37375</b>
                        </p>
                      </td>
                    </tr>
                    <tr height="10px">
                      <td width={146} height="10px">
                        <font size={2}>பெயர் </font>
                        <span lang="en-us">
                          <font size={2}>: </font>
                        </span>
                      </td>
                      <td width={237} height="10px" colSpan={2}>
                        <b>
                          <span lang="en-us">
                            <font size={2}>J.பாலமுருகன்</font>
                          </span>
                        </b>
                      </td>
                      <td width={144} height="10px">
                        <font size={2}>நிறம்</font>
                      </td>
                      <td width={239} height="10px">
                        <b>
                          <span lang="en-us">
                            <font size={2}>மாநிறம்</font>
                          </span>
                        </b>
                      </td>
                    </tr>
                    <tr height="10px">
                      <td width={146} height={36}>
                        <font size={2}>இனம்</font>
                      </td>
                      <td width={237} height={36} colSpan={2}>
                        <b>
                          <span lang="en-us">
                            <font size={2}>நாடார் - ஆண்</font>
                          </span>
                        </b>
                      </td>
                      <td width={144} height={36}>
                        <font size={2}>உட்பிரிவு </font>
                      </td>
                      <td width={239} height={36}>
                        <b>
                          <span lang="en-us">
                            <font size={2}>இந்து</font>
                          </span>
                        </b>
                      </td>
                    </tr>
                    <tr height="10px">
                      <td width={146}>
                        <font size={2}>பிறந்த தேதி</font>
                      </td>
                      <td width={113}>
                        <b>
                          <span lang="en-us">
                            <font size={2}>26.11.1998</font>
                          </span>
                        </b>
                      </td>
                      <td width={108}>
                        <font size={2}>நேரம் : </font>
                      </td>
                      <td width={144}>
                        <font size={2}>வயது</font>
                      </td>
                      <td width={239}>
                        <b>
                          <span lang="en-us">
                            <font size={2}>23</font>
                          </span>
                        </b>
                      </td>
                    </tr>
                    <tr height="10px">
                      <td width={146} height={36}>
                        <font size={2}>கல்வி தகுதி</font>
                      </td>
                      <td width={237} height={36} colSpan={2}>
                        <b>
                          <span lang="en-us">
                            <font size={2}>ITI</font>
                          </span>
                        </b>
                      </td>
                      <td width={144} height={36}>
                        <font size={2}>உயரம்</font>
                      </td>
                      <td width={239} height={36}>
                        <b>
                          <span lang="en-us">
                            <font size={2}>5.6</font>
                          </span>
                        </b>
                      </td>
                    </tr>
                    <tr height="10px">
                      <td width={146}>
                        <font size={2}>வேலை/தொழில்</font>
                      </td>
                      <td width={492} colSpan={4}>
                        <b>
                          <span lang="en-us">
                            <font size={2}>A/C Machanic Shop Own</font>
                          </span>
                        </b>
                      </td>
                    </tr>
                    <tr height="10px">
                      <td width={146} height={36}>
                        <font size={2}>மாத வருமானம்</font>
                      </td>
                      <td width={237} height={36} colSpan={2}>
                        <b>
                          <span lang="en-us">
                            <font size={2}>30,000</font>
                          </span>
                        </b>
                      </td>
                      <td width={144} height={36}>
                        <font size={2}>பணிபுரியும் இடம்</font>
                      </td>
                      <td width={239} height={36}>
                        <b>
                          <span lang="en-us">
                            <font size={2}>சென்னை</font>
                          </span>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td width={146}>
                        <font size={2}>தந்தை பெயர்</font>
                      </td>
                      <td width={237} colSpan={2}>
                        <b>
                          <span lang="en-us">
                            <font size={2}>A.ஜெயகுமார்</font>
                          </span>
                        </b>
                      </td>
                      <td width={144}>
                        <font size={2}>தாய் பெயர்</font>
                      </td>
                      <td width={239}>
                        <b>
                          <span lang="en-us">
                            <font size={2}>R.ஜெயந்தி</font>
                          </span>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td width={146}>
                        <font size={2}>தந்தை வேலை</font>
                      </td>
                      <td width={237} colSpan={2}>
                        <b>
                          <span lang="en-us">
                            <font size={2}>Mechanic</font>
                          </span>
                        </b>
                      </td>
                      <td width={144}>
                        <font size={2}>தாயார் வேலை</font>
                      </td>
                      <td width={239}>
                        <b>
                          <span lang="en-us">
                            <font size={2}>Housewife</font>
                          </span>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td width={146} height={51}>
                        <font size={2}>உடன் பிறப்பு </font>
                        <font size={1}>(இவரையும் சேர்த்து)</font>
                      </td>
                      <td width={237} height={51} colSpan={2}>
                        <b>
                          <span lang="en-us">
                            <font size={2}>3</font>
                          </span>
                        </b>
                      </td>
                      <td width={144} height={51}>
                        <font size={2}>
                          ஆண்{" "}
                          <span lang="en-us">
                            : <b>1</b>
                          </span>
                        </font>
                      </td>
                      <td width={239} height={51}>
                        <font size={2}>
                          பெண்
                          <span lang="en-us">
                            {" "}
                            :<b>2</b>
                          </span>
                        </font>
                      </td>
                    </tr>
                    <tr>
                      <td width={146}>
                        <font size={2}>திருமணமானவர்</font>
                      </td>
                      <td width={237} colSpan={2}>
                        <b>
                          <span lang="en-us">
                            <font size={2}>0</font>
                          </span>
                        </b>
                      </td>
                      <td width={144}>
                        <font size={2}>ஆண்</font>
                        <span lang="en-us">
                          &nbsp; : <b />
                        </span>
                      </td>
                      <td width={239}>
                        <font size={2}>
                          பெண்
                          <span lang="en-us">
                            :<b />
                          </span>
                        </font>
                      </td>
                    </tr>
                    <tr>
                      <td width={146}>
                        <font size={2}>இருப்பிடம்</font>
                      </td>
                      <td width={237} colSpan={2}>
                        <b>
                          <span lang="en-us">
                            <font size={2}>சென்னை</font>
                          </span>
                        </b>
                      </td>
                      <td width={144}>
                        <font size={2}>மாவட்டம்</font>
                      </td>
                      <td width={239}>
                        <b>
                          <span lang="en-us">
                            <font size={2}>சென்னை</font>
                          </span>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td width={146}>
                        <font size={2}>குல தெய்வம்</font>
                      </td>
                      <td width={492} colSpan={4}>
                        <b>
                          <span lang="en-us">
                            <font size={2} />
                          </span>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td width={146}>
                        <font size={2}>சீர் வருசை</font>
                      </td>
                      <td width={237} colSpan={2}>
                        <b>
                          <span lang="en-us">
                            <font size={2}>நேரில்</font>
                          </span>
                        </b>
                      </td>
                      <td width={144}>
                        <font size={2}>எதிர்பார்ப்பு</font>
                      </td>
                      <td width={239}>
                        <b>
                          <span lang="en-us">
                            <font size={2}>10th,12th,ITI,டிப்ளமோ,டிகிரி</font>
                          </span>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td width={146}>
                        <font size={2}>சொத்துக்கள்</font>
                      </td>
                      <td width={492} colSpan={4}>
                        <b>
                          <span lang="en-us">
                            <font size={2}>சொந்தவீடு</font>
                          </span>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td width={146}>
                        <font size={2}>நட்சத்திரம்</font>
                      </td>
                      <td width={113}>
                        <b>
                          <span lang="en-us">
                            <font size={2}>சதயம்</font>
                          </span>
                        </b>
                      </td>
                      <td width={108}>
                        <font size={2}>பாதம் : </font>
                      </td>
                      <td width={144}>
                        <font size={2}>
                          ராசி&nbsp;:&nbsp;<b>கும்பம்</b>{" "}
                        </font>
                      </td>
                      <td width={239}>
                        <span lang="en-us">
                          <font size={2}>
                            லக்னம் : <b />
                          </font>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td width={146}>
                        <font size={2}>திசை இருப்பு</font>
                      </td>
                      <td width={237} colSpan={2}>
                        <b>
                          <span lang="en-us">
                            <font size={2} />
                          </span>
                        </b>
                      </td>
                      <td width={144}>
                        <font size={2}>வருடம்</font>
                      </td>
                      <td width={239}>
                        <b>
                          <span lang="en-us">
                            <font size={2} />
                          </span>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td width={146}>
                        <font size={2}>மாதம்</font>
                      </td>
                      <td width={237} colSpan={2}>
                        <b>
                          <span lang="en-us">
                            <font size={2} />
                          </span>
                        </b>
                      </td>
                      <td width={144}>
                        <font size={2}>
                          நா<span lang="ta">ள்</span>
                        </font>
                      </td>
                      <td width={239}>
                        <b>
                          <span lang="en-us">
                            <font size={2} />
                          </span>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td width={766} colSpan={5}>
                        <p align="center">
                          <font size={2} face="Tahoma">
                            <span lang="ta">
                              இது வெற்றி திருமண தகவல் மையத்தில் எடுக்கப்பட்ட
                              ஜாதகம்
                            </span>
                          </font>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td width={618} colSpan={5}>
                        <table
                          border={0}
                          cellPadding={5}
                          cellSpacing={0}
                          width="100%"
                          height={151}
                        >
                          <tbody>
                            <tr>
                              <td width="50%">
                                <Table className="table-bordered">
                                  <tbody>
                                    <tr height={40}>
                                      <td
                                        width={75}
                                        align="center"
                                        valign="middle"
                                      >
                                        <span className="textstyle">
                                          சனி கே
                                        </span>
                                      </td>
                                      <td
                                        width={75}
                                        align="center"
                                        valign="middle"
                                      >
                                        <span className="textstyle" />
                                      </td>
                                      <td
                                        width={75}
                                        align="center"
                                        valign="middle"
                                      >
                                        <span className="textstyle" />
                                      </td>
                                      <td
                                        width={75}
                                        align="center"
                                        valign="middle"
                                      >
                                        <span className="textstyle" />
                                      </td>
                                    </tr>
                                    <tr height={40}>
                                      <td
                                        width={75}
                                        align="center"
                                        valign="middle"
                                      >
                                        <span className="textstyle">ல</span>
                                      </td>
                                      <td
                                        width={75}
                                        align="center"
                                        valign="middle"
                                        colSpan={2}
                                        rowSpan={2}
                                      >
                                        <h4>ராசி</h4>
                                      </td>
                                      <td
                                        width={75}
                                        align="center"
                                        valign="middle"
                                      >
                                        <span className="textstyle" />
                                      </td>
                                    </tr>
                                    <tr height={40}>
                                      <td
                                        width={75}
                                        align="center"
                                        valign="middle"
                                      >
                                        <span className="textstyle">செ சு</span>
                                      </td>
                                      <td
                                        width={75}
                                        align="center"
                                        valign="middle"
                                      >
                                        <span className="textstyle">சந்</span>
                                      </td>
                                    </tr>
                                    <tr height={40}>
                                      <td
                                        width={75}
                                        align="center"
                                        valign="middle"
                                      >
                                        <span className="textstyle">
                                          சூ வி பு
                                        </span>
                                      </td>
                                      <td
                                        width={75}
                                        align="center"
                                        valign="middle"
                                      >
                                        <span className="textstyle" />
                                      </td>
                                      <td
                                        width={75}
                                        align="center"
                                        valign="middle"
                                      >
                                        <span className="textstyle" />
                                      </td>
                                      <td
                                        width={75}
                                        align="center"
                                        valign="middle"
                                      >
                                        <span className="textstyle">ரா</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </td>
                              <td width="50%">
                                <Table className="table-bordered">
                                  <tbody>
                                    <tr height={40}>
                                      <td
                                        width={75}
                                        align="center"
                                        valign="middle"
                                      >
                                        <span className="textstyle">
                                          செ கே சனி
                                        </span>
                                      </td>
                                      <td
                                        width={75}
                                        align="center"
                                        valign="middle"
                                      >
                                        <span className="textstyle" />
                                      </td>
                                      <td
                                        width={75}
                                        align="center"
                                        valign="middle"
                                      >
                                        <span className="textstyle">ல</span>
                                      </td>
                                      <td
                                        width={75}
                                        align="center"
                                        valign="middle"
                                      >
                                        <span className="textstyle">வி</span>
                                      </td>
                                    </tr>
                                    <tr height={40}>
                                      <td
                                        width={75}
                                        align="center"
                                        valign="middle"
                                      >
                                        <span className="textstyle" />
                                      </td>
                                      <td
                                        width={75}
                                        align="center"
                                        valign="middle"
                                        colSpan={2}
                                        rowSpan={2}
                                      >
                                        <h4>அம்சம்</h4>
                                      </td>
                                      <td
                                        width={75}
                                        align="center"
                                        valign="middle"
                                      >
                                        <span className="textstyle" />
                                      </td>
                                    </tr>
                                    <tr height={40}>
                                      <td
                                        width={75}
                                        align="center"
                                        valign="middle"
                                      >
                                        <span className="textstyle" />
                                      </td>
                                      <td
                                        width={75}
                                        align="center"
                                        valign="middle"
                                      >
                                        <span className="textstyle" />
                                      </td>
                                    </tr>
                                    <tr height={40}>
                                      <td
                                        width={75}
                                        align="center"
                                        valign="middle"
                                      >
                                        <span className="textstyle" />
                                      </td>
                                      <td
                                        width={75}
                                        align="center"
                                        valign="middle"
                                      >
                                        <span className="textstyle">
                                          சூ சந்
                                        </span>
                                      </td>
                                      <td
                                        width={75}
                                        align="center"
                                        valign="middle"
                                      >
                                        <span className="textstyle">பு</span>
                                      </td>
                                      <td
                                        width={75}
                                        align="center"
                                        valign="middle"
                                      >
                                        <span className="textstyle">சு கே</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <span
          style={{
            opacity: "0.1",
            fontSize: "30px",
            position: "absolute",
            left: "50px",
            top: "300px",
            transform: "rotate(20deg)",
          }}
        >
          வெற்றி திருமண தகவல் மையம்
        </span>
        <span
          style={{
            opacity: "0.1",
            fontSize: "30px",
            position: "absolute",
            left: "250px",
            top: "600px",
            transform: "rotate(20deg)",
          }}
        >
          வெற்றி திருமண தகவல் மையம்
        </span>
        <span
          style={{
            opacity: "0.1",
            fontSize: "30px",
            position: "absolute",
            left: "100px",
            top: "950px",
            transform: "rotate(10deg)",
          }}
        >
          வெற்றி திருமண தகவல் மையம்
        </span>
      </div>
    </div>
  )
}

export default Print
