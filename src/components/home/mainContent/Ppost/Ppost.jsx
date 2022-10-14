import React from "react"
import { Link } from "react-router-dom"
import Slider from "react-slick"
import { ppost } from "../../../../dummyData"
import Heading from "../../../common/heading/Heading"
import "./ppost.css"

// copy same code of popular
const Ppost = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  }
  return (
    <>
      <section className='popularPost'>
        <Heading title='Popular Posts' />
        <div className='content'>
          <Slider {...settings}>
            {ppost.map((val, index) => {
              return (
                <div key={index} className='items'>
                  <div className='box shadow'>
                    <div className='images'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                      <Link to={`/${val.catgeory}`}>
                        <div className="category category1">
                          <span>{val.catgeory}</span>
                        </div>
                      </Link>
                    </div>
                    <div className='text'>
                      <Link to={`/detail/${val.id}`}>
                        <h1 className='title'>{val.title.slice(0, 30)}...</h1>
                      </Link>
                      <div className='date'>
                        <i className='fas fa-calendar-days'></i>
                        <label>{val.date}</label>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Ppost
