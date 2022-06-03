# Computer Portofolio Project

## About

This project is meant to be a personal portofolio, but should give you the feeling of using an old computer desktop. You will be presented with an simple desktop with a few icons that, when clicked will open a window respective to the icon clicked. 

## Main.jsx

The Main.jsx file contains a state that has the data from “data.js” stored, another state that keeps track of the name of the icon clicked in order to know what window needs to be rendered. And 5 functions:

Toggle the visibility of the window

```jsx
function toggleShow() {
    setShow(prevState => !prevState);
  }
```

Closes the window when the red dot is clicked

```jsx
function closeWindow() {
    setShow(prevState => false);
  }
```

The 3 functions with which the name is changed and the correct window will be rendered

```jsx
function changeToProjects() {
    setName("PROJECTS");
  }
  function changeToAbout() {
    setName("ABOUT ME");
  }
  function changeToSkills() {
    setName("SKILLS");
  }
```

The JSX code: 

```jsx
<Icon name="PROJECTS" toggle={toggleShow} show={show} data={dataState} change={changeToProjects}/>
<Icon name="ABOUT_ME" toggle={toggleShow} show={show} data={dataState} change={changeToAbout}/>
<Icon name="SKILLS" toggle={toggleShow} show={show} data={dataState} change={changeToSkills}/>
<Window name={name} show={show} data={dataState} close={closeWindow}/>
```

## Icon.jsx

The Icon component is reused and so it has some logic on how to display each icon. I used conditional rendering to achieve this: 

```jsx
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
```

## Window.jsx

The biggest component, with the most work done for styling and rendering. 

For each section I used conditional rendering, so that if the name corresponds for example to ‘projects’, the projects section will render.

```jsx
{name === "PROJECTS" &&
   <div className="projects-container">
        {dataProjects.map((project) =>
           <div className="main-content" key={project.id} style={{
               backgroundImage: process.env.PUBLIC_URL+`/img/${project.coverImg}`,
               backgroundRepeat: 'no-repeat',
            }}>
               s<h3>{project.name}</h3>
               <p>{project.description}</p>
               <a href={project.url} alt="Github link" target="_blank" rel="noopener noreferrer"><FaGithub size="30px" className="icon-gh"/></a>
           </div>
         )}
    </div>
}

// for some reason, the background image doesn't work so it doesn't affect the overall look
```

The same logic applies to the other sections, each of them having a different styling and placement of elements.