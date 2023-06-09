import React from 'react'
import { servicesData } from '../data';

const Service = () => {
  return (
    <div className="section-center services-center">
      {servicesData.map((data) => {
        return (
          <article className="service" key={data.id}>
            <span className="service-icon">
              <i className={data.icon}></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">{data.title}</h4>
              <p className="service-text">{data.text}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Service