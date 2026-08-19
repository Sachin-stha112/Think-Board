import React from 'react'
import { Link } from 'react-router'
import {PlusIcon, LogOutIcon} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

const Navbar = () => {
  const { user, logout } = useAuth();

  return ( <header className='bg-base-300 border-b border-base-content/10' >
    <div className="mx-auto max-w-6xl p-4">
        <div className="flex justify-between items-center">
            <Link to="/" className='text-3xl font-bold text-primary font-mono tracking-tight'>
                ThinkBoard
            </Link>
            <div className="flex items-center gap-4">
                <span className="text-sm text-base-content/60 hidden sm:block">
                  {user?.name}
                </span>
                <Link to={"/create"} className='btn btn-primary'>
                    <PlusIcon className="size-5"/>
                    <span>New Note</span>
                </Link>
                <button onClick={logout} className="btn btn-ghost btn-sm">
                    <LogOutIcon className="size-5"/>
                </button>
            </div>
        </div>
    </div>
  </header>
    
  )
}

export default Navbar
