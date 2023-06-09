import React from 'react'
import { linkData } from '../data';
const PageLinks = ({classCss,item}) => {
  return (
    <ul className={classCss} id="nav-links">
      {linkData.map((data) => {
        return (
          <li key={data.id}>
            <a href={data.href} className={item}>
              {data.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default PageLinks