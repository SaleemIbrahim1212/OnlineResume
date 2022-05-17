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
    animation: 'x 2s',
    animationName: Radium.keyframes(bounce, 'bounce')
  },
    
    bounce2:  {   
    animation: 'x 2s',
    animationName: Radium.keyframes(bounce, 'bounce')
},

   bounce3:    { 
    animation: 'x 2s',
    animationName: Radium.keyframes(bounce, 'bounce')
    }
} 

return (

    <StyleRoot>
      
    <div>
    
    
      <div className = "displayFooter" />

      <div className = { props.isDarkvar ? 'footerDark' : 'footerLight'} >

             < a href = "https://www.linkedin.com/in/saleem-ibrahim-0162a8121/" target = "_blank" > <img style={styles.bounce} src = {linkedin}/>  </a>
        < a style = {styles.bounce} href = "https://github.com/SaleemIbrahim1212" target = "_blank">  <img  style= {styles.bounce2} src =  {github}/> </a>
      < a href="mailto:saleemibramza@gmail.com" target = "_blank"> < img style = {styles.bounce3} src = {emailicon} /> </a> 
      </div>
    </div>
    
    </StyleRoot>
  );
}

export default Footer