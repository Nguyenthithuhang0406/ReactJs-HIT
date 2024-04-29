/* eslint-disable */
import React from 'react'
import Header from '../header/Header'
import Content1 from '../content1/Content1'
import ContentFull from '../content2/contentFull/contentFull'
import Content3 from '../content3/Content3'
import Content4Full from '../content4/content4Full/Content4Full'
import Content5 from '../content5/Content5'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Content1 />
      <ContentFull />
      <Content3 />
      <Content4Full />
      <Content5 />
      <Footer/>
    </div>
  )
}

export default Home