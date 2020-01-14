import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const FeaturedProjects = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
      </Thumbnail>
      <Details>
        <h1>Featured Project</h1>
        <div>
          <h2 className="Featured_Title"> Project Name : CampBase</h2>
          <p className="Featured_Text"> Online project management application that allows teams to create, edit and collaborate on exciting new team based projects.</p>
          <p className="Featured_Text"> Technologies used : ReactJS, Ruby on Rails, Devise, JWT, Firebase</p>
        </div>
      </Details>
        </SkillsWrapper>
  </Wrapper>
)
