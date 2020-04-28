import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 350px;
    text-align: left;
    background: #fff;
    padding: 40px;

    img {
        width: 100%;
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        label {
            margin: 10px 0;
            font-size: 12px;
            font-weight: bold;
        }

        input {
            background: #fff;
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: rgba(0, 0, 0, 0.7);
            margin: 0 0 10px;

            &::placeholder {
                color: rgba(0, 0, 0, 0.2);
            }
        }
        button {
            margin: 5px 0 0;
            height: 44px;
            background: #715ec1;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.09, '#715ec1')};
            }
        }
    }
`;
