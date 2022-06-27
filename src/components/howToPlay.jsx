import styled, { keyframes } from 'styled-components';

import bulb from '../assets/images/bulb.svg';

const animate = keyframes`
 from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
`;

const Container = styled.div`
	font-family: 'Inter', sans-serif;
	width: 400px;
	margin: auto;
	padding: 1.3rem;
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 0.39) -213.5%,
		rgba(255, 255, 255, 0) 100%
	);
	box-shadow: inset 0px -1px 11px rgba(255, 255, 255, 0.17),
		inset 0px 2px 0px rgba(255, 255, 255, 0.24);
	border-radius: 8px;
	animation: ${animate} 0.5s ease-in;

	.heading {
		text-align: center;
		font-weight: bold;
		font-size: 14px;
		margin-bottom: 1rem;
	}

	.steps {
		list-style: none;
		font-size: 13px;
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	.sounds {
		font-size: 13px;
		margin-top: 10px;
	}

	.tagline {
		background: rgba(0, 0, 0, 0.3);
		border-radius: 10px;
		padding: 10px;
		margin-top: 16px;
		display: flex;
		align-items: flex-start;
		gap: 7px;
		font-size: 11.5px;
		line-height: 1rem;
	}

	@media (max-width: 576px) {
		width: 100%;
	}

	@media (max-width: 300px) {
		padding: 1rem;
		.heading {
			font-size: 12px;
			margin-bottom: 0.8rem;
		}

		.steps {
			font-size: 11px;
		}

		.sounds {
			font-size: 11px;
		}

		.tagline {
			padding: 8px;
			margin-top: 15px;
			gap: 6px;
			font-size: 9.5px;
		}
	}
`;

const HowToPlay = () => {
	return (
		<Container>
			<h3 className='heading'>🚀 How To Play</h3>
			<ul className='steps'>
				<li>1. Guess the right combination of numbers</li>
				<li>
					2. Win <strong>N3,000,000</strong> instantly
				</li>
			</ul>
			<p className='sounds'>
				Sounds unbelievable? Well, guess right & see for yourself!
			</p>
			<div className='tagline'>
				<img src={bulb} alt='bulb' />
				<p>
					Think well before you guess. You have only 2 attempts per day and even
					after you win, you can come back the next day to try for another
					jackpot!
				</p>
			</div>
		</Container>
	);
};

export default HowToPlay;
