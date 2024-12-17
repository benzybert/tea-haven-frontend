import React from 'react';
import TeaProductCard from './TeaProductCard';

const TeaList = ({ teas }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teas.map(tea => (
                <TeaProductCard key={tea.id} tea={tea} />
            ))}
        </div>
    );
};

export default TeaList;