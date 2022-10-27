import React from 'react'
import Image from 'next/image'

interface ICard {
  name: string;
  comodity: {
    value: string;
    name: string;
    display: string;
    id: string;
  }
}

const Card: React.FC<ICard> = ({ name, comodity }) => {
  const generateFileName = () => name.split(' ').join('-').toLowerCase()

  return (
    <div className="w-full shadow-md p-4 bg-white">
      <div className="img-wrapper flex justify-center bg-black rounded h-52">
        <Image src={`/images/${generateFileName()}.webp`} alt={name} width="300" height="250" className="object-cover" />
      </div>
      <p className="pt-4 text-gray-800">{name}</p>
      <p className="text-emerald-500 font-bold">{comodity.display}</p>
    </div>
  )
}

export default Card
