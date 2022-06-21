import React from 'react'
import '../../style/tags.scss'
 
const Tags = () => {
  return (
    <>
      <div className="tags__main">
        <ul>
          <li>Comédia</li>
          <li>Ação</li>
          <li>Drama</li>
          <li>Anime</li>
          <li>Terror</li>
        </ul>
      </div>
      <span className="tags__divisor"></span>
    </>
  );
}
 
export default Tags
