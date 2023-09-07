import React, { useEffect } from 'react'
import { getUserProfile } from 'src/services/user.servie'

function Profile() {
  useEffect(()=>{
    getUserProfile().then((resp) =>{
      console.log(resp)
    })
    .catch((e)=> console.log(e))
  },[])
  return (
    <div>Profile</div>
  )
}

export default Profile