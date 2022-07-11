import * as React from "react";
import { Formik, Form, Field } from "formik";
import { userLogin } from "../controller/userController";
import {message } from 'antd';
interface MyFormValues {
    userName: string;
    passWord: string;
}

export const LoginPage: React.FC<{}> = () => {
    const initialValues: MyFormValues = { userName: "", passWord: "" };
    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values, actions) => {
                   const resPonse:any=userLogin(values);
                   console.log("res",resPonse)
                   if(resPonse?.data){
                    console.log("userInfo",resPonse)
                   }else{
                    message.error('login failed');
                   }
                    actions.setSubmitting(false);
                }}
            >
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="userName" name="userName" placeholder="user-name" />
                    <br />
                    <label htmlFor="passWord">passWord</label>
                    <Field type="password" id="passWord" name="passWord" placeholder="passWord" />
                    <button type="submit">Login</button>
                </Form>
            </Formik>
        </div>
    );
};
