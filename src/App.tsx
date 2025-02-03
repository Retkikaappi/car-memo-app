import { Routes, Route } from 'react-router-dom';
import Memos from './Memos';

function App() {
  return (
    <div className=' border-1 m-20'>
      <Routes>
        <Route path='/' element={<Memos />} />
      </Routes>
    </div>
  );
}

export default App;

