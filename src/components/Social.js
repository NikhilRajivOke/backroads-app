import React from 'react'
import { socialLinks } from '../data';

const Social = ({parentClass,subClass}) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((data) => {
        return (
          <li key={data.id}>
            <a
              href={data.href}
              target="_blank"
              rel="noreferrer"
              className={subClass}
            >
              <i className={data.class}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Social