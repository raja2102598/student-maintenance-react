import React, { useState } from "react"
import NavBar from "./NavBar"
import axios from "axios"

function GetStudent() {
  const [id, setid] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [marks, setMarks] = useState("")
  const [grade, setGrade] = useState("")
  const [isSuccess, setisSuccess] = useState(false)

  const getStudentDb = (e) => {
    setIsLoading(true)
    e.preventDefault()
    axios
      .get(`http://localhost:8080/StudentManagement/getStudent/${id}`)
      .then((res) => {
        console.log(res)
        if (res.data.statusCode == 200) {
          setEmail(res.data.studentBean.email)
          setName(res.data.studentBean.name)
          setMarks(res.data.studentBean.marks)
          setGrade(res.data.studentBean.grade)
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
      <NavBar value="getStudent"></NavBar>
      <div className="container">
        <p className="display-4 text-center p-3">Get Student</p>
        <form onSubmit={getStudentDb}>
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
          {!isLoading ? (
            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Get Student Details
            </button>
          ) : (
            <button
              className="btn btn-dark btn-lg btn-block"
              type="button"
              disabled
            >
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </button>
          )}
        </form>
        {isSuccess ? (
          <form>
            <h4 className="text-center m-4">Student Details</h4>
            <div className="form-group">
              <label htmlFor="email">Email address </label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                readOnly
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label htmlFor="marks">Marks</label>
              <input
                type="number"
                className="form-control"
                id="marks"
                step="any"
                required
                readOnly
                placeholder="marks"
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                readOnly
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="grade">Grade</label>
              <input
                className="form-control"
                id="grade"
                value={grade}
                type="text"
                required
                readOnly
                onChange={(e) => {
                  setGrade(e.target.value)
                  console.log(e.target.value)
                }}
              ></input>
            </div>
          </form>
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

export default GetStudent
