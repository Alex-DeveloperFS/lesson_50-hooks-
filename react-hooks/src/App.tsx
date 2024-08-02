import UseCallback from './components/UseCallback'
import UseMemo from "./components/UseMemo.tsx";
import Memo from "./components/Memo.tsx";
import NonMemo from "./components/NonMemo.tsx";


const App = () => {
  return (
    <div>
      <h1 className="text-5xl text-center">React Hooks</h1>

      <div className="border-2 border-gray-400 p-4 m-2">
        <h2 className="text-3xl">Hooks useCallback</h2>
        <UseCallback/>
      </div>

      <div className="border-2 border-gray-400 p-4 m-2">
        <h2 className="text-3xl">Hooks useMemo</h2>
        <UseMemo/>
      </div>

      <div className="border-2 border-gray-400 p-4 m-2">
        <h2 className="text-3xl">Memoized Component</h2>
        <Memo/>
        <h2 className="text-3xl mt-8">NonMemoized Component</h2>
        <NonMemo/>
      </div>
    </div>
  )
}
export default App