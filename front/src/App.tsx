import { Routes, Route, NavLink } from 'react-router-dom';
import Memos from './components/Memos';
import NewMemo from './components/NewMemo';
import EditMemo from './components/EditMemo';
import { useQuery } from '@tanstack/react-query';
import memoService from '../services/memoService';

function App() {
  useQuery({
    queryKey: ['carMemos'],
    queryFn: memoService.getMemos,
  });

  return (
    <div>
      <div className='border-1 m-10 min-w-xl'>
        <div className='fixed top-0 right-0 flex flex-col'>
          <NavLink to='/'>
            <button className='btn bg-blue-30 border-1 h-20 w-20 rounded-full'>
              Home
            </button>
          </NavLink>
          <NavLink to='/newMemo'>
            <button className='btn bg-blue-30 border-1 h-20 w-20 rounded-full'>
              Create new
            </button>
          </NavLink>
        </div>
        <Routes>
          <Route path='/' element={<Memos />} />
          <Route path='/newMemo' element={<NewMemo />} />
          <Route path='/editMemo/:id' element={<EditMemo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

