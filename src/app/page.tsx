'use client'

import { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/react'

import { useColorTheme } from '@/hooks/useColorTheme/Context'

import { Loader } from '@/components/Loader'
import { Layout } from '@/components/Layout'

export default function Home() {
  const { colorTheme } = useColorTheme()

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Flex width='100%' height='100vh' background={colorTheme.primary}>
          <Layout />
        </Flex>
      )}
    </>
  )
}
