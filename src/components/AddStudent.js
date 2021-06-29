import React, { useState } from "react"
import NavBar from "./NavBar"
import axios from "axios"

function AddStudent() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [marks, setMarks] = useState("")
  const [grade, setGrade] = useState("")

  const [isLoading, setIsLoading] = useState(false)

  const addStudentDb = (e) => {
    setIsLoading(true)
    e.preventDefault()
    axios
      .post("http://localhost:8080/StudentManagement/addStudent", {
        email: email,
        marks: marks,
        name: name,
        grade: grade,
      })
      .then((res) => {
        console.log(res)
        alert(res.data.description)
        setIsLoading(false)
      })
      .catch((err) => {
        setIsLoading(false)
        alert(err.data.description)
        console.log(err)
      })
  }
  return (
    <>
      <NavBar value="addStudent" />
      <div className="container">
        <p className="display-4 text-center p-3" style={{ color: "#A600FF" }}>
          Add Student
        </p>
        <form onSubmit={addStudentDb}>
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
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="marks">
              Marks <span className="text-danger">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              id="marks"
              step="any"
              required
              placeholder="marks"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
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
          <div className="form-group">
            <label htmlFor="grade">
              Grade <span className="text-danger">*</span>
            </label>
            <select
              className="form-control"
              id="grade"
              value={grade}
              required
              onChange={(e) => {
                setGrade(e.target.value)
                console.log(e.target.value)
              }}
            >
              <option value="" disabled selected hidden>
                Select Grade
              </option>
              <option value="A+">A+</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">Fail</option>
            </select>
          </div>
          {!isLoading ? (
            <button type="submit" className="btn btn-info btn-lg btn-block">
              Add Student Details
            </button>
          ) : (
            <button
              className="btn btn-info btn-lg btn-block"
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
      </div>
    </>
  )
}

export default AddStudent
