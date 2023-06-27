import React from 'react'
import { BsChevronUp ,BsChevronDown} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { decrease, increase, removeItem } from '../control/cardSlice';

function CourseItem({id,title,price,img,quantity}) {
    const dispatch=useDispatch();
  return (
    <div className='cardItem'>
        <img src={img} alt="" />
        <div className='cardInfo'>
            <h4>{title}</h4>
            <h4>{price} TL</h4>
            <div>
                <button className='cardQuantityBtn' onClick={()=>{dispatch(increase(id));}}>
                    <BsChevronUp />
                </button>
                <p className='cardQuantity'>{quantity}</p>
                <button className='cardQuantityBtn' onClick={()=>{dispatch(decrease(id));}}>
                    <BsChevronDown />
                </button>
            </div>
            <button className='cardDeleteBtn' onClick={()=>dispatch(removeItem(id))}>Delete</button>
        </div>
    </div>
  )
}

export default CourseItem;