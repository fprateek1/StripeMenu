import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const data = useGlobalContext()
  // console.log(data)

  const { closeSubmenu } = useGlobalContext()
  // console.log({ closeSubmenu })

  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payment Infrastructure for the internet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sed
            fugit totam animi dolore facilis adipisci voluptate blanditiis,
            suscipit laudantium doloremque quas recusandae excepturi aspernatur,
            delectus ipsam magnam quod est.
          </p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='' />
        </article>
      </div>
    </section>
  )
}

export default Hero