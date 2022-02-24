import React, { useState, useEffect, ChangeEvent } from 'react'
import { getAuth, updateProfile, User } from 'firebase/auth'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Profile = () => {
  const [user, setUser] = useState<User | null>(null)

  const auth = getAuth()
  const [changeDetails, setChangeDetails] = useState(false)

  const [formData, setFormData] = useState({
    name: auth.currentUser?.displayName,
    email: auth.currentUser?.email,
  })

  const { name, email } = formData

  const navigate = useNavigate()

  const onLogout = () => {
    auth.signOut()
    navigate('/')
  }

  const onSubmit = async () => {
    try {
      if (auth.currentUser?.displayName !== name) {
        await updateProfile(auth.currentUser!, {
          displayName: name,
        })

        const userRef = doc(db, 'users', auth.currentUser!.uid)

        await updateDoc(userRef, {
          name,
        })
      }
    } catch (error) {
      console.info(error)
      toast.error('Coul not update profile details')
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">My Profile</p>
        <button type="button" className="logOut" onClick={onLogout}></button>
      </header>
    </div>
  )
}

export default Profile
