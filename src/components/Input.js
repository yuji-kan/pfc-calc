import React from "react";
// import React, { useState } from "react";

function Input(props) {
  return (
    <div className="form-input">
      <div className="form-input">
        <label
          htmlFor={props.name}
          className={props.required === true ? "required" : ""}
        >
          {props.title}
        </label>
        <input
          type={props.type}
          name={props.name}
          id={props.name}
          value={props.value}
        />
      </div>
    </div>
  );
}

// 計算後ほど実装
//   const [calorie, calcCaroie] = useState();
//   const handleCalcCaroie = event => {
//     calcCaroie(event.target.value * props.coefficient);
//   };
//   return (
//     <div className="form-input">
//       <div className="form-input">
//         <label htmlFor={props.name} className="required">
//           {props.title}
//         </label>
//         {props.coefficient !== 0 ? (
//           <input
//             type={props.type}
//             name={props.name}
//             id={props.name}
//             onChange={handleCalcCaroie}
//           />
//         ) : (
//           <input type={props.type} name={props.name} id={props.name} />
//         )}
//         <p className="mytext">{calorie}</p>
//       </div>
//     </div>
//   );
// }
// Input.defaultProps = {
//   coefficient: 0
// };
export default Input;
