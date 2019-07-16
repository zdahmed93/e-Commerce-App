import React, { useState } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

export default function ShopPage() {
    const [collections, setCollections] = useState(SHOP_DATA)
    return (
        <div>
            <h1>Shop page</h1>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}