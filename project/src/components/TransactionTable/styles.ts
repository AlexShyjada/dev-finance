import styled  from "styled-components"
export const Container = styled.div`
  width: 100%;
  padding: 0 2rem;
  max-width: 135.5rem;
  margin: 7rem auto;

  table{
    width: 100%;
    border-spacing: 0 2rem;
    thead{
      tr{        
        th{
          background: var(--shape);
          font-weight: 400;
          text-align: left;
          color: var(--textBlack);
          &:first-child{
            padding: 2rem 0 2rem 2.5rem;
            border-radius:0.5rem 0 0 0.5rem ;
          }
          &:last-child{
            
            padding: 2rem 2.5rem 2rem 0;
            border-radius:0 0.5rem 0.5rem 0;
            text-align: center;
          }
        }
      }
    }
    tbody{
      tr{
        background: rgba(255, 255, 255, 0.5);
        transition: 0.3s;
        &:hover{
          background: var(--shape);
        }
        td{
          color: var(--textBlack);
          font-style: 500;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space:nowrap;
          &.deposit{
            color: var(--green);
          }
          &.withDraw{
            color: var(--red);
          }
          &:first-child{
            padding: 2rem 0 2rem 2.5rem;
            border-radius:0.5rem 0 0 0.5rem ;
          }
          &:last-child{
            padding: 2rem 2.5rem 2rem 0;
            border-radius:0 0.5rem 0.5rem 0;
            display: flex;
            justify-content: center;
          }
          button{
            display: flex;
            margin: 0 auto;
            background: transparent;
            transition: 0.3s;
            border: none;
            &:hover{
              opacity: 0.7;
            }
            img{

            }
          }
        }
      }
    }
  }

`