import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.route.scss'

const Navigation = () => {
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/sign-in'>
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
