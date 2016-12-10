import React from 'react';

import './filmOnList.css';

const FilmOnList = ({data}) => {
  return (
    <li className='film-on-list'>
      <img src={data.image} alt={data.name} />
      <strong>Name:</strong> {data.name} <br />
      <strong>Company:</strong> {data.company}
    </li>
  )
}

FilmOnList.propTypes = {
    data: React.PropTypes.object.isRequired
}

export default FilmOnList;
