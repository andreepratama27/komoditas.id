import React, { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch('/comodities/Sumatera%20Utara')
        const result = await response.json()
      } catch (err) {
        console.error(err)
      }
    }

    fetchApi()
  }, [])

  return (
    <div>
      <h1>Testing</h1>
    </div>
  )
}

export default Home
