import React from 'react';
import './Guest.css';

export default function Guest() {
    return (
        <div className="guest_class">
            <header className="header">
                <div className="header_Firstly">
                    <nav className="header_content">
                        <div className="header_item">
                            <div className="header_customer">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a className="header_link" href="#">Kênh chủ nhà</a>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a className="header_link" href="#">Thông tin</a>
                            </div>
                            <div className="header_download">
                                <ul className="header_letter">
                                    <li className="header_letter_icon">
                                        Tải ứng dụng về
                                        <div className="header_letter_icon_icon">
                                            <img src="/maqr.jpg" alt="" className="header_letter_img"/>
                                            <div className="header_app">
                                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                                <a className="header_app_item" href="#">
                                                    <img src="/img/appsto.jpg" alt="" className="header_app_img"/>
                                                </a>
                                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                                <a className="header_app_item" href="#">
                                                    <img src="/img/chplay.jpg" alt="" className="header_app_img"/>
                                                </a>

                                            </div>

                                        </div>
                                    </li>
                                </ul>
                                <ul className="header_connect">
                                    <li className="header_connect_via">
                                        Kết Nối qua
                                    </li>
                                    <div className="header_connect_app">
                                        <a className="header_connect_app_item">
                                            <img src="/img/chplay.jpg" alt="" className="header_connect_img"/>
                                        </a>
                                        <a className="header_connect_app_item">
                                            <img src="/img/chplay.jpg" alt="" className="header_connect_img"/>
                                        </a>

                                    </div>

                                </ul>


                            </div>
                        </div>
                        <div className="header_login">
                            <ul className="login_content">
                                <li className="login_notification">
                                    <a className="login_new_notification" href="">
                                        Thông báo

                                    </a>
                                </li>
                                <li className="login_help">
                                    <a className="login_help_link" href="#">Trợ giúp
                                    </a>
                                </li>
                                <div className="login_register">
                                   <span className="login">
                                       <a className="login_login"  href="">
                                           Đăng ký
                                       </a>
                                   </span>
                                   <span className="login">
                                         <a className="login_login"  href="">
                                           Đăng nhập
                                       </a></span>

                                </div>

                            </ul>

                        </div>

                    </nav>
                </div>
                <div className="header_after">
                    <div className="header_context">
                        <div className="header_input">
                            <input type="text" className="input_input" placeholder="Nhập sản phẩm bạn cần tìm"/>
                        </div>
                        <div className="input_search">
                            <button className="search_btn">
                                Tìm Kiếm
                            </button>

                        </div>


                    </div>
                    <div className="header_logo">
                        <div className="logo_img">
                            <img src="/img/appsto.jpg" alt="" className="img_logo"/>

                        </div>

                    </div>
                    <div className="header_shop">
                        <img src="/img/chplay.jpg" alt="" className="img_shop"/>


                    </div>

                </div>

            </header>
            <div className="content_resgister">
                <div className="content_center">
                    <div className="content_header">
                        <div className="content_header_fist">
                                <h4 className="content_letter_letter">Danh Mục </h4>

                            <div className="content_header_">

                            </div>


                        </div>
                        <div className="content_header_after"></div>

                    </div>


                </div>
            </div>
            <div className="footer">

            </div>
        </div>
    );
}