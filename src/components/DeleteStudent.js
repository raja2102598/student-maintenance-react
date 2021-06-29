import axios from "axios"
import React, { useState } from "react"
import NavBar from "./NavBar"

function DeleteStudent() {
  const [id, setid] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const [isSuccess, setisSuccess] = useState(false)

  const deleteStudentDb = (e) => {
    setIsLoading(true)
    e.preventDefault()
    axios
      .delete(`http://localhost:8080/StudentManagement/removeStudent/${id}`)
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
      <NavBar value="deleteStudent"></NavBar>
      <div className="container">
        <p className="display-4 text-center p-3" style={{ color: "#A600FF" }}>
          Delete Student
        </p>
        <form onSubmit={deleteStudentDb}>
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
              min={0}
              onChange={(e) => setid(e.target.value)}
            />
          </div>
          {!isLoading ? (
            <button type="submit" className="btn btn-info btn-lg btn-block">
              Delete Student Details
            </button>
          ) : (
            <button
              className="btn btn-btn-info btn-lg btn-block"
              type="button"
              disabled
            >
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Deleting
            </button>
          )}
        </form>
        {isSuccess ? (
          <h4 className="text-center text-success p-3">
            Student Details Deleted
          </h4>
        ) : (
          <h4
            className="text-center text-danger p-3"
            id="falseCondition"
            style={{ visibility: "hidden" }}
          >
            No Student Found
          </h4>
        )}
      </div>
    </>
  )
}

export default DeleteStudent
