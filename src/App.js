import React, {useState} from 'react'
// import './App.css';
import Home from './Homepage/Home'
import {  Routes, Route} from 'react-router-dom'
import Color from './Homepage/Color'
import ColorPage from './Homepage/ColorPage';
import  {useNavigate} from "react-router-dom";

  const colorLists = [
    {colorName: "red", colorHex: "#FF0000"},
    {colorName: "green", colorHex: "#008000"},
    {colorName: "blue", colorHex: "#0000FF"}                    
  ]
function App() {
  const [colorInput, setColorInput] = useState('');
  const [colorType,setColorType] = useState('')
  const [colorList,setColorList] = useState(colorLists)
  const navigate = useNavigate();

  const handleColorInput = (e) =>{
    setColorInput(e.target.value)
  }
  const handleColorType = (e) =>{
    setColorType(e.target.value)
  }
  const  handleSubmission= async(e) =>{
    e.preventDefault()
    const entries = [{colorName:colorInput, colorHex: colorType}]
    const records = entries.concat(colorList)

     setColorList(records) 
     navigate('/')    
 }
  return (
    <div className="App">
   
      <Routes>
      <Route path= '/' element= {<Home  colorList={colorList}/>}> </Route>
      <Route path= 'color' element= {<Color  colorType= {handleColorType} colorInput = {handleColorInput} handleSubmission ={handleSubmission} colorList={colorList}/>}> </Route>
      <Route path= "colorPage/:colorName/:colorHex" element= {<ColorPage  colorList={colorList}/>}> </Route>

      </Routes>
    </div>
  );
}

export default App;









// import React, {useState} from 'react'
// import './App.css';
// import Home from './Homepage/Home'
// import { Routes, Route} from 'react-router-dom'
// import Color from './Homepage/Color'
// import ColorPage from './Homepage/ColorPage';



   
// function App() {
//     const [ colorList,setColorList]= useState([ 
//       {colorName: "red", colorHex: "#FF0000"},
//       {colorName: "green", colorHex: "#008000"},
//       {colorName: "blue", colorHex: "#0000FF"}                    
//     ])
//     const addColorList = (enteredName, enteredColor) =>{
//       setColorList (prevColor =>{
//         const updatedColorList = [...prevColor]
//         updatedColorList.unshift ({ colorName: enteredName, colorHex: enteredColor})
//         return updatedColorList
//       }) 
//     }
  
//   return (
//     <div className="App">
   
//       <Routes>
//       <Route path= '/' element= {<Home items = {colorList} />}> </Route>
//       <Route path= 'color' element= {<Color  items = {colorList} onAddColor={addColorList }/>}> </Route>
//       <Route path= "colorPage/:colorName/:colorHex" element= {<ColorPage  items={colorList}/>}> </Route>

//       </Routes>
//     </div>
//   );
// }

// export default App;
