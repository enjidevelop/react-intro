import React from 'react';

const Container = ({
    children,
    ...props
}) => (
    <div className='container' {...props}>
        {children}
    </div>
);

export default Container;
