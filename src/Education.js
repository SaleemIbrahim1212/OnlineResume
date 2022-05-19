
import React, {useState} from 'react';
import CIC from './CIC.png'
import laurier from './laurier.png'
import './Education.css'
import {Modalex} from './Modals'



function Education (props)
{



    return (
      <div>
            <h3 align= "center"> High school and University </h3>
     < div className= "SummaryText"> <p align ="center">I came to Canada in 2015, where I attended High school at Columbia International College, spending three years before eventually applying and getting accepted in the Computer Science and Psychology program at Wilfrid Laurier University.
          Hover over each tile to check out my experiences, records and all the good stuff</p>  </div>

          <div className = "column">
        <Modalex image = {CIC} />
              <Modalex image ={laurier} />


       
        </div>

      
      </div>



      
      
      

      

  );
}

export default Education;