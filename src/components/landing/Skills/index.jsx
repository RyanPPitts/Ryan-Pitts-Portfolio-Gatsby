import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
// import dev from 'assets/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      {/* <Thumbnail>
        <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
      </Thumbnail> */}
      <Details>
        <h1>Background</h1>
        <p>
         I am currently working as an e-commerce specialist for a growing manufacturing startup called Fantastapack.com.  I manage a variety of e-commerce based projects and assist in launching new online initiatives.  I recently graduated
          from <a href="https://generalassemb.ly">General Assembly </a>.  I completed the full-time, software engineering immersive program in December 2019 and I'm excited to take the next steps in my developer career.
          </p>
         <p>
         As a software engineer , I plan on continuing my education and growing my skillset both on the job and at home.  
        I aspire to work with and contribute to the growing community of developers in the Pacific Northwest.   
        I'm passionate about building online applications that will create a high impact on business goals.  
        {/* In addition, I want to facilitate fast, scalable online applications that will create exponential growth fo in the companies growth. */}
         </p>
        {/* <Button as={AnchorLink} href="#contact">
          Want to Learn More?
        </Button> */}
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
