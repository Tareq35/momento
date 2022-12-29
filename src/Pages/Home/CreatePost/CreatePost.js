import React, { useRef } from 'react';

const CreatePost = () => {
    const filePickerRef = useRef()
    return (
        <section className='my-5'>
            <form>
                <div className="w-[50%] mx-auto mb-4 border border-gray-200 rounded bg-gray-200 dark:bg-gray-700 dark:border-gray-600">
                    <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                        <label className="sr-only">What's on your mind, User?</label>
                        <textarea id="comment" rows="4" className="w-full rounded-lg px-5 text-sm text-gray-900 bg-slate-200 border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="What's on your mind, User?" required></textarea>
                    </div>
                    <div className="flex items-center justify-between px-5 py-2 border-t dark:border-gray-600">
                    <button onClick={()=> {
                            filePickerRef.current.click()
                        }} type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Upload image</span>
                        </button>
                        <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-orange-400 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-orange-500">
                            SUBMIT
                        </button>

                        

                        <div className="items-center justify-between border-t dark:border-gray-600 hidden">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                            <input ref={filePickerRef} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" />
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default CreatePost;