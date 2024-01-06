'use client'

import { useEffect, useState } from 'react'

import { Header } from '@/components/Header'
import { Loader } from '@/components/Loader'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  return <>{isLoading ? <Loader /> : <Header />}</>
}
