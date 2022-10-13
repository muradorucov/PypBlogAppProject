import React from "react"
import { Link } from "react-router-dom"
import { discover } from "../../../dummyData"
import Heading from "../../common/heading/Heading"
import "./style.css"

const Discover = () => {
  return (
    <>
      <section className='discover'>
        <div className='container'>
          <Heading title='Discover' />
          <div className='content'>
            {discover.map((val, index) => {
              return (
                <div key={index} className='box'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <Link to={`${val.title}`}>
                    <h1 className='title'>{val.title}</h1>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Discover
