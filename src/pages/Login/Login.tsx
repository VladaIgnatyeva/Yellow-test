import React, { useState } from 'react';
//import style from './Login.module.css';
import bearFace from '../../assets/bear-face.png';
import bearFace2 from '../../assets/bear-face@2x.png';
import bearFace3 from '../../assets/bear-face@3x.png';
import bearFaceMob from '../../assets/bearFace.png';
import bearFace2Mob from '../../assets/bearFace@2x.png';
import bearFace3Mob from '../../assets/bearFace@3x.png';
import HTTPWrapper from '../../utils/HTTPWrapper';
import { RouteComponentProps } from 'react-router-dom';

import './Login.css';

interface LoginProps extends RouteComponentProps<any> {

}

export const Login = ({ history }: LoginProps) => {

    const login = () => {
        const http = new HTTPWrapper();
        const data = {
            uuid: 'hello'
        }
        http.post(`auth/uuidLogin`, data)
            .then(res => {
                localStorage.setItem('token', `${res.data.response.token_type} ${res.data.response.access_token}`);
                history.push(`/jogs`)
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <>
            <div className='login-container'>
                <div className='d-none d-md-block d-xl-none d-xl-block'>
                    <div className='box '>
                        <img src={bearFace}
                            srcSet={`${bearFace2} 2x, ${bearFace3} 3x`}
                            className='bearFace' />
                        <button className='btn-login' onClick={login}><span className='letMeIn'>Let me in</span></button>
                    </div>

                </div>
                <div className='d-block d-sm-none d-none d-sm-block d-md-none '>
                    <div className='box-mobile'>
                        <img src={bearFaceMob}
                            srcSet={`${bearFace2Mob} 2x, ${bearFace3Mob} 3x`}
                            className='bearFace-mobile' />
                        <button className='btn-login-mobile' onClick={login}><span className='letMeIn'>Let me in</span></button>

                    </div>
                </div>
            </div>
        </>
    )
}
