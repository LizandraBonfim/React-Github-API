import styled from 'styled-components';

const Container = styled.div`
    max-width: 700px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 2px rgba(0, 0,0,0.1);
    padding: 30px;
    margin: 80px auto;

    h1{
        font-size: 20px;
        display: flex;
        align-items: center;
        flex-direction: row;

        /* svg e o icone, esta aplicando margin do icon ate o h1*/
        svg{
            margin-right: 10px;

        }

    }



`;

export default Container;
