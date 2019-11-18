import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import { CollectionPreviewContainer, CollectionTitle, CollectionPreviewDiv } from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <CollectionTitle>{title.toUpperCase()}</CollectionTitle>
    <CollectionPreviewDiv>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </CollectionPreviewDiv>
  </CollectionPreviewContainer>
)

export default CollectionPreview;