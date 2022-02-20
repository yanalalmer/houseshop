import React from 'react';
import './PreviewCollection.scss';

const PreviewCollection = ({ title, items }) => (
  <div className='preview-collection'>
    <h1 className='title'>{title}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
    </div>
  </div>
);

export default PreviewCollection;
