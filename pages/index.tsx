import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />

      <section className="mx-auto max-w-2xl py-4 relative top-20">
        <h1 className="text-lg font-bold">Cari harga komoditas</h1>

        <input className="w-full bg-white py-2 px-4 mt-4 rounded shadow-md" placeholder="Cari disini..." />

        <div className="pt-8 grid grid-cols-2 gap-8">
          {
            Array(4)
              .fill('')
              .map(item => (
                <Card />
              ))
          }
        </div>
      </section>
    </div>
  )
}
