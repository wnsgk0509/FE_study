import React from 'react';
import { Link } from 'react-router-dom';

function GNV({ profile, isLoggedIn, handleButtonClick }){
    
    return(
        <div>
            {/* GNV */}
            <nav style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '150px',
                backgroundColor: 'white',
                border: 'solid 1px #b9b9b9c4',
                height: '60px',
                width: '100%',
                position: 'sticky',
                top: 0,
                zIndex: 1    /*네비게이션바가 제일 앞에오게 */
            }
            }>

                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Link to="/" style={{ textDecoration: 'none', width:'320px' }}><strong><span style={{ color: '#279eff', fontSize: '25px' }}>FE<span style={{ color: 'black' }}>Academy</span></span></strong>
                    </Link>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <Link to="/catalog"><button type="button" className="btn btn-light" style={{ width: '100px' }}>카탈로그</button></Link>
                    <Link to="/community"><button type="button" className="btn btn-light" style={{ width: '100px' }}>커뮤니티</button></Link>

                </div>


                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <div className="profile">
                        {profile && `${profile}님 환영합니다!`}
                    </div>
                    <button
                        type="button"
                        className="btn btn-dark"
                        style={{ width: '100px' }}
                        onClick={handleButtonClick}
                    >{isLoggedIn ? '로그아웃' : '로그인'}</button>
                </div>
                
                

            </nav >
            {/* GNV */}
        </div>
        
    );
}
export default GNV;