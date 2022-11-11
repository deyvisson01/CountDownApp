import styled from 'styled-components'

interface Props {
  background?: string
}

export const Container = styled.div<Props>`
  display: flex;
  justify-content: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    width: 12.5rem;
    height: 2.3rem;

    cursor: pointer;

    font-size: 0.8rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    text-transform: uppercase;

    transition: background 0.5s;

    &.disabled {
      opacity: 0.53;
      cursor: default;
    }

    :focus {
      outline: none;
    }

    &.primary {
      background-color: #03dd8a;
      color: #fff;
      border: 1px solid #03dd8a;

      img {
        margin-left: 0;
        margin-right: 0.3rem;
      }

      :not(:disabled):hover {
        opacity: 0.8;
      }
    }

    &.outlined {
      background-color: #FFF;
      color: #03dd8a;
      border: 1px solid #03dd8a;

      img {
        margin-left: 0;
        margin-right: 0.3rem;
      }

      :not(:disabled):hover {
        background-color: #03dd8a;
        color: var(--white);
      }
    }

    &.danger {
      background-color: #FFF;
      color: #ee5d6d;
      border: 1px solid #ee5d6d;

      :not(:disabled):hover {
        background-color: #ee5d6d;
        color: #FFF;
        border: 1px solid #ee5d6d;
      }
    }
  }
`
