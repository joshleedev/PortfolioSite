import React from 'react';
import {Link} from 'react-router-dom';

export default () => (
    <div className="not-found__content">
        <h1>Sorry, that page doesnt exist</h1>
        <Link to="/">HOME</Link>
    </div>
);