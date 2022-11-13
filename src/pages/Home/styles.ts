import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
export const Content = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`

export const ListEvents = styled.div`
  width: 40%;
  height: 100%;
  margin: 80px 0 20px 0;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: var(--border-radius-md);
  box-shadow: var(--box-shadow-level-4);

`
export const Title = styled.h1`
  font-size: var(--size-40);
  color: var(--color-blue-base);
`
