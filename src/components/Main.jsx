import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import data from '../data';
import Window from './Window';

function Main() {

  const [dataState, setDataState] = useState(data);

  // console.log(dataState);

  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow(prevState => !prevState);
  }

  console.log(show);



  return (
    <MainStyle>
        <Icon name="PROJECTS" toggle={toggleShow} />
        <Icon name="ABOUT_ME" toggle={toggleShow}/>
        <Icon name="SKILLS" toggle={toggleShow}/>
        <Window name="PROJECTS" show={show}/>
    </MainStyle>
  )
}

const MainStyle = styled.div`
    display: grid;
    grid-template-columns: 200px 200px;
    grid-template-rows: 200px 200px;
    padding: 4rem;
`

export default Main