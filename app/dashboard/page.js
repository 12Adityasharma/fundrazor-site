"use client"
import React from 'react'
import Dashboard from '@/components/Dashboard'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

const DashboardPage = () => {
  const {data: session} = useSession()
    const router = useRouter()
    useEffect(() => {
      if (!session){
         router.push('/login')
      }
    
    }, [session, router])
  return (
    <div>
       <Dashboard/>
    </div>
  )
}

export default DashboardPage
