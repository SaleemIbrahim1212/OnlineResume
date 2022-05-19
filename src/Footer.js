import React, {useState} from 'react';
import './App.css'
import linkedin from './linkedin.png'
import github from './github.png'
import emailicon from './emailicon.png'
import {bounce} from 'react-animations';
import Radium, {StyleRoot} from 'radium';

function Footer(props) {
const styles = {
  bounce: {
    "animation": 'x 2s',
    "animationName": Radium.keyframes(bounce, 'bounce')
  },


} 

return (

    <StyleRoot>
      
    <div>
    
    
      <div className = "displayFooter" />

      <div className = { props.isDarkvar ? 'footerDark' : 'footerLight'} >

             < a className="Links" href = "https://www.linkedin.com/in/saleem-ibrahim-0162a8121/" target = "_blank" > <img style={styles.bounce} src = {linkedin}/>  </a>
        < a className="Links" href = "https://github.com/SaleemIbrahim1212" target = "_blank"  >  <img  style= {styles.bounce} src =  {github}/> </a>
      < a className="Links" href="mailto:saleemibramza@gmail.com" target = "_blank"  > < img style = {styles.bounce} src = {emailicon} /> </a>
      </div>
    </div>
    
    </StyleRoot>
  );
}

export default Footer