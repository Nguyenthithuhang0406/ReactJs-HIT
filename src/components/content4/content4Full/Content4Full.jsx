/* eslint-disable */
import React from 'react'

import avata1 from "../../../assets/images/avata1.jpg";
import avata2 from "../../../assets/images/avata2.jpg";
import avata3 from "../../../assets/images/avata3.jpg";

import "./Content4Full.scss";
import Content4Item from '../content4Item/Content4Item';

const Content4Full = () => {
    return (
        <div className='content-full'>
            <p className='name-content'><b>What people are saying...</b></p>
            <div className='list-item'>
                <Content4Item avata={avata1} name="Margaret E." describe=" This is fantastic! Thanks so much guys!" />
                <Content4Item avata={avata2} name="Fred S." describe=" Bootstrap is amazing. I've been using it to create lots of super nice landing pages." />
                <Content4Item avata={avata3} name="Sarah W." describe=" Thanks so much for making these free resources available to us!" />
            </div>
        </div>
    )
}

export default Content4Full;