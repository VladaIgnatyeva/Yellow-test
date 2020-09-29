import React from 'react';
//import style from './Login.module.css';
import bearFace from '../../assets/bear-face.png';
import bearFace2 from '../../assets/bear-face@2x.png';
import bearFace3 from '../../assets/bear-face@3x.png';
import bearFaceMob from '../../assets/bearFace.png';
import bearFace2Mob from '../../assets/bearFace@2x.png';
import bearFace3Mob from '../../assets/bearFace@3x.png';
import './Login.css'

export const Login = () => {

    return (
        <div className='login-container'>
            <div className='d-none d-md-block d-xl-none '>
                <div className='box '>
                    <img src={bearFace}
                        srcSet={`${bearFace2} 2x, ${bearFace3} 3x`}
                        className='bearFace' />
                    <button className='btn-login'><span className='letMeIn'>Let me in</span></button>
                </div>

            </div>
            <div className='d-xl-none d-xl-block d-md-none box-mobile'>
                <img src={bearFaceMob}
                    srcSet={`${bearFace2Mob} 2x, ${bearFace3Mob} 3x`}
                    className='bearFace-mobile' />
                <button className='btn-login-mobile'><span className='letMeIn'>Let me in</span></button>
            </div>
        </div>
    )
}
