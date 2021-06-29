import React from "react"
import NavBar from "./NavBar"

function Home() {
  return (
    <>
      <NavBar></NavBar>
      <div className="container-fluid">
        <div
          className="text-center"
          style={{
            marginTop: "18%",
          }}
        >
          <h3 className="display-4">
            Welcome To Student Maintenence Application
          </h3>
        </div>
      </div>
    </>
  )
}

export default Home
