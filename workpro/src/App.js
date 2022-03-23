
import './App.css';
import Firsttask from './component/Task1/Firsttask';
import Secondtask from './component/Task2/Secondtask';
import Bargraph from './component/Task3/Bargraph';
import {Routes,Route,} from "react-router-dom";
import Navbar from './Navbar';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/task1' element={<Firsttask/>} />
      <Route path='/task2' element={<Secondtask/>} />
      <Route path='/task3' element={<Bargraph/>} />

    </Routes>
  
    </>
  );
}

export default App;
