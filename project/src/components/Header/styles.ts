import styled from 'styled-components'

export const Container = styled.header`
  background-color: var(--blue);
  display: flex;
  justify-content: center;
  `

export const Content = styled.div`
  width: 135.5rem;
  padding: 8rem 2rem 23rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`

export const Buttons = styled.div`

display: flex;
align-items: center;
gap: 2.5rem;

  label{
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
    
    span {
      color: var(--textwhite);
      font-size: 1.4rem;
    }
  
    .switchWrapper{
      display: inline-block;
      width: 30px;
      height: 15px;
      position: relative;
  
      input{
        opacity: 0;
        width: 0;
        height: 0;
      }
  
      span{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 40px;
        background-color: rgba(255, 255, 255, 0.1);
      }
  
      span::before{
        content: "";
        width: 15px;
        height: 15px;
        position: absolute;
        left: 0;
        bottom: 0;
        border-radius: 50%;
        transition: 0.3s all ease;
        background-color: var(--shape);
      }
  
      input:checked + .switchButton::before{
        transform: translateX(15px);
      }
    }

  }
  
  button{
    color: var(--textwhite);
    font-size: 1.4rem;
    padding: 1.2rem 2.5rem;
    background: rgba(155, 201, 255, 0.1);
    border: solid 1px var(--blueLight);
    border-radius: 0.5rem;
    transition: 0.3s;
  }
  button:hover{
    color: var(--textBlack);
    background: var(--blueLight);
  }

`