import React, {useState} from 'react';


const NavigationBar  = (props) => {

const [Style, setStyle] = useState(props.mystyles);
    

const LightMode  = () => {
    
    if (Style.backgroundColor === "#282c34")
        {
            alert("Light Mode ")

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
            
        }
    else 
        
        {
            alert("Dark mode")
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
            
            
}
    
    }; 
    return (   
        
         
        
        <ul>
          <li><a href="default.asp">About</a></li>
          <li><a href="news.asp">Projects</a></li>
          <li><a href="contact.asp">Education</a></li>
          <li><a href="about.asp">Experience</a></li>
          <li> <img src= "http://cdn.onlinewebfonts.com/svg/img_486760.png" onClick ={LightMode} /> < /li> 
        
        </ul>
    );
    

}

export default NavigationBar;