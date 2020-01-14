import React from 'react'
import { Container } from 'components/common'
import { Wrapper, SkillsWrapper, Details } from './styles'

export const TechSkills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
   
      <Details>
      <h1 className="Skills_Header">Technical Skills</h1>
        <div className="container-1">
        
        <div className="Skills_Category">
            <h2 className="Skills_Label">Languages</h2>
            <ul className="Menu">
                <li className="Skills_Item">Javascript (ES6+)</li>
                <li className="Skills_Item">HTML5</li>
                <li className="Skills_Item">CSS/(S)ASS</li>
                <li className="Skills_Item">Python</li>
                <li className="Skills_Item">SQL</li>
                <li className="Skills_Item">C++ (learning in progress)</li>
            </ul>
            </div>

            <div className="Skills_Category">
            <h2 className="Skills_Label">Frameworks</h2>
            <ul>
                <li className="Skills_Item">React</li>
                <li className="Skills_Item">Express</li>
                <li className="Skills_Item">Node.js</li>
                <li className="Skills_Item">Ruby on Rails</li>
                <li className="Skills_Item">ASP.NET (learning in progress)</li>
            </ul>
            </div>

            <div className="Skills_Category">
            <h2 className="Skills_Label">Tools</h2>
            <ul>
                <li className="Skills_Item">Bash</li>
                <li className="Skills_Item">Git/GitHub</li>
                <li className="Skills_Item">Chrome Dev Tools</li>
                <li className="Skills_Item">Postman</li>
                <li className="Skills_Item">MongoDB</li>
                <li className="Skills_Item">Firebase</li>
            </ul>
            </div>
            </div>

       
      </Details>
    </SkillsWrapper>
  </Wrapper>
)