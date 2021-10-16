import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2>This is our Home Page</h2>
            <h4>User: {user.displayName}</h4>
            <img src={user.photoURL} alt="" />
        </div>
    );
};

export default Home;