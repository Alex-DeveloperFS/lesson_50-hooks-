import {useMemo, useState} from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0)
  const [item, setItem] = useState(1)

  const computeExpensiveValue = (num: number) => {
    console.log('Начало сложного вычисления')
    let value = num
    for (let i = 0; i < 1000000000; i++) {
      value += num
    }
    console.log('Конец сложного вычисления')
    return value
  }

  const expensiveValue = useMemo(() => computeExpensiveValue(count), [count])

  return (
    <div>
      <p className="text-xl mt-3">Сложное вычисление (count): {expensiveValue}</p>
      <p className="text-xl  mb-3">Простое вычисление (item): {item} </p>
      <button onClick={() => setCount(count + 1)} className="border-2 border-gray-400 p-1 bg-gray-200 mr-2">Increment count</button>
      <button onClick={() => setItem(item + 1)} className="border-2 border-gray-400 p-1 bg-gray-200">Increment item</button>
    </div>
  )
}

export default UseMemo