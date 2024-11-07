import { Puzzle, Hints } from "./components"

const App = () => {
  return (
    <>
      <div id="bg" className={`bg-slate-300 font-poppins`}>
        <div className={`flex flex-row h-screen justify-center items-center gap-4`}>
          <Puzzle />
          <Hints />
        </div>
      </div>
    </>
  )
}

export default App
