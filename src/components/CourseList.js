import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import CourseItem from './CourseItem';
import { clearCart } from '../control/cardSlice';
function CourseList() {
    const dispatch=useDispatch();
    const {cardItems,quantity,total} = useSelector((store)=>store.card);
  return (
    <>
    {quantity < 1 ? (
        <section>
            <header>
                <h2>My Cart</h2>
                <h4>Empty</h4>
            </header>
        </section>    
    ) : (
        <section className='cart'>
            <header>
                <h2>My Cart</h2>
            </header>
            <div>
                {cardItems.map((item)=>{
                    return <CourseItem key={item.id} {...item} />
                })}
            </div>
            <footer>
                <hr />
                <div><h4>Total Amount <span>{total} TL</span> </h4> </div>
                <button className='cartClearBtn' onClick={()=>dispatch(clearCart())}>Clear All</button>
            </footer>
        </section>    
    )}
    </>
  );
}

export default CourseList;