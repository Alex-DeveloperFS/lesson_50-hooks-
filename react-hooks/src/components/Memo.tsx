import {useState} from "react";
import {MemoizedComponent} from "./memo/MemoizedComponent.tsx";

const Memo = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="border-2 border-gray-400 p-1 bg-gray-200 mt-3 mb-3"/>
      <MemoizedComponent count={count}/>
      <button onClick={() => setCount(count + 1)} className="border-2 border-gray-400 p-1 bg-gray-200 mr-2">Increment count</button>
    </div>
  )
}
export default Memo