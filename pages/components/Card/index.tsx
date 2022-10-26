const Card = () => {
  return (
    <div className="w-full shadow-md p-4 bg-white">
      <div className="img-wrapper flex justify-center bg-black rounded h-52">
        <img src="https://via.placeholder.com/150" />
      </div>
      <p className="pt-4">Strawberry</p>
      <p>Rp. 3,000</p>
    </div>
  )
}

export default Card
