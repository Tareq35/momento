import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { GoCommentDiscussion } from 'react-icons/go';

const TopPosts = () => {
    const [commentSection, setCommentSection] = useState(false)
    return (
        <div className='w-[50%] mx-auto'>
            <h2 className='text-2xl font-bold my-5'>Top Posts</h2>

            <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="p-5">
                    <img className='mb-4 rounded w-[50%] mx-auto' src="https://upload.wikimedia.org/wikipedia/en/a/a4/The_Moment_%28TV_series%29.jpg" alt="" />
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                    <div className='flex items-center justify-between'>
                        <span className='flex items-center'>
                            <p className='text-2xl mr-3 cursor-pointer'><FiHeart /></p>

                            <p>Total Like</p>
                        </span>

                        <span onClick={()=> {
                            setCommentSection(!commentSection)
                        }} className='text-3xl cursor-pointer'><GoCommentDiscussion></GoCommentDiscussion></span>


                        <Link to="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Details
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>
            {
                commentSection &&
                <div className='bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 p-3 space-y-2'>
                    <div>
                        No Comment Found.
                    </div>
                    <textarea name="" rows={1} className='w-full rounded-lg p-2 focus:border-gray-200 border-gray-200' placeholder='Write your comment...' ></textarea>
                </div>}

        </div>
    );
};

export default TopPosts;