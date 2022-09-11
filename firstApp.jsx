import  PropTypes  from "prop-types";


export const FirstApp = ({ title }) => {


  return (
    <>
     <h2>{ title }</h2>
     
    </>
    
  )
}


FirstApp.propTypes = {

  title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {

  title: ' No hay titulo',
  
}
