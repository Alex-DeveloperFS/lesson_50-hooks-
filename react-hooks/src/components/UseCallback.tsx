import {useEffect, useState, useCallback} from "react";

const UseCallback = () => {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    console.log('Вызов функции handleClick')
    setCount((prevState) => prevState + 1)
  }, [])

  useEffect(() => {
    console.log('handleClick изменено')
  }, [handleClick])

  return (
    <div>
      <p className="text-xl mt-3 mb-3">count: {count}</p>
      <button onClick={handleClick} className="border-2 border-gray-400 p-1 bg-gray-200">Increment</button>
    </div>
  )
}

export default UseCallback