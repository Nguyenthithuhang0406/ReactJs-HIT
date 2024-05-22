/* eslint-disable no-unused-vars */
import React from 'react'

import maximise from "../../../../../public/image/maximise.png"
import layerGroup from "../../../../../public/image/layerGroup.png"
import terminal from "../../../../../public/image/terminal.png"

import "./ContentFull.scss";
import ContentItem from '../contentItem/ContentItem';

const ContentFull = () => {
  return (
    <div className='content2'>
      <ContentItem image={maximise} title="Fully Responsive" describe="This theme will look great on any device, no matter the size!" />
      <ContentItem image={layerGroup} title="Bootstrap 5 Ready" describe="Featuring the latest build of the new Bootstrap 5 framework!" />
      <ContentItem image={terminal} title="Easy to Use" describe="Ready to use with your own content, or customize the source files!" />

    </div>
  )
}

export default ContentFull;