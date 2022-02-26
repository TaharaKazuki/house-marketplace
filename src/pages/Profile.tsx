import React, { useState, ChangeEvent, useEffect } from 'react'
import { getAuth, updateProfile, User } from 'firebase/auth'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Profile = () => {
  const auth = getAuth()
  const [formData, setFormData] = useState({
    name: auth.currentUser!.displayName,
    email: auth.currentUser!.email,
  })

  const navigate = useNavigate()

  const onLogout = () => {
    auth.signOut()
    navigate('/')
  }

  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">My Profile</p>
        <button type="button" className="logOut" onClick={onLogout}>
          Logout
        </button>
      </header>
    </div>
  )
}

export default Profile
