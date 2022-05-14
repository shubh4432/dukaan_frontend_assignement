import React from 'react'
import './productCards.css'
import Image from '../images/Image1.png'
import Image2 from '../images/Image2.png'
import Image3 from '../images/Image3.png'
import Image4 from '../images/Image4.png'

const productCards = () => {
  return (
    <>
    <div className='parent-div'>
    <h1 style={{marginRight:"825px", marginBottom:"50px", fontWeight:"600"}}>Try our other free products</h1>

      <div className='product-cards'>
        <div className='individual-card'>
          <img style={{marginBottom:"1rem"}} src={Image} alt='' />
          <span style={{marginRight:"100px",fontSize: "22px", fontWeight:"600"}}>Terms & Conditions Generator</span>
          <p className='p'>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
        </div>
        <div className='individual-card'>
          <img style={{marginBottom:"1rem"}} src={Image2} alt='' />
          <span style={{marginRight:"147px",fontSize: "22px", fontWeight:"600"}}>Domain Name Generator</span>
          <p className='p'>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
        </div>
        <div className='individual-card'>
          <img style={{marginBottom:"1rem"}} src={Image3} alt='' />
          <span style={{marginRight:"200px",fontSize: "22px", fontWeight:"600"}}>Invoice Generator</span>
          <p className='p'>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
        </div>
        <div className='individual-card'>
          <img style={{marginBottom:"1rem"}} src={Image4} alt='' />
          <span style={{marginRight:"145px",fontSize: "22px", fontWeight:"600"}}>Privacy Policy Generator</span>
          <p className='p'>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
        </div>
      </div>
    </div></>
  )
}

export default productCards