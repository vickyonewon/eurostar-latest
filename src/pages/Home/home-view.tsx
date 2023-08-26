import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { increase, decrease } from '../../redux/features/counterSlice';


const Home = () => {
  const count=useSelector((state: any)=> state.counter.value);
  const dispatch=useDispatch();
  return (
    <div className='flex flex-col w-fit m-auto'>
      <h1>Counter</h1>
      <button onClick={()=> dispatch(decrease(3))}>-</button>
      <div className='w-10'>{count}</div>
      <button onClick={()=> dispatch(increase(3))}>+</button>
    </div>
  )
}

export default Home;

