import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList.js";

class App extends Component {
  counter = 7;
  state = {
    tasks: [
      {
        id: 0,
        text: "Zagrać w wiedzmina 3",
        date: "2018-02-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "Ugotować obiad",
        date: "2018-02-02",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "Zrobić ciasto",
        date: "2018-12-02",
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    // pierwszy sposób
    // const tasks = [...this.state.tasks] // tworzenie kopii - rest operator
    // const index = tasks.findIndex(task => task.id === id)
    // tasks.splice(index, 1)
    // this.setState({
    //   tasks,
    // })

    // drugi sposób
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };

  changeTaskStatus = (id) => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });

    this.setState({
      tasks,
    });
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text, // z inputa
      date: date, // z inputa
      important: important, // z inputa
      active: true,
      finishDate: null,
    };

    this.counter++;
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));

    return true;
  };

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
