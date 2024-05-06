/* eslint-disable */
import React, { useState } from 'react'

import deleteIcon from "../../../public/image/deleteIcon.png";
import editIcon from "../../../public/image/editIcon.png";

import "./Profile.scss";
import { useNavigate } from 'react-router-dom';
import { Pagination } from 'antd';

const Profile = () => {
  const [posts, setPost] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [isUpdate, setIsupdate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleAdd = () => {
    setPost([...posts, { title, description, tags }]);

    setTitle('');
    setDescription('');
    setTags('');
  }

  const handleEdit = (id) => {
    setIsupdate(id);

    setTitle(posts[id].title);
    setDescription(posts[id].description);
    setTags(posts[id].tags);
  }

  const handleUpdate = () => {
    const updatePost = [...posts];

    updatePost[isUpdate] = { title, description, tags };

    setPost(updatePost);

    setTitle('');
    setDescription('');
    setTags('');

    setIsupdate(null);

  }

  const handleDelete = (id) => {
    const newPost = posts.filter((post, index) => index !== id);
    setPost(newPost);
  }

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate('/');
  }
  return (
    <div className='profile'>
      <div className='sidebar'>
        <div className='logo'>
          <div className='lg1'></div>
          <div className='lg2'></div>
        </div>
        <div className='tt-sidebar'>
          <p className='tt-profile'>Posts</p>
          <p className='tt-profile' onClick={handleLogout}>Logout</p>
        </div>
      </div>

      <div className='content-profile'>
        <div className='top-profile'>
          {isUpdate !== null
            ?
            <button className='btn-add' onClick={handleUpdate}>Update</button>
            :
            <button className='btn-add' onClick={handleAdd}>Add new</button>
          }
          <div className='btn-option-profile'>
            <input className='tt-profile' placeholder='Title' onChange={(e) => setTitle(e.target.value)} value={title} />
            <input className='tt-profile' placeholder='Description' onChange={(e) => setDescription(e.target.value)} value={description} />
            <input className='tt-profile' placeholder='Tags' onChange={(e) => setTags(e.target.value)} value={tags} />
          </div>
        </div>

        <div className='tt-table-profile'>
          <p className='p-tt-table'>ID</p>
          <p className='p-tt-table'>Title</p>
          <p className='p-tt-table'>Description</p>
          <p className='p-tt-table'>Tags</p>
          <p className='p-tt-table'>Actions</p>
        </div>
        <div className='post-table-list'>
          {currentPosts && currentPosts.map((post, index) => {
            return <div className='table-profile' key={index}>
              <p className='p-table'>{indexOfFirstPost + index + 1}</p>
              <p className='p-table'>{post.title}</p>
              <p className='p-table'>{post.description}</p>
              <p className='p-table'>{post.tags}</p>
              <div className='list-icon-table'>
                <img className='icon-table' src={editIcon} onClick={() => handleEdit(index)} />
                <img className='icon-table' src={deleteIcon} onClick={() => handleDelete(index)}/>
              </div>
            </div>
          })}
        </div>

        <Pagination
          className='Pagination'
          total={posts.length}
          pageSize={10}
          current={currentPage}
          onChange={handlePageChange}
        />
        {/* <button className='Pagination'>Phần phân trang</button> */}
      </div>

    </div>
  )
}

export default Profile