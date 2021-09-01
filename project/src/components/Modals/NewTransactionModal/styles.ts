import styled from 'styled-components';

export const Container = styled.form`

  h2 {
    color: var(--textBlack);
    font-size: 2.4rem;
    margin-bottom: 3.2rem;
  }

  input {
    padding: 2rem;
    width: 100%;
    display: block;
    font-size: 1.6rem;
    font-weight: 400;
    border: 2px solid var(--shape);
    border-radius: 0.5rem;
    outline: none;
    transition: 0.3s;

    &:focus {
      border: 2px solid var(--blue);
    }

    &::placeholder{
      opacity: 0.7;
    }

    & + input{
      margin-top: 1.6rem;
    }
  }

  button[type="submit"]{
    margin-top: 2.4rem;
    padding: 2rem;
    width: 100%;
    border: none;
    color: var(--textwhite);
    background: var(--green);
    font-size: 1.6rem;
    transition: 0.3s;
    

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const TransactionTypeContainer = styled.div`
margin: 2rem 0;
width: 100%;
display: flex;
flex-direction: row;
gap: 1rem;

button{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  padding: 2rem;
  font-size: 1.6rem;
  color: var(--textBlack);
  border: solid 1px #969CB2;
  background: transparent;
  transition: 0.3s;

  &:hover{
    border: solid 1px var(--blue);
  }

  img{
    height: 2.4rem
  }


}

`
