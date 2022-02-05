import React from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import Singlepost from '../../components/singlePost/singlepost';
import './single.css';

function Single(props) {
    return (
        <div className='single'>
            <Singlepost />
            <Sidebar />
        </div>
    );
}

export default Single;