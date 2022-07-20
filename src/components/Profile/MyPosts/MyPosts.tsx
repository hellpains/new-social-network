import React from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea/>
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};
