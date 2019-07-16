import React from 'react';

export default function CollectionPreview({ title, items }) {
    return (
        <div>
            <h1>{title}</h1>
            {
                items
                    .filter((item, index) => (index < 4))
                    .map(({ id, name }) => (
                        <p key={id}>{name}</p>
                    ))
            }
        </div>
    )
}