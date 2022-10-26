import { useState } from 'react'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const toggling = () => setToggle(!toggle)

  const renderModal = () => {
    if (!toggle) return;
  }

  return (
    <nav className="bg-gray-800 fixed w-full z-10">
      <div className="mx-auto max-w-2xl px-2">
        <div className="h-16 flex justify-between w-full items-center">
          <h1 className="text-white font-bold">Komoditas</h1>

          <h1 className="text-white font-light text-sm hover:cursor-pointer" role="button" onClick={toggling}>Ganti Provinsi</h1>
        </div>
      </div>

      {renderModal()}
    </nav>
  )
}

export default Navbar
