import React ,{useState} from 'react';
import './App.css'
//import tasks from "./tasks.json" assert {type: "json"}



function App() {
  const [taskInput,setTaskInput]= useState('');
  const [tasks,setTasks] = useState([])
  
  console.log(taskInput)

  const addToDo = (e) => {
    e.preventDefault();
    //creates new array with the existing tasks
    setTasks([...tasks,taskInput]);
    //reset task input as empy string
    setTaskInput('')
  }

  const removeItem = (e) => {
    e.preventDefault();
    const id= e.target.getAttribute('id');
    var element = document.getElementById(id);
    element.parentNode.removeChild(element);
  };
  const completeItem = (e) => {
    e.preventDefault();
    const id = e.target.getAttribute('id');
    var element = document.getElementById(id);
    if(element.classList.contains("strike")){
      element.classList.remove("strike")
    }
    else{
      element.classList.add("strike")
    }
  }


  return(
    <>
      <h1>My To Do List</h1>
      <form onSubmit={(e)=>addToDo(e)}>
        <input id="add-task" type="text" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} ></input>
        <button id= "submit">Submit</button>
      </form>
      <ul id="list">
        {tasks.map((task, index)=>(
          <li key={index} onClick={(e)=>completeItem(e)} id={index}>{task}      <button id={index} onClick={(e)=>removeItem(e)}>Del</button></li>
        ))}
      </ul>
    </>
  )

}


export default App
