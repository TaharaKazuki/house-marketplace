import React, { useState, useEffect } from 'react'
import { getAuth, User } from 'firebase/auth'

const Profile = () => {
  const [user, setUser] = useState<User | null>(null)

  const auth = getAuth()

  useEffect(() => {
    setUser(auth.currentUser!)
  }, [auth.currentUser])

  return user ? <h1>{user.displayName}</h1> : <p> Not logged In</p>
}

export default Profile
