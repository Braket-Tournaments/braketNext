export default function ReadyToStart() {
  function PageNavTournament() {
    return (
      <button className="bg-sign-up-button w-[20rem] h-20 rounded-3xl mt-40 mb-16 shadow-2xl  group relative leading-none overflow-hidden">
        <span className="bg-white absolute inset-0 hidden  hover:animate-color-slide group-hover:animate-color-slide group-hover:inline"></span>
        <h1 className="text-white text-3xl group-hover:text-sign-up-button z-10 relative">
          GET STARTED
        </h1>
      </button>
    )
  }

  return (
    <div className="bg-bracketParallax bg-center bg-fixed bg-cover h-[46rem] w-full flex flex-col justify-center items-center">
      <div className="flex flex-col text-center text-white">
        <h1 className="text-6xl tracking-wide mb-6">Ready to Start?</h1>
        <h5 className="text-4xl tracking-wide">
          Create an account for free and start planning!
        </h5>
      </div>
      <PageNavTournament />
    </div>
  )
}
