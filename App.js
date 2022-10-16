import {useState} from 'react'
import './App.css';
import Form from './components/Form'
import Display from './components/Display'

function App() {
   const [data, setData] = useState([
   ])
   const saveData =(userData) =>{
    setData([...data,userData])

   }
   const DeletJob = (name) =>{
    const enter=data.filter((myData) =>{
      if(myData.name === name){
        return true
      }
      else{
        return false
      }
    })
    setData(enter)
    event.preventDefault();
   }
  
  return (
    <div className="App">
      
      
      <Form myFunction={saveData}  />
        <Display myData={data} jobsDelete={DeletJob}/>
  
      
    </div>
    
  );
}

export default App;
