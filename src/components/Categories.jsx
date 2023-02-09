import React, { useState } from "react";

function Categories({ activeIndex, setActiveIndex}) {
  
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
          <li key={id} onClick={()=>setActiveIndex(id)}  className={activeIndex === id ? "active" : ""}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
