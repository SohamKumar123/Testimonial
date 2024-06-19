import './App.css';
import Excellent from './components/Excellent';
import reviews from './data';

function App() {
  return (
    <div className='parent-content flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200 '>
      <div className='whole-container text-center flex flex-col gap-2'>
       
          <h1 className='title-heading text-4xl font-bold  '>Our Excellent Members</h1>
          <div className='bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto'></div>
          <Excellent reviews={reviews}/>
      </div>
      
    </div>
  );
}

export default App;
