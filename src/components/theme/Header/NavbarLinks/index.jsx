import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper } from './styles'

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		<AnchorLink href="#about">About Me</AnchorLink>
		<AnchorLink href="#projects">Projects</AnchorLink>
		{/* <AnchorLink href="#resume">Resume</AnchorLink> */}
	</Wrapper>
)

export default NavbarLinks
