/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Image from '../item/Image';
import "./Layout.scss";

const Layout = () => {
    const [image, setImage] = useState([]);
    const [page, setPage] = useState(1);
    const [hover, setHover] = useState(null);
    const [newImage, setNewImage] = useState("");

    useEffect(() => {
        const apiURL = `https://picsum.photos/v2/list?page=${page}&limit=8`;

        const fetchData = async () => {
            const data = await axios.get(apiURL);
            // console.log(data);
            (page > 1) ? setImage(prev => [...prev, ...data.data]) : setImage(data.data);
        };

        fetchData();
    }, [page]);

    const deleteImage = (id) => {
        const CurrentImages = image.filter(img => img.id !== id);
        setImage(CurrentImages);
    }

    const addImage = () => {
        if(newImage){
            const newImg = {id: Date.now(), download_url: newImage};
            setImage(prev => [...prev, newImg]);
            setNewImage("");
        }
    };

  return (
    <>
        <div className='layout'>
            <div className='image-list'>
                {image && image.map(img => 
                    {
                        return <div className='image' key={img.id}
                                onMouseEnter={() => setHover(img.id)}
                                onMouseLeave={() => setHover(null)}
                                style={{position: "relative"}}
                                >
                            <Image key={img.id} children={img.download_url}/>
                            <button className='delete-icon' onClick={() => deleteImage(img.id)}></button>
                        </div>
                    }
                )}
            </div>
                    <button 
                        className="load-more" 
                        onClick={() => setPage(page+1)}>
                        Load More
                    </button>

                    <div className='add'>
                        <input type='text'
                            value={newImage}
                            onChange={(e) => setNewImage(e.target.value)}
                            placeholder='điền link ảnh bạn muốn thêm'
                        />

                        <button className="add-image" onClick={addImage}>Thêm mới</button>
            
                    </div>
        </div>
    </>
  )
}

export default Layout;