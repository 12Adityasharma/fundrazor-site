import React from 'react'
import PaymentPage from '@/components/PaymentPage'

import connectDb from '@/db/connectDb'
import User from '@/models/User'
const Username = async ({ params }) => {

 
  return (
    <>
      <PaymentPage username={params.username} />
    </>
  )
}

export default Username
