import React from 'react';
import './PreviewCollection.scss';
import CollectionItem from '../collectionitem/CollectionItem';

const PreviewCollection = ({ title, items }) => (
  <div className='preview-collection'>
    <h1 className='title'>{title}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...itemProps }) => (
          <CollectionItem key={id} {...itemProps} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
