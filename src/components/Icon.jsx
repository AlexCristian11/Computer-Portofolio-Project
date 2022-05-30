import React from 'react';
import styled from 'styled-components';
import { AiFillFolderOpen, AiFillFolder, AiFillFolderAdd } from 'react-icons/ai';



function Icon(props) {

  const name = props.name;

  return (
    <IconStyle onDoubleClick={props.toggle}>
      {name === "PROJECTS" && 
        <AiFillFolderAdd size="60" className="icon" onDoubleClick={props.change}/>
      }
      {name === "ABOUT_ME" && 
        <AiFillFolderOpen size="60" className="icon" onDoubleClick={props.change}/>
      }
      {name === "SKILLS" && 
        <AiFillFolder size="60" className="icon" onDoubleClick={props.change}/>
      }
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