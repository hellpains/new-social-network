import React from 'react';
import style from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                    alt=""/>
                <div>
                    ava - description
                </div>
                <div>
                    My posts
                    <div>
                        New posts
                    </div>
                    <div className={style.posts}>
                        <div className={style.item}>
                            post 1
                        </div>
                        <div className={style.item}>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
