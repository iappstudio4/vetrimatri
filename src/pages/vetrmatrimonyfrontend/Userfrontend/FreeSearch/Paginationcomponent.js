import React from "react"
import { Pagination, PaginationItem, PaginationLink } from "reactstrap"
import { useState } from "react"
import { isEmpty, map } from "lodash"

import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Table,
} from "reactstrap"
const Paginationcom = () => {
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(5)

  const handlePageClick = page => {
    setPage(page)
  }
  return (
    <div style={{ marginTop: "50px" }}>
      <Row>
        <Col lg="12">
          <Pagination className="pagination pagination-rounded justify-content-end mb-2">
            <PaginationItem disabled={page === 1}>
              <PaginationLink
                previous
                href="#"
                onClick={() => handlePageClick(page - 1)}
              />
            </PaginationItem>
            {map(Array(totalPage), (item, i) => (
              <PaginationItem active={i + 1 === page} key={i}>
                <PaginationLink onClick={() => handlePageClick(i + 1)} href="#">
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem disabled={page === totalPage}>
              <PaginationLink
                next
                href="#"
                onClick={() => handlePageClick(page + 1)}
              />
            </PaginationItem>
          </Pagination>
        </Col>
      </Row>
    </div>
  )
}

export default Paginationcom
