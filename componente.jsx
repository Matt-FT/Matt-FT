import PropTypes  from "prop-types";
import { useState } from "react"; 


 


export const CounterApp = ({ value }) => {

  const [ counter, setCounter ] = useState( value );


  const Increase = () =>{
   setCounter(counter + 1)
  }

  const Decrease = () =>{
   setCounter(counter - 1)
  }

  const Reset = () =>{
    setCounter(value)
  }

  return (

    <>

     <h1>Counter App</h1>
     <h2>{ counter }</h2>
     
     <button onClick={ () =>{Increase()} }> +1 </button>
     <button onClick={ () =>{Decrease()} }> -1 </button>
     <button onClick={ () => {Reset()} }> Reset </button>

      <div className="nav">
        Hola soy un nav
      </div>
    </>

  )
}











CounterApp.propTypes = {
  
    value: PropTypes.number
 
}
