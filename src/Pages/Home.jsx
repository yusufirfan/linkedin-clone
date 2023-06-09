import React, { useEffect, useState } from 'react'
import HomeComponent from '../components/HomeComponent'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from '../firebaseConfig'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/common/Loader/Loader'

export default function Home() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (res)=>{
      if(!res?.accessToken){
        navigate('/')
      } else{
        setLoading(false)
      }
    })
  }, [])
  
  return loading ? <Loader/> : <HomeComponent/>
}
