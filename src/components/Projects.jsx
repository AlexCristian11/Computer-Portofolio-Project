import React from 'react';
import Window from './Window';

function Projects(props) {
  return (
    <div>
        <Window name="PROJECTS" show={props.show} data={props.data}/>
    </div>
  )
}

export default Projects