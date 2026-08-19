import React from 'react'
import {Route,Routes, Navigate} from "react-router"
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import { useAuth } from './contexts/AuthContext'
import { Loader2Icon } from 'lucide-react'

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2Icon className="animate-spin size-10" />
      </div>
    );
  }

  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <div className="relative h-full w-full">
  <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/" element={<ProtectedRoute><HomePage/></ProtectedRoute>} />
        <Route path="/create" element={<ProtectedRoute><CreatePage/></ProtectedRoute>} />
        <Route path="/note/:id" element={<ProtectedRoute><NoteDetailPage/></ProtectedRoute>} />
      </Routes>
    </div>
  )
}

export default App
