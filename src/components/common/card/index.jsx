import { Link } from '@chakra-ui/react';
import React from 'react'
import Slider from 'react-slick';
import {popular} from '../../../dummyData.js'
import Side from '../../home/sideContent/side/Side.jsx';
import Heading from '../heading/Heading.jsx';
function BlogCard({name="Category"}) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
  };
  return (
    
    <div className='container'>
      <section className="music  ">
      {/* mainContent */}
        <Heading title={name} />
        <div className="content">
          <Slider {...settings}>
            {popular
              .filter((val) => val.catgeory === "fun")
              .map((val, index) => {
                return (
                  <div key={index} className="items">
                    <div className="box shadow flexSB">
                      <div className="images">
                        <div className="img">
                          <img src={val.cover} alt="" />
                        </div>
                        <Link to={`/${val.catgeory}`}>
                          <div className="category category1">
                            <span>{val.catgeory}</span>
                          </div>
                        </Link>
                      </div>
                      <div className="text">
                        <Link to={`/detail/${val.id}`}>
                          <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                        </Link>
                        <div className="date">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" />
                          </svg>
                          <label>{val.date}</label>
                        </div>
                        <p className="desc">{val.desc.slice(0, 250)}...</p>
                        <div className="comment">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
                          </svg>{" "}
                          <label>{val.comments}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </section>
      {/* <div className='sideContent'>
        <Side/>
      </div> */}
    </div>
  )
}

export default BlogCard