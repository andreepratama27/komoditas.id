import React from 'react'
import Modal from '../Modal'

const Navbar = () => {
  const [show, setShow] = React.useState(false)

  const toggle = () => setShow(!show)

  const changeProvince = (province: string) => {
    console.log('fff', province)
  }

  const renderModal = () => {
    if (!show) return;

    return (
      <Modal onCancel={toggle} onChange={changeProvince} />
    )
  }

  return (
    <nav className="bg-white fixed w-full z-10 shadow">
      <div className="mx-auto max-w-2xl px-2">
        <div className="h-16 flex justify-between w-full items-center">
          <h1 className="text-gray-700 font-bold hover:cursor-pointer">Komoditas Kini</h1>

          <div className="location-wrapper flex items-center">
            <div className="location pr-4">
              <p className="text-yellow-700 text-sm font-light">Kepulauan Riau</p>
            </div>
            <p className="text-white font-light font-light bg-gray-600 p-2
              hover:bg-gray-700 hover:cursor-pointer text-sm rounded
              hover:cursor-pointer" role="button" onClick={toggle}>
              Ganti Provinsi
            </p>
          </div>
        </div>
      </div>

      {renderModal()}
    </nav>
  )
}

export default Navbar
