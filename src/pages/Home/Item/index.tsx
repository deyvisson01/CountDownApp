import React, { FC } from 'react'

import { Container, Content, DisplayDate, Title } from './styles';
import * as dayjs from 'dayjs'
import { getDays } from '../../../utils/helpers';

import Trash from '../../../assets/trash.png'

type Props = {
  title: string
  description: string
  date: string
  onDelete: () => void
}

const Item = (props: Props) => {

  return (
    <>
      <Container>
        <Content>
          <Title>{props.title}</Title>
          <textarea disabled={true} value={props.description} />
          <DisplayDate>{dayjs(props.date).format('DD/MM/YYYY')} - {getDays(props.date)} dias restantes</DisplayDate>
        </Content>
        <img src={Trash} alt="Deletar evento" onClick={props.onDelete}/>
      </Container>
    </>
  )
}

export default Item
