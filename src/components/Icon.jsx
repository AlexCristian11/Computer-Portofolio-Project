import React from 'react';
import styled from 'styled-components';
import { AiFillFolderOpen } from 'react-icons/ai';
import Window from './Window';

function Icon(props) {

  

  return (
    <IconStyle onDoubleClick={props.toggle}>
        <AiFillFolderOpen size="60" className="icon"/>
        <h4 className="title">{props.name}</h4>
    </IconStyle>
  )
}

const IconStyle = styled.div`
    height: 100px;
    width: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    

    :active * {
      background-color: #032354;
      color: #fff;
    }

`

export default Icon