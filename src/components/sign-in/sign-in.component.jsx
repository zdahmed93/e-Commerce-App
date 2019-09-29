import React, { useState } from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {SignInWithGoogle, auth} from '../../firebase/firebase.utils';

export default function SignIn() {
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    })
    function handleChange(event) {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value
        })
    }
    async function handleSubmit(event) {
        event.preventDefault();
        const {email, password} = formValues;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setFormValues({
                email: '',
                password: ''
            })
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    value={formValues.email}
                    handleChange={handleChange}
                    label="E-mail"
                />
                <FormInput
                    type="password"
                    name="password"
                    value={formValues.password}
                    handleChange={handleChange}
                    label="Password"
                />
                <div className="buttons">
                <CustomButton type="submit">
                    SIGN IN
                </CustomButton>
                <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
                    SIGN IN With Google
                </CustomButton>
                </div>
            </form>
        </div>
    );
}