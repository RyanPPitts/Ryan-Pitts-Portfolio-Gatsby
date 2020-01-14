import React from 'react'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const FeaturedProjects = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Ryan and I’m a Front End, Back End and Middle End developer :)"/>
      </Thumbnail>
      <Details>
        <h1>Featured Project</h1>
        <div>
          <h2 className="Featured_Title"> Project Name : CampBase</h2>
          <p className="Featured_Text"> Online project management application that allows teams to create, edit and collaborate on exciting new team based projects.</p>
          <p className="Featured_Text"> Technologies applied : ReactJS, Ruby on Rails, Devise and Bulma </p>
        </div>
      </Details>
        </SkillsWrapper>
  </Wrapper>
)
