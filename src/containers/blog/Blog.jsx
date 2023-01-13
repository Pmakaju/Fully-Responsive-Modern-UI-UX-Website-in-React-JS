import React from 'react';
import './blog.css';
import { Article } from '../../components';

// same as we did for brand.jsx
//Line 3, 8, 18, 21, 22, 23, 24. We accepted props from Article.jsx and passin on those lines below

import { blog01,  blog02,  blog03,  blog04,  blog05 } from './imports';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgUrl={blog03} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgUrl={blog04} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgUrl={blog05} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  )
};

export default Blog;
