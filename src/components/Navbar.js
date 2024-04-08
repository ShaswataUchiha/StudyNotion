import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import { toast } from 'react-hot-toast'

const Navbar = (props) => {

  let isLogedIn = props.isLogedIn
  let setisLogedIn = props.setisLogedIn
    
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
        <Link to="/">
            <img src={logo} alt="Logo" height={32} width={160} loading="lazy"/>
        </Link>

        <nav >
            <ul className="flex gap-x-6 text-white ">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        <div className="flex items-center gap-x-4">
            { !isLogedIn &&
                <Link to="/login">
                    <button
                    className='bg-richblack-600 text-white px-[8px] py-[12px] rounded-[8px] border border-richblack-700'
                     >Log-in</button>
                </Link>
            }
            { !isLogedIn &&
                <Link to="/signup"
                >
                    <button
                    className='bg-richblack-600 text-white px-[8px] py-[12px] rounded-[8px] border border-richblack-700'
                    >Sign-up</button>
                </Link>
            }
            {   isLogedIn &&
                <Link to="/">
                    <button
                    className='bg-richblack-600 text-white px-[8px] py-[12px] rounded-[8px] border border-richblack-700'
                    onClick={ () => {
                        setisLogedIn(false)
                        toast.success("Logged Out")
                    }}
                    >Log-out</button>
                </Link>
            }
            {   isLogedIn &&
                <Link to="/dashboard">
                    <button
                    className='bg-richblack-600 text-white px-[8px] py-[12px] rounded-[8px] border border-richblack-700'
                    >Dashboard</button>
                </Link>
            }
        </div>

    </div>
  )
}

export default Navbar