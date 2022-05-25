import React from 'react'
import styled from 'styled-components';

function Window(props) {

    const show = props.show;

  return (
    <>
    {show &&
        <Frame>
            <div className="bar">
                <div className="circle red"></div>
                <div className="circle yellow"></div>
                <div className="circle green"></div>
                <div className="line"></div>
                <h5>{props.name}</h5>
                <div className="line"></div>
            </div>
            <div className="separation"># # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # </div>
        </Frame>
    }
    </>
  )
}

const Frame = styled.div`
    height: 500px;
    width: 800px;
    background-color: #000;
    border-radius: 5px;
    position: absolute;
    top: 100px;
    left: 30%;

    .bar {
        height: 20px;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 5px 5px 5px 5px; 
    }

    .circle {
        width: 10px;
        height: 10px;
        border-radius: 50%;
    }

    .red {
        background-color: red;
    }
    .yellow {
        background-color: yellow;
    }
    .green {
        background-color: green;
    }

    .line {
        height: 2px;
        background-color: white;
        width: 40%;
    }

    h5 {
        color: white;
    }

    .separation {
        color: white;
        margin: 10px;
        text-align: center;
    }
`

export default Window