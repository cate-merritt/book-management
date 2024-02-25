import { NavLink } from "react-router-dom"

const Header = () => {

  const navigation = [
    { path: '/', name: 'View List' },
    { path: '/add', name: 'Add Item' },
  ]

  return (
    <header>
      <h1>Your Favorite Books</h1>
      <nav>
        {navigation.map(nav => (
          <NavLink
            key={nav.name}
            to={nav.path}
          >
            {nav.name}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header