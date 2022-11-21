import React from 'react'

const NavLink  = ({categoryName, currentCategory, setCurrentCategory}) => {
  return (
    <div className={categoryName === currentCategory ? "nav-active" : "nav-deactive"}
    onClick={() => setCurrentCategory(categoryName)}
  >
    <h4>{categoryName}</h4>
  </div>
  )
}

export default NavLink 