import React from 'react';

const Loader = () => {
    return (
        <div className="flex items-center justify-center ">
            <div className="w-16 h-16 border-b-2 border-primary rounded-full animate-spin"></div>
        </div>
    );
};

export default Loader;