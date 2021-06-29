import "./App.css"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import AddStudent from "./components/AddStudent"
import GetStudent from "./components/GetStudent"
import DeleteStudent from "./components/DeleteStudent"
import UpdateStudent from "./components/UpdateStudent"
import AggregateMarks from "./components/AggregateMarks"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/addStudent" component={AddStudent}></Route>
        <Route path="/getStudent" component={GetStudent}></Route>
        <Route path="/deleteStudent" component={DeleteStudent}></Route>
        <Route path="/updateStudent" component={UpdateStudent}></Route>
        <Route path="/aggregateMarks" component={AggregateMarks}></Route>
      </Switch>
    </Router>
  )
}

export default App
