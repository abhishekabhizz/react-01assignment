
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import MinimizeIcon from '@mui/icons-material/Minimize';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
function App() {
  const [count, setCount] =useState(0)
  return (
    <div className="flex flex-col items-center justify-center h min-h-screen  bg-black text-white font-bold text-4xl" >
      <h1>{count} 
      </h1>
      <div className='flex space-x-8'>
      <button onClick={()=>{setCount(count<10? count+1 : count)}} className='p-4 bg-cyan-500 rounded hover:bg-slate-500 '> 
        <AddIcon/>
      </button>
      <button onClick={()=>{setCount(0)}} className='p-4 bg-teal-500 rounded hover:bg-blue-500 '>
        <RestartAltIcon/>
        </button>
        <button onClick={()=>{setCount(count>0? count-1 : count)}} className='p-4 bg-cyan-500 rounded hover:bg-slate-500 '>
        <MinimizeIcon/>
      </button>
        </div>
    </div>
  );
}
export default App;

