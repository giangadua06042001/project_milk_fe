import './Resgister.css';
import * as Yup from "yup";
import React from "react";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import Swal from 'sweetalert2';

const validationSchema = Yup.object().shape({
    customerName: Yup.string().required("Xin nhập tên người dùng"),
    phone: Yup.string().required("Xin nhập số điện thoại"),
    email: Yup.string().required("Không để mục Email trống"),
    password: Yup.string().required("Mật khẩu không được trống")
});

export default function Register() {
    const handleSubmit = (values, {setSubmitting, resetForm}) => {
        axios.post(`http://localhost:8080/users/register`, values)
            .then((response) => {
                console.log(response.data);

                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Đã đăng ký thành công',
                    showConfirmButton: false,
                    timer: 1500,

                });
            })
            .catch((error) => {
                console.error('Đã xảy ra Lỗi', error.response.data);
                Swal.fire({
                    icon: 'error',
                    title: `${error.response.data}`,
                    text: 'Đã xảy ra sự cố'
                })
            })
            .finally(() => {
                setSubmitting(false);
                resetForm();
            })

    }


    return (
        <div className="register">
            <div className="register_content">
                <nav className="register_navbar">
                    <div className="register_logo">
                        <div className="register_logo_icon">
                            <img src="/img/chplay.jpg" alt="" className="register_logo_img"/>
                        </div>
                        <div className="register_logo_register">
                            <span className="register_logo_content">Đăng Ký</span>

                        </div>
                    </div>
                    <div className="help_navbar">
                        <div className="help_img">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className="help_content" href="">Trợ giúp </a>
                        </div>
                    </div>


                </nav>
                <div className="register_background">
                    <div className="background_content">
                        <div className="background_content_img">
                            <div className="background_img">
                                <img src="/img/appsto.jpg" className="img_background" alt=""/>
                            </div>
                            <div className="background_content_content">
                                <div className="content">
                                    <p className="content_letter">Nơi sự tươi mát được ở đây</p>
                                    <br/>
                                    <p className="content_letter_item">Ngọt ngào, tươi mát, sạnh xanh, ngon ngon</p>
                                </div>

                            </div>
                        </div>
                        <div className="background_register">
                            <Formik
                                initialValues={{
                                    userName: "",
                                    number: "",
                                    email: "",
                                    password: ""

                                }
                                }
                                onSubmit={handleSubmit}
                                validationSchema={validationSchema}
                            >

                                {({handleChange, handleSubmit, values, errors, touched}) => (


                                    <Form className="form_register" onSubmit={handleSubmit}>
                                        <div className="input_content">
                                            <h3 className="input_letter">Đăng Ký </h3>
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a className="input_login_login" href="">Đăng nhập</a>
                                        </div>
                                        <div className="input_form">
                                            <div className="input_register">
                                                <Field type="text" placeholder="Nhập tên"
                                                       name="userName"
                                                       onChange={handleChange}
                                                       value={values.userName}
                                                       className="input_item"/>
                                            </div>
                                            {errors.userName && touched.userName && (
                                                <div className="text-danger">{errors.userName}</div>
                                            )}
                                            <div className="input_register">
                                                <Field type="number" placeholder="Nhập số điện thoại"
                                                       value={values.number}
                                                       name="number"
                                                       onChange={handleChange}
                                                       className="input_item"/>
                                            </div>
                                            {errors.number && touched.number && (
                                                <div className="text-danger">{errors.number}</div>
                                            )}
                                            <div className="input_register">
                                                <Field type="email" placeholder="Nhập email"
                                                       value={values.email}
                                                       name="email"
                                                       onChange={handleChange}
                                                       className="input_item"/>
                                            </div>
                                            {errors.email && touched.email && (
                                                <div className="text-danger">{errors.email}</div>
                                            )}
                                            <div className="input_register">
                                                <Field type="password" placeholder="Nhập mật khẩu"
                                                       value={values.password}
                                                       name="password"
                                                       onChange={handleChange}
                                                       className="input_item"/>
                                            </div>
                                            {errors.password && touched.password && (
                                                <div className="text-danger">{errors.password}</div>
                                            )}
                                        </div>
                                        <div className="input_btn">
                                            <button className="btn_btn" type="submit">Đăng ký</button>
                                        </div>
                                        <div className="input_con">
                                            <p className="input_con_content">Hoặc chọn đăng ký bằng</p>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                            <div className="input_login">
                                <button className="btn_btn_login_fb">Facebook
                                </button>
                                <button className="btn_btn_login">Google</button>
                            </div>
                            <div className="input_type">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a className="type_content" href="#">Điều khoản của web</a>
                            </div>
                        </div>

                    </div>

                </div>
                <footer className="register_footer">

                </footer>
            </div>

        </div>
    )
}