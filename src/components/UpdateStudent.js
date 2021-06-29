import axios from "axios"
import React, { useState } from "react"
import NavBar from "./NavBar"

function UpdateStudent() {
  const [id, setid] = useState("")
  const [email, setemail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const [isSuccess, setisSuccess] = useState(false)

  const updateStudentDb = (e) => {
    setIsLoading(true)
    e.preventDefault()
    axios
      .put("http://localhost:8080/StudentManagement/updateStudentEmail", {
        userid: id,
        email: email,
      })
      .then((res) => {
        console.log(res)
        if (res.data.statusCode == 200) {
          setisSuccess(true)
        } else {
          setisSuccess(false)
          document.getElementById("falseCondition").style.visibility = "visible"
        }
        setIsLoading(false)
      })
      .catch((err) => {
        setIsLoading(false)
        console.log(err)
      })
  }
  return (
    <>
      <NavBar value="updateStudent"></NavBar>
      <div className="container">
        <p className="display-4 text-center p-3">Update Student</p>
        <form onSubmit={updateStudentDb}>
          <div className="form-group">
            <label htmlFor="id">
              Student Id <span className="text-danger">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              id="id"
              required
              placeholder="Student Id"
              value={id}
              onChange={(e) => setid(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          {!isLoading ? (
            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Update Student Details
            </button>
          ) : (
            <button
              className="btn btn-btn-dark btn-lg btn-block"
              type="button"
              disabled
            >
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Updating
            </button>
          )}
        </form>
        {isSuccess ? (
          <h4 className="text-center text-success p-3">
            Student Details Updated
          </h4>
        ) : (
          <h4
            className="text-center text-danger p-3"
            id="falseCondition"
            style={{ visibility: "hidden" }}
          >
            No Matching Student Found For Id : {id}
          </h4>
        )}
      </div>
    </>
  )
}

export default UpdateStudent
