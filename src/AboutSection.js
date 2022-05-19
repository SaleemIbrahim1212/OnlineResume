import './App.css';
import Saleem from './sibrahim.png';
import './About.css'



function AboutSection (props)
{
    

    
    
    
  return ( 
      
       <div style = {props.Style}>
      
            <img className= "profilepicture" src = {Saleem} alt= "Saleem Picture"/> 
    
            <h2 align = "center"> Saleem </h2>  
            <h5 align ="center"> Computer Science student, Developer, and tech enthusiast 👨🏾‍💻 </h5>
    
      
            <p  className= "SummaryText">Hi, my name is Saleem; I am a Computer Science student at Wilfrid Laurier University. I have a deep love for technology and innovation, which has led me to pursue internships in tech startups, data analysis, and teaching roles at the university level! </p>
                  




        </div>
      
      

      

  );
}

export default AboutSection;