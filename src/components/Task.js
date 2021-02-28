import React from "react";

const Task = (props) => {

  const importantStyle = {
    color: "red",
  };

  const { text, date, id, active, important, finishDate } = props.task;

  if (active) {
    return (
      <div className="task">
        <p>
          <strong style={important ? importantStyle : null}>{text}</strong> - do <span>{date} </span>
          <button onClick={() => props.change(id)}>Zostało zrobione</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString()
    return (
      <div>
         <p>
          <strong>{text}</strong> <em>(zrobić do {date}) </em> 
          <br/>
          - potwierdzenie wykonania <span>{finish}</span>
          <button onClick={() => props.delete(id)}>X</button>
        </p>

      </div>
    )
  }
};

export default Task;
