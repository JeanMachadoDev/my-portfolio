'use client'

import { useEffect, useState } from 'react'

import { Loader } from '@/components/Loader'
import { Layout } from '@/components/Layout'
import { Home } from '@/components/screens/Home'
import { About } from '@/components/screens/About'

export default function IndexPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Layout>
          <Home />
          <About />
        </Layout>
      )}
    </>
  )
}
