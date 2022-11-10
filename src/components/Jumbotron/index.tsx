import Marquee from '../Marquee'

const Jumbotron = () => {
  return (
    <>
      <section className="mb-4 jumbotron w-full h-72 bg-emerald-700 flex flex-col justify-center items-center border-8 border-emerald-400 relative bg-[url('/images/vegie-1.webp')] bg-center bg-cover rounded">
        <div className='w-full h-full absolute opacity-80 bg-emerald-700 z-1' />
        <div className="absolute flex flex-col items-center">
          <p className="text-white text-lg font-bold">Pantau harga komoditas terkini langsung dari gawai anda.</p>
          <p className="text-white text-md font-light">Harga di update setiap hari.</p>
        </div>

        <div className="footer-info absolute bottom-2 right-2">
          <p className="text-sm text-yellow-500 italic">Update Terakhir: Senin, 21 Oktober 2022</p>
        </div>
      </section>

      <Marquee />
    </>
  )
}

export default Jumbotron
