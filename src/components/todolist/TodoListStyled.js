import styled from "styled-components";

export const TodoListStyled = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #131415;
    flex-direction: column;
    width: 70%;
    height: 90%;


`

export const InputAndButtonContainerStyled = styled.div`

    display: flex;
    justify-content: center;

    gap: 10px;

    input {

        border: none;
        border-radius: 8px;
        padding: 5px 50px 5px 10px;
        background: white;
        color: black;

    }

    button {

        border: none;
        border-radius: 8px;
        padding: 10px 20px;
        background: white;
        color: black;
        cursor: pointer;

    }

`

export const ListStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
`

export const TodoValueStyled = styled.h4`
    font-size: 16px;
    color: white;
`

export const DeleteTodoStyled = styled.button`
    border: none;
    border-radius: 8px;
    height: fit-content;
    padding: 3px 8px;
    background: white;
    color: black;
    cursor: pointer;
`

export const TodoStyled = styled.div`

    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;

    border: 1px pointed white;
    border-radius: 8px;
`