import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogsBlock}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>Dimych</div>
                <div className={s.dialog}>Adnrey</div>
                <div className={s.dialog}>Sveta</div>
                <div className={s.dialog}>Sasha</div>
                <div className={s.dialog}>Viktor</div>
                <div className={s.dialog}>Valera</div>
                <div></div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are is your it-kamasutra</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    );
};
