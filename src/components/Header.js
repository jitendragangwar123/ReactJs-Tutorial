import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <div>
      <h1 style={headingStyle}>{title}</h1>
    </div>
  )
}

//default prop type
Header.defaultProps={
  title:'Task Tracker'
}

const headingStyle={
  color:'red',
}
// define the props types
Header.propTypes={
  title: PropTypes.string.isRequired,
}



export default Header