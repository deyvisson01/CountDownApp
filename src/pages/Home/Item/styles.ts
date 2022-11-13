import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 10px 10px 20px;
  margin: 10px;
  border-radius: var(--border-radius-md);
  box-shadow: var(--box-shadow-level-1);
  border: 1px solid var(--color-blue-light);

  img{
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

`
export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  textarea{
    font-size: 12px;
    color: var(--color-blue-base);
    width: 100%;
    padding: 8px;
    margin: 10px 0;
    margin-top: 5px;

    font-weight: var(--font-weight-thin);

    border: 0.5px solid var(--color-blue-light);
    border-radius: var(--border-radius-md);

    &::placeholder {
      font-size: var(--size-16);
      font-weight: bold;
      color: #677094;
    }
  }

`

export const Title = styled.h1`
  font-size: var(--size-24);
  color: var(--color-blue-base);
`

export const DisplayDate = styled.span`
  font-size: var(--size-16);
  color: var(--color-blue-light);
`
