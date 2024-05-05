/* eslint-disable */
import React from 'react'

import image31 from "../../../../public/image/image31.png";
import image32 from "../../../../public/image/image32.png";
import image33 from "../../../../public/image/image33.png";
import image34 from "../../../../public/image/image34.png";

import Rectangle39 from "../../../../public/image/Rectangle39.png";
import Rectangle32 from "../../../../public/image/Rectangle32.png";
import Rectangle33 from "../../../../public/image/Rectangle33.png";
import Rectangle34 from "../../../../public/image/Rectangle39.png";



import "./Body03.scss";
import Body03Item from './body3Item/Body03Item';

const Body03 = () => {
    return (
        <div className='body03'>
            <div className='ct1-bd3'>
                <p className='ct1-bd3-h1'><b>Features</b></p>
                <p className='ct1-bd3-h5'>Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</p>
            </div>
            <div className='ct2-bd3'>
                <Body03Item
                    image3={image31}
                    tt="Search Data"
                    ds="Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time."
                    background={Rectangle39}
                />
                <Body03Item
                    image3={image32}
                    tt="24 Hours Access"
                    ds="Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent."
                    background={Rectangle32}
                />
                <Body03Item
                    image3={image33}
                    tt="Print Out"
                    ds="Print out service gives you convenience if someday you need print data, just edit it all and just print it."
                    background={Rectangle33}
                />
                <Body03Item
                    image3={image34}
                    tt="Security Code"
                    ds="Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file."
                    background={Rectangle34}
                />
            </div>
        </div>
    )
}

export default Body03