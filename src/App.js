import './App.css';
import React, {useState} from 'react';
import Footer from './Footer.js'
import DarkmodeToggle from './darkmodetoggle.webp'
import LightmodeToggle from './light-mode-toggle.png'
import AboutSection from './AboutSection.js'
import Projects from './Projects.js'
import Experience from './Experience.js'
import Education from './Education.js'







function App() {
    
    const image = LightmodeToggle
    const Page = "About"
    const isDark = true

  const mystyle = {
  backgroundColor: "#282c34",
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
   color: 'white',

    };
    
    
const [Style, setStyle] = useState(mystyle); //For light/dark mode switdddching
const [CurrentPage, ChangePage]  = useState(Page); // To swithc between pagrd
const [isDarkvar, ChangeLight ] = useState(isDark);
const [ImageVar, ChangeImage] = useState(image);



const LightMode  = () => {

    console.log (isDarkvar)
    
    if (Style.backgroundColor === "#282c34")
        {

     setStyle(  {
  backgroundColor: "#F0FFF0",
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'black',
     })
     ChangeLight(false)
     ChangeImage(DarkmodeToggle)
        }

    else 
        {
    setStyle(  {
  backgroundColor: "#282c34",
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white',
     })
            ChangeLight(true)
            ChangeImage(LightmodeToggle)

        }
    
    };

    
const ChangePages = () => 
{

    
    if (CurrentPage === "About")
    {
         return <AboutSection style = {Style} />
              
    }
         
    else if (CurrentPage ==="Projects")
    {
                 
    
        return <Projects style = {Style} />
    }
        
        
    
    else if (CurrentPage ==="Education")
    {
                 
    
        return <Education style = {Style} />
    }
        
  else 
    {
        
        return <Experience style = {Style} />
    }
        
    
        
}

function ToAbout ()
{
    ChangePage("About")
        
}
        
function ToProjects ()
{
    ChangePage("Projects")
        
}



function toEducation ()
{
    ChangePage("Education")
}
        

function ToExperience ()
{
    ChangePage("Experience") 

}
    
return ( 

     <div style={Style}  >
        <ul>
          <li><a onClick= {ToAbout} >About </a></li>
          <li><a  onClick= {ToProjects}>Projects</a></li>
          <li><a onClick = {toEducation} >Education</a></li>
          <li><a onClick = {ToExperience} >Experience</a></li>
          <li className="MoveRight"> <img src= {ImageVar} onClick ={LightMode} alt="Toggle" className = "ImageToggle"
         /> < /li>
        
        
        </ul> 
    {ChangePages()}
      <Footer isDarkvar = {isDarkvar} />

      </div>
    
  );
}

export default App;
