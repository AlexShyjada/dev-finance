import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  padding: 0 2rem;
  max-width: 135.5rem;
  margin: 0 auto;

`

export const Summary = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-top: -8rem;

  div{
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 0.5rem;
    background: var(--shape);

    header {
      color: var(--textBlack);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      font-size: 3.6rem;
      font-weight: 500;
    }

    &.cardTotal{
      background-color: var(--green);
      header {
        color: var(--textwhite);
      }

      strong {
        color: var(--textwhite);
      }
    }
  }

`

