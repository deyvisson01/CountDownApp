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

  .div-title{
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    img{
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }

`
export const Title = styled.h1`
  font-size: var(--size-40);
  color: var(--color-blue-base);
`

export const TitleModal = styled.h2`
  width: 100%;
  text-align: center;
  font-size: var(--size-24);
  color: var(--white);
  margin: 20px 0;

  span{
    font-size: var(--size-24);
    color: var(--text-danger);
  }
`

export const ContainerButton = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;
`

export const ContainerForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;

  *:after{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
  }
  input[type="date"]{
      background-color: var(--color-blue-base);
      margin: 20px;
      padding: 15px;
      position: relative;

      color: #ffffff;
      font-size: 18px;
      border: none;
      outline: none;
      border-radius: 5px;
  }
  ::-webkit-calendar-picker-indicator{
      background-color: #ffffff;
      padding: 5px;
      cursor: pointer;
      border-radius: 3px;
  }
`
export const ContainerCheckbox = styled.div`
  display: flex;
  align-items: center;
  place-content: center;
  column-gap: 30px;

  input[type='radio'] {
    display: none;
  }

  .radio-container label {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }

  .custom-radio {
    border: 1px solid #fff;
    width: 30px;
    height: 30px;
    display: grid;
    place-content: center;
    border-radius: 50%;
  }

  .custom-radio,
  span {
    transition: 0.5s ease;
    color: #fff;
  }

  .custom-radio span {
    content: '';
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
  }

  input[type='radio']:checked + .custom-radio {
    border-color: var(--color-blue-base);
  }

  input[type='radio']:checked + .custom-radio span {
    background: var(--color-blue-base);
  }
`
