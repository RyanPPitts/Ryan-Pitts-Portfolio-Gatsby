import React from 'react'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import { Wrapper, IntroWrapper, Details } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1 className="Intro_greeting">Hello ! <span role="img" aria-label="squirt gun">
				 👨🏼‍💻
				</span></h1>
				<h2 className="Intro_header">
				I'm Ryan Pitts,
				a full-stack software engineer & experienced digital marketing specialist with over 10+ years of successfully growing ecommerce businesses</h2>

				<a className="Link Link--is-button Intro__button" href="mailto:ryanpitts26@gmail.com?subject=Ryan Pitts|Personal Site " target="_blank" 
				rel="noreferrer noopener">
				<Button className="intro_button">
				Get In Touch
				</Button>
				</a>
			</Details>
		 
		</IntroWrapper>
	</Wrapper>
)
