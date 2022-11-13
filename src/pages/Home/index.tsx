import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import * as dayjs from 'dayjs'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//assets
import Novo from '../../assets/novo.png'

//components
import Button from '../../components/Button';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import Item from './Item';
import { Container, ContainerButton, ContainerCheckbox, ContainerForm, Content, ListEvents, Title, TitleModal } from './styles';

//functions
import { selectEvents, setEvents ,AddEvents, RemoveEvents} from '../../store/authSlice';
import Input from '../../components/Input';
import { calcFutureDate, getRamdomValue } from '../../utils/helpers';


function Home() {

  const dispatch = useDispatch()
  const events = useSelector(selectEvents)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [idEvent, setIdEvent] = useState(0)
  const [titleEvent, setTitleEvent] = useState('')

  const [newEventTitle, setNewEventTitle] = useState('')
  const [newEventDescription, setNewEventDescription] = useState('')
  const [newEventDate, setNewEventDate] = useState('')
  const [newEventDays, setNewEventDays] = useState('')

  const [dateChecked, setDateChecked] = useState(false)

  const onDelete = (event: any) => {
    setShowDeleteModal(true)
    setIdEvent(event.id)
    setTitleEvent(event.title)
  }

  const cleanEvent = () => {
    setNewEventTitle('')
    setNewEventDescription('')
    setNewEventDate('')

    setIdEvent(0)
    setTitleEvent('')
  }

  const removeEvent = () => {
    dispatch(RemoveEvents(idEvent))
    setShowDeleteModal(false)
    cleanEvent()
  }

  const formNewEvent = () => {
    var newEvent = {
      id: getRamdomValue(),
      title: newEventTitle,
      description: newEventDescription,
      date: dateChecked ? calcFutureDate(parseInt(newEventDays)) : newEventDate
    }
    console.log(newEventDate)
    dispatch(AddEvents(newEvent))
    cleanEvent()
    setShowAddModal(false)
  }

  return (
    <>
      <ToastContainer />
      <Container>
        <Header />
        <Content>
          <ListEvents>
            <div className='div-title'><Title>Eventos</Title><img src={Novo} alt="Novo evento" onClick={() => setShowAddModal(true)}/></div>
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

      {showAddModal && (
        <Modal
          maxWidth={'50%'}
          width={'40%'}
          title="Novo evento"
          onClose={() => setShowAddModal(false)}
        >
          <ContainerForm>
            <Input
              width="500px"
              placeholder="Entre com o título do seu evento"
              error={''}
              defaultValue={newEventTitle}
              onChange={e => setNewEventTitle(e.target.value)}
            />
            <Input
              width="500px"
              placeholder="Alguma observação sobre seu evento?"
              error={''}
              defaultValue={newEventDescription}
              onChange={e => setNewEventDescription(e.target.value)}
            />

            <ContainerCheckbox>
              <div className="radio-container">
                <label htmlFor="radio">
                  <input checked={dateChecked} type="checkbox" id="radio" name="radio" onClick={() => setDateChecked(!dateChecked)}/>
                  <span>Entrar com quantidade de dias</span>
                </label>
              </div>
            </ContainerCheckbox>
            {dateChecked ?
              <>
                <Input
                  width="200px"
                  placeholder="Ex: 10"
                  error={''}
                  defaultValue={newEventDays}
                  onChange={e => setNewEventDays(e.target.value)}
                />
              </>
              :
              <>
                <input type="date" onChange={e => setNewEventDate(e.target.value)}/>
              </>
            }

            <ContainerButton>

              <Button
              children="Criar"
              disabled={false}
              type="primary"
              loading={false}
              onClick={() => formNewEvent()}
            />

            </ContainerButton>
          </ContainerForm>
        </Modal>
      )}
    </>
  );
}

export default Home;
