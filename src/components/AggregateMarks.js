import axios from "axios"
import React, { useState } from "react"
import NavBar from "./NavBar"

function AggregateMarks() {
  const [id, setid] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [marks, setMarks] = useState("")
  const [grade, setGrade] = useState("")
  const [mark1, setMark1] = useState("")
  const [mark2, setMark2] = useState("")
  const [mark3, setMark3] = useState("")
  const [mark4, setMark4] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const [isSuccess, setisSuccess] = useState(false)

  const addStudentAggregateMarksDb = (e) => {
    setIsLoading(true)
    e.preventDefault()
    axios
      .post(
        `http://localhost:8080/StudentManagement/marks/${mark1}/${mark2}/${mark3}/${mark4}/`,
        {
          userid: id,
          email: email,
          name: name,
        }
      )
      .then((res) => {
        console.log(res)
        if (res.data.statusCode == 200) {
          alert("Added")
          setisSuccess(true)
          setGrade(res.data.studentBean.grade)
          setMarks(res.data.studentBean.marks)
        } else {
          alert(res.data.description)
          setisSuccess(false)
        }
        setIsLoading(false)
      })
      .catch((err) => {
        setIsLoading(false)
        alert("Some error occured")
        setisSuccess(false)
        console.log(err)
      })
  }
  return (
    <>
      <NavBar value="marks"></NavBar>
      <div className="container">
        <p className="display-4 text-center p-3">Add Student</p>
        <form onSubmit={addStudentAggregateMarksDb}>
          <div className="form-group">
            <label htmlFor="id">
              Student Id <span className="text-danger">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              id="id"
              required
              placeholder="id"
              value={id}
              onChange={(e) => setid(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email Address <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">
              Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-row" style={{ marginBottom: "30px" }}>
            <div className="col-3">
              <label htmlFor="q1">
                Q1 Marks <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Q1 Marks"
                step="any"
                required
                value={mark1}
                max={10}
                onChange={(e) => setMark1(e.target.value)}
              />
            </div>
            <div className="col-3">
              <label htmlFor="q1">
                Q2 Marks <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Q2 Marks"
                step="any"
                required
                max={10}
                value={mark2}
                onChange={(e) => setMark2(e.target.value)}
              />
            </div>
            <div className="col-3">
              <label htmlFor="q1">
                Q3 Marks <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Q3 Marks"
                step="any"
                required
                max={10}
                value={mark3}
                onChange={(e) => setMark3(e.target.value)}
              />
            </div>
            <div className="col-3">
              <label htmlFor="q1">
                Q4 Marks <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Q4 Marks"
                step="any"
                required
                max={10}
                value={mark4}
                onChange={(e) => setMark4(e.target.value)}
              />
            </div>
          </div>
          {!isLoading ? (
            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Add Student Details
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
            <h4 className="text-center text-primary m-3">
              Student Marks And Grade Details
            </h4>
            <div className="form-group">
              <label htmlFor="grade">Grade</label>
              <input
                type="text"
                className="form-control"
                id="grade"
                readOnly
                placeholder="Grade"
                value={grade}
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
              />
            </div>
          </form>
        ) : (
          ""
        )}
      </div>
    </>
  )
}

export default AggregateMarks
