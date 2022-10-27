const Marquee = () => {
  return (
    <div className="relative flex overflow-x-hidden bg-yellow-500 rounded">
      <div className="py-2 animate-marquee whitespace-nowrap">
        <span className="text-lg mx-4">Marquee Item 1</span>
        <span className="text-lg mx-4">Marquee Item 2</span>
        <span className="text-lg mx-4">Marquee Item 3</span>
        <span className="text-lg mx-4">Marquee Item 4</span>
        <span className="text-lg mx-4">Marquee Item 5</span>
        <span className="text-lg mx-4">Marquee Item 5</span>
        <span className="text-lg mx-4">Marquee Item 5</span>
        <span className="text-lg mx-4">Marquee Item 1</span>
      </div>
    </div>
  )
}

export default Marquee
