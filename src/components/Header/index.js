import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/fastfeet-logo.png';

export default function Header() {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.user.profile);
    function handleSignOut() {
        dispatch(signOut());
    }
    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="Fastfeet" />
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>
                <aside>
                    <Profile>
                        <div>
                            <strong>{profile.name}</strong>
                            <button type="button" onClick={handleSignOut}>
                                Sair
                            </button>
                        </div>
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
