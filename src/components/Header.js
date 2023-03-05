import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  const onClick=()=>{
    console.log("Click");
  }
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick}/>
    </header>
  )
}

//default prop type
Header.defaultProps={
  title:'Task Tracker'
}

//css in js
// const headingStyle={
//   color:'red',
// }

// define the props types
Header.propTypes={
  title: PropTypes.string.isRequired,
}

export default Header