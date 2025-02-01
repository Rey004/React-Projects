import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const { userid } = useParams()
  return (
    <div className="text-center text-2xl font-medium py-10 bg-gray-700 text-white">
      User: {userid}
    </div>
  )
}

export default User
