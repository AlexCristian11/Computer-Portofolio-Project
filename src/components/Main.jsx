import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import data from '../data';
import Window from './Window';

function Main() {

  const [dataState, setDataState] = useState(data);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");

  function toggleShow() {
    setShow(prevState => !prevState);
  }

  function closeWindow() {
    setShow(prevState => false);
  }

  function changeToProjects() {
    setName("PROJECTS");
  }
  function changeToAbout() {
    setName("ABOUT ME");
  }
  function changeToSkills() {
    setName("SKILLS");
  }



  return (
    <MainStyle>
        <Icon name="PROJECTS" toggle={toggleShow} show={show} data={dataState} change={changeToProjects}/>
        <Icon name="ABOUT_ME" toggle={toggleShow} show={show} data={dataState} change={changeToAbout}/>
        <Icon name="SKILLS" toggle={toggleShow} show={show} data={dataState} change={changeToSkills}/>
        <Window name={name} show={show} data={dataState} close={closeWindow}/>
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
