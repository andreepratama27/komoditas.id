import React from 'react'
import { getAll } from './models/comodity'
import Jumbotron from './components/Jumbotron'
import Navbar from './components/Navbar'
import Card from './components/Card'

export async function getServerSideProps() {
  const response = await getAll();

  return {
    props: {
      data: response ?? []
    }
  }
}

export default function Home({ data }) {
  const result = JSON.parse(data)

  return (
    <div className="w-full min-h-screen">
      <Navbar />

      <div className="container mx-auto max-w-2xl">
        <div className="spacer h-20" />

        <Jumbotron />

        <section className="py-4 pt-10">
          <h1 className="text-lg font-bold text-gray-800">Cari harga komoditas</h1>

          <input className="w-full bg-white py-2 px-4 mt-4 rounded shadow-md" placeholder="Cari disini..." />

          <div className="grid grid-cols-3 gap-8 mt-8">
            {
              result?.map((item, key) => (
                <Card {...item} key={key} />
              ))
            }
          </div>

        </section>
      </div>


    </div>
  )
}
