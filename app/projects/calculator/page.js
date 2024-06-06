export default function page() {
  return (
    <div className="p-2">
      <div className="bg-stone-800 w-full md:w-96 mx-auto rounded-lg p-3">
        <input type="text" className="bg-stone-700 w-full py-3 px-2 rounded-md text-right font-bold tracking-wide text-2xl outline-none placeholder:opacity-40 placeholder:text-yellow-600 text-yellow-600" placeholder="0" />
        <div className="grid grid-cols-4 gap-2 mt-3">
          <button className="bg-yellow-900 text-xl p-3 rounded-md drop-shadow-md">Clear</button>
          <button className="bg-yellow-900 text-xl p-3 rounded-md drop-shadow-md">(</button>
          <button className="bg-yellow-900 text-xl p-3 rounded-md drop-shadow-md">)</button>
          <button className="bg-yellow-900 text-xl p-3 rounded-md drop-shadow-md">U+232B</button>
        </div>
      </div>
    </div>
  )
}
