import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/fastfeet-logo.png';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Email inválido')
        .required('O e-mail é obrigatório!'),
    password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.loading);

    function handleSubmit({ email, password }) {
        dispatch(signInRequest(email, password));
    }

    return (
        <>
            <img src={logo} alt="Fastfeet" />
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input
                    name="email"
                    type="email"
                    label="SEU E-MAIL"
                    placeholder="exemplo@email.com"
                />
                <Input
                    name="password"
                    type="password"
                    label="SUA SENHA"
                    placeholder="*********"
                />
                <button type="submit">
                    {loading ? 'Carregando...' : 'Entrar no Sistema'}
                </button>
            </Form>
        </>
    );
}
