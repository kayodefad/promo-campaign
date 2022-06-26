import styled, { keyframes } from 'styled-components';

import chevronRight from '../assets/images/chevron-right.svg';

import HeadLine from './headline';
import HowToPlay from './howToPlay';
import SubHeadline from './subHeadline';

const animate = keyframes`
 from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
`;

const Container = styled.section`
	width: 90%;
	margin: auto;
	height: 65vh;
	max-height: 700px;
	display: flex;
	flex-direction: column;
	gap: 15px;
	justify-content: space-between;
	position: relative;
	z-index: 2;

	@media (max-height: 654px) {
		overflow: auto;
	}
`;

const PlayButton = styled.button`
	font-family: 'Inter', sans-serif;
	display: flex;
	align-items: center;
	color: white;
	background-color: #ecab03;
	border: none;
	border-radius: 4px;
	padding: 16px 40px;
	font-size: 13px;
	margin: 0 auto;
	transition: opacity 0.5s ease-in-out;
	cursor: pointer;
	animation: ${animate} 0.5s ease-in;
	animation-delay: 0.05s;

	&:hover {
		opacity: 0.8;
	}

	img {
		width: 8px;
		margin-left: 1.3rem;
		transform: translateX(13px);
	}

	@media (max-width: 300px) {
		padding: 12px 30px;
	}
`;

const Hero = () => {
	return (
		<Container>
			<div>
				<HeadLine />
			</div>
			<div>
				<SubHeadline />
			</div>
			<div>
				<HowToPlay />
			</div>
			<PlayButton>
				Play the Game <img src={chevronRight} alt='right chevron' />
			</PlayButton>
		</Container>
	);
};

export default Hero;
