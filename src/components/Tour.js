import axios from "axios";
import React, { useEffect, useState } from "react";

const Tour = () => {
  const [toursData, setToursData] = useState([]);

  useEffect(() => {
    const data = async () => {
      await axios
        .get("http://localhost:5000/toursData")
        .then((resp) => setToursData(resp.data.data));
    };
    data();
  }, [toursData]);

  return (
    <div className="section-center featured-center">
      {toursData.map((data) => {
        const { id, date, title, text, location, days, price, image } = data;
        return (
          <article className="tour-card" key={id}>
            <div className="tour-img-container">
              <img src={image} className="tour-img" alt={title} />
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{title}</h4>
              </div>
              <p>{text}</p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>
                  {location}
                </p>
                <p>{days} days</p>
                <p>from ${price}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Tour;
