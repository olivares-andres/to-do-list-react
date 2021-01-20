import { Fragment, useRef, useState } from "react";
import React from 'react';
import Task from "./components/task";

function App() {

  let insertTask = useRef();
  const [task, setTask] = useState([]);

  const addTask = (e) => {
    if (e.keyCode === 13 && e.target.value !== "") {
      const newState = task.concat({ label: e.target.value, done: false });
      setTask(newState)
      insertTask.current.value = "";
    }
  }

  const deleteTask = (index) => {
    console.log(index);
    task.splice(index, 1);
    setTask([...task]);
  }

  return (
    <Fragment>
      <div className="container ">
        <div className="card w-75 ">
          <div className="card-header d-flex justify-content-center">
            <h1>To Do List</h1>
          </div>
          <div className="card-body">
            <ul class="list-group">
              <input ref={insertTask} type="text" placeholder="Insert task here..." onKeyDown={(e) => addTask(e)} />
              {
                task.length <=0 ? 
                <div><h2>No task yet</h2></div> :        
                 task.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="list-group ">
                        <Task
                          task={item.label}
                          index={index}
                          deleteTask={deleteTask}
                        />
                      </div>
                    </div>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
