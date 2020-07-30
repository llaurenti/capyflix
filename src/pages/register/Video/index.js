import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function VideoRegistration() {

    return (
        <PageDefault >
            <h1>Video registration</h1>

            <Link to="/register/category">
                Category registration
            </Link>
        </PageDefault >
    )
};

export default VideoRegistration;