import styled from '@emotion/styled'

export const ButtonsList = styled.div`
    display:flex;
    gap:10px;
`
export const Button = styled.button`
    padding:10px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 10px;
    border: 0;
    color: #666;
    cursor: pointer;
    :hover {
        background-color: #00f;
        color: #fff;
    }
`