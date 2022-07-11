import * as React from "react";
import { Formik, Form, Field } from "formik";
import axios from 'axios';

interface MyFormValues {
    userName: string;
    passWord: string;
}

export const LoginPage: React.FC<{}> = () => {
    const initialValues: MyFormValues = { userName: "", passWord: "" };
    return (
        <div>
            <h1>My Example</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values, actions) => {
                    console.log({ values, actions });
                    await axios.post(`http://localhost:8000/user/new-user/login`,values).then((res:any)=>{
                        console.log(res.data)
                    }).catch((err:any)=>{
                        console.log(err)
                    })
                    actions.setSubmitting(false);
                }}
            >
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="userName" name="userName" placeholder="user-name" />
                    <br />
                    <label htmlFor="passWord">passWord</label>
                    <Field type="password" id="passWord" name="passWord" placeholder="passWord" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};
