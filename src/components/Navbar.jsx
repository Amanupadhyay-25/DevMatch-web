import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const user = useSelector((store)=>store.user);
  console.log(user);
  return (
    <div>
      <div className="navbar bg-base-300 ">
  <div className="flex-1">
  <Link to="/" className="btn btn-ghost text-xl">❤️ Ritvik </Link>
  </div>
  {user && <div className="flex gap-2">
    <div>Welcome , {user.firstName}</div>
    <div className="dropdown dropdown-end mx-5">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between" >
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>}
</div>
    </div>
  )
}

export default Navbar
