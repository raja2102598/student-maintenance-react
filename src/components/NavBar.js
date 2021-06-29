import React, { useEffect } from "react"
import { Link } from "react-router-dom"

function NavBar(props) {
  useEffect(() => {
    if (props.value != null) {
      var element = document.getElementById(props.value)
      element.classList = "nav-link active"
    }
  }, [props.value])
  return (
    <>
      <nav
        className="navbar navbar-expand-lg sticky-top navbar-dark"
        style={{ backgroundColor: "#8934B7" }}
      >
        <Link className="navbar-brand" to="/">
          Student Maintainence
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/addStudent" id="addStudent">
              Add Student
            </Link>
            <Link className="nav-link" to="/getStudent" id="getStudent">
              Get Student
            </Link>
            <Link className="nav-link" to="/deleteStudent" id="deleteStudent">
              Delete Student
            </Link>
            <Link className="nav-link" to="/updateStudent" id="updateStudent">
              Update Student
            </Link>
            <Link className="nav-link" to="/aggregateMarks" id="marks">
              Aggregate Marks
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
