
import React from 'react'
import './Color.css'
import {Link} from 'react-router-dom'


export default function Color({colorType, colorInput, handleSubmission, colorList}) {
   
    return (
        <div className= 'form-container'>
        <form className= 'form'>
            <div >
                <label >Enter a Color</label>
                <input   onChange={colorInput}></input>
            </div>
            <div>
                <label >Select Color</label>
                <input type= 'color' className= "bottom-input" onChange={colorType}></input>
            </div>
            <div>
                <button  type = 'submit' onClick={handleSubmission}>Add Color</button>
            </div>
            <p><Link to= '/'>Go back to Home</Link></p>

        </form>
         </div>

    )
}









// import React from 'react'
// import './Home.css'
// import {  useState } from 'react'
// import {Link} from 'react-router-dom'
// import  {useNavigate} from "react-router-dom"

// export default function Color(props) {
//     const [colorText, setColorText] = useState('');
//     const [colorValue,setColorValue] = useState('')
//     // const [assign,setAssign] = useState('')
//     const navigate = useNavigate();
  
//      const  submitHandler= async(e) =>{
//         e.preventDefault()
//        const colorData = {
//            newColor : colorText,
//            newHex : colorValue
//        }
//        console.log(colorData)
//          props.onAddColor(colorData)
//          navigate('/')
       
//      }
//       //i think we need to define a state on the home.js to backtrack the results we want to show on like 17 that function will be called and records will be passed to it as props.function(records)
     
//         // console.log(search)
//         // console.log(colorFace)


//     return (
//         <div className= 'Color-container'> 
//         <form  onSubmit={submitHandler}>
//             <div>
//                 <label >Enter a Color</label>
//                 <input   onChange={(e) => setColorText(e.target.value)}></input>
//             </div>
//             <div>
//                 <label >Select Color</label>
//                 <input type= 'color' onChange={(e) => setColorValue(e.target.value)}></input>
//             </div>
//             <div>
//                 <button type ='submit' >Add Color</button>
//             </div>
//             <p><Link to= '/'>Go back to Home</Link></p>

//         </form>
           
//         </div>
//     )
// }