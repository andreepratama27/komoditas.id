import { useState, useEffect } from 'react'
import { NextPage } from 'next'
import Jumbotron from '../src/components/Jumbotron'
import Navbar from '../src/components/Navbar'
import Card from '../src/components/Card'

const Home: NextPage = () => {
  const [comodities, setComodities] = useState([]);

  useEffect(() => {
    const fetchComodities = async () => {
      try {
        const result = await fetch('/comodities/Sumatera%20Utara')
        const response = await result.json()

        setComodities(response)
      } catch (err) {
        console.error(err)
      }
    }

    fetchComodities()
  }, [])

  return (
    <div className="w-full min-h-screen">
      <Navbar />

      <div className="container mx-auto max-w-2xl">
        <div className="spacer h-20" />

        <Jumbotron />

        <section className="py-4 pt-10">
          <h1 className="text-lg font-bold text-gray-800">Cari harga komoditas</h1>

          <input className="w-full bg-white py-2 px-4 mt-4 rounded shadow-md" placeholder="Cari disini..." />

          <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-8 mt-8">
            {
              comodities?.map((item, key: number) => (
                <Card {...item} key={key} />
              ))
            }
          </div>

        </section>
      </div>
    </div>
  )
}

export default Home
