import React from 'react'
import { getData, getAll } from './models/comodity'
import Navbar from './components/Navbar'
import Card from './components/Card'

export async function getServerSideProps() {
  const response = await getAll();

  return {
    props: {
      data: response
    }
  }
}

export default function Home({ data }) {
  const result = JSON.parse(data)
  
  return (
    <div className="w-full min-h-screen">
      <Navbar />

      <section className="mx-auto max-w-2xl py-4 relative top-20">
        <h1 className="text-lg font-bold">Cari harga komoditas</h1>

        <input className="w-full bg-white py-2 px-4 mt-4 rounded shadow-md" placeholder="Cari disini..." />

        <div className="grid grid-cols-3 gap-8">
          {
            result?.map((item, key) => (
              <Card {...item} key={key} />
            ))
          }
        </div>

      </section>
    </div>
  )
}
