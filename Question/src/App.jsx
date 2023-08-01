import { useState } from 'react'

import './App.css'






function App() {
  const[complete, setComplete] = useState (false)
    const [question, setQuestion]= useState([ {question: "Which British actor played Batman in 2022's reboot directed by Matt Reeves?"},
    {answer:"a thing that is said, we knocked and entered without waiting for an answer"},
    {question: "Which British actor played Batman in 2022's reboot directed by Matt Reeves?"},
    {answer:"a thing that is said, we knocked and entered without waiting for an answer"},
    {question: "Which British actor played Batman in 2022's reboot directed by Matt Reeves?"},
    {answer:"a thing that is said, we knocked and entered without waiting for an answer"},
    {question: "Which British actor played Batman in 2022's reboot directed by Matt Reeves?"},
    {answer:"a thing that is said, we knocked and entered without waiting for an answer"},
    
  ])

function update() {
console.log('update')
  }

  function markComplete  (taskId) {
    const updateList = question.map((item)=>{
      item.id === taskId ? { ...item, completed: true } : item
    })
    setQuestion(updateList)
  }

    
    

  return (
    <>
    <div>
      {question.map((item,index)=>(
         <div key={index}>
         <h1 onClick={update}>{item.question }</h1>
         <h2>{item.answer}</h2>
       </div>

      ))}
    </div>
   
    </>
  )
}

export default App
