import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onChangeFilter } from "../Redux/slices/filterSlice";

function Categories() {
  const filter = useSelector(state => state.filter.value)
  const dispatch = useDispatch()
  const items=[
    'все',
    'мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ]
  return (
    <div className="categories">
      <ul>
        {items.map((item, id)=>(
          <li key={id} onClick={()=>dispatch(onChangeFilter(id))}  className={filter === id ? "active" : ""}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
