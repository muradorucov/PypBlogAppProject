import React, { useState } from "react"
import { hero } from "../../../dummyData"
import "./hero.css"
import Card from "./Card"

const Hero = () => {
  const [items, setItems] = useState(hero)

  return (
    <>
      <section className='hero'>
        <div className='container'>
          {items.map((item) => {
            return (
              <React.Fragment  key={item.id}>
                <Card item={item} />
              </React.Fragment>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Hero
