const Letter = () => {
  return (
    <>
      <div className={`border-[1px] border-gray-400`}>
        <input type="text" maxLength={1} className={`w-28 h-28 border-none focus:outline-none text-center text-6xl`}/>
      </div>
    </>
  )
}

export default Letter