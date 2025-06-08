"use client"
import React from 'react';
import Post from '../../../utility/Post';

const Projects = () => {
    return (
        <div className='container max-w-7xl mx-auto py-20'>
            <h1 className='text-4xl font-bold mb-4 text-center'>My Project</h1>
            <p className='text-lg text-secondary mb-4 text-center'>Here are some of my recent project. Click on the links to view the code or live demo.</p>
            <Post/>
        </div>
    );
};

export default Projects;