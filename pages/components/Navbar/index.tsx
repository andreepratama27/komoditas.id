import React from 'react'
import Modal from '../Modal'

const Navbar = () => {
  const [show, setShow] = React.useState(false)

  const toggle = () => setShow(!show)

  const renderModal = () => {
    if (!show) return;

    return (
      <Modal onCancel={toggle} />
    )
  }

  return (
    <nav className="bg-gray-800 fixed w-full z-10">
      <div className="mx-auto max-w-2xl px-2">
        <div className="h-16 flex justify-between w-full items-center">
          <h1 className="text-white font-bold">Komoditas</h1>

          <h1 className="text-white font-light text-sm hover:cursor-pointer" role="button" onClick={toggle}>Ganti Provinsi</h1>
        </div>
      </div>

      {renderModal()}
    </nav>
  )
}

export default Navbar
