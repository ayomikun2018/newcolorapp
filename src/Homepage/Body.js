import React from 'react'
import { Link } from 'react-router-dom'
import './Body.css'
export default function Body({colorList}) {
   
    return (
        <div className="selection">
            <h2>Please Select a Color</h2>
            <div className= 'colorShow'>
            {colorList.map((color, index) => 
                <p key={index}><Link to={`/colorPage/${color.colorName}/${color.colorHex.substring(1).toUpperCase()}`}>{color.colorName}</Link></p>)} 
            </div>

        </div> 
        
    )
}










// import React from 'react'
// import { Link} from 'react-router-dom'
// export default function Body(props) {
//    const arr = [ 
//     {colorName: "red", colorHex: "#FF0000"},
//     {colorName: "green", colorHex: "#008000"},
//     {colorName: "blue", colorHex: "#0000FF"}                    
//   ]

//     return (
//         <div className="selection">
//             <div>
//                 <h2>Please Select a Color</h2>
//             </div>
//             {arr.map((color, index) => 
//                 <p key={index}><Link to={`/colorPage/${color.colorName}/${color.colorHex.substring(1).toUpperCase()}`}>{color.colorName}</Link></p>)}      
            
//         </div> 
        
//     )
// }