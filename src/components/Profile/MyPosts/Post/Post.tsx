import React from 'react';
import style from './Post.module.css'


type PropsType={
    message:string
    likesCount:number
}
export const Post = (props:PropsType) => {
    const img='https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg'

    return (
        <div className={style.item}>
            <img src={img} alt=""/>
            <span>{props.message}</span>
            <div>like {props.likesCount}</div>
        </div>
    );
};
