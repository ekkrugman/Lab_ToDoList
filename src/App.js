
import './App.css';
import {useState} from "react";

function App() {
  // useStates
  const [userInput, setUserInput]= useState("");
  const [taskList, setTaskList] = useState([]);

//function to delete at a specific key
function deleteTask(key){
  setTaskList(taskList.filter((myList) => myList.key !== key));
}
  // function to add the user input values to a list
  function addToList(){
    if(userInput.trim() !== ""){
  const myList = {
    key: Date.now(), 
    value : userInput
  };
  setTaskList(elements => [...elements,myList]);
  setUserInput("");
}
  }
  //App return:
  return (
//set up page with title, input box and add button
    <div className = "App">
    <h1 id = "App-header" className="App-header">ToDo List</h1>

    <div>
    <br></br>
   <input id = "inputBox" type = "text" className = "userInputBox" value = {userInput} placeholder='add your task' onChange={(e)=> setUserInput(e.target.value)}>
   </input>
   </div>

  <div> 
  <br></br>
  <button id = "submitButton" type = "submit" onClick = {() => addToList()}>Add</button>
  </div>  
  <br></br>

{/* list of tasks */}
  <ul id = "taskList">
  {taskList.map(myList =>{
    // display the list
     return(
    <ol key ={myList.key}>{myList.value} &nbsp;
 <button id = "removeButton" onClick = {() => deleteTask(myList.key)}>X</button></ol>
     )
   })}
  </ul>

 </div>

  );
}

export default App;
