import React, { FC } from 'react'

import { Container, Content, Description, DisplayDate, Title } from './styles';
import * as dayjs from 'dayjs'
import { getDays } from '../../../utils/helpers';

import Trash from '../../../assets/trash.png'

type Props = {
  title: string
  description: string
  date: string
}

const Item = (props: Props) => {

  return (
    <>
      <Container>
        <Content>
          <Title>{props.title}</Title>
          <Description>{props.description}</Description>
          <DisplayDate>{dayjs(props.date).format('DD/MM/YYYY')} - {getDays(props.date)} dias restantes</DisplayDate>
        </Content>
        <img src={Trash} alt="Deletar evento" />
      </Container>
    </>
  )
}

export default Item
