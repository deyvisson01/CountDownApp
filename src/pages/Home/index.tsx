import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/Button';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import { selectEvents, setEvents } from '../../store/authSlice';
import Item from './Item';
import { Container, ContainerButton, Content, ListEvents, Title, TitleModal } from './styles';


function Home() {

  const dispatch = useDispatch()
  const events = useSelector(selectEvents)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [idEvent, setIdEvent] = useState(0)
  const [titleEvent, setTitleEvent] = useState(0)

  const onDelete = (event: any) => {
    setShowDeleteModal(true)
    setIdEvent(event.id)
    setTitleEvent(event.title)
  }

  const removeEvent = () => {
    var newEvents = events.filter(event => event.id !== idEvent)
    dispatch(setEvents(newEvents))
    setShowDeleteModal(false)
  }

  //console.log(events)
  return (
    <>
      <Container>
        <Header />
        <Content>
          <ListEvents>
            <Title>Eventos</Title>
            {events && events.map(event => (
              <Item title={event.title} description={event.description} date={event.date} onDelete={() =>  onDelete(event)} />
            ))}
          </ListEvents>
        </Content>
      </Container>
      {showDeleteModal && (
        <Modal
          maxWidth={'50%'}
          width={'40%'}
          title="Excluir evento"
          onClose={() => setShowDeleteModal(false)}
        >
          <>
            <TitleModal>
              Deseja excluir o evento de título: <span>{titleEvent}</span> ?
            </TitleModal>

            <ContainerButton>
              <Button
              children="Cancelar"
              disabled={false}
              type="outlined"
              loading={false}
              onClick={() => setShowDeleteModal(false)}
            />
              <Button
              children="Excluir"
              disabled={false}
              type="danger"
              loading={false}
              onClick={() => removeEvent()}
            />

            </ContainerButton>
          </>
        </Modal>
      )}
    </>
  );
}

export default Home;
