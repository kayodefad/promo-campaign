import styled, { keyframes } from 'styled-components';

import coinpot from '../assets/images/coinpot.png';
import coinleft from '../assets/images/coinleft.svg';
import coinright from '../assets/images/coinright.svg';
import whiteStar from '../assets/images/white-star.svg';
import yellowStar from '../assets/images/yellow-star.svg';

import Ripple from './ripple';

const animateLeft = keyframes`
 from {
    transform: translateY(30px);
  }
  to {
    transform: translateY(-10px);
  }
`;

const animateRight = keyframes`
 from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(-20px);
  }
`;

const Container = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;

	.coins-wrapper {
		position: relative;
		width: 30%;
		margin: auto;

		@media (max-width: 576px) {
			width: 100%;
		}

		.coin-pot-wrapper {
			position: absolute;
			bottom: 0;
			z-index: 2;
			transform: translateY(10%);

			.coin-pot {
				width: 100%;
			}

			.coin-left {
				position: absolute;
				left: -20%;
				bottom: 70%;
				width: 35%;
				animation: ${animateLeft} 1.8s linear infinite alternate;
			}
			.coin-right {
				position: absolute;
				right: -18%;
				bottom: 40%;
				width: 25%;
				animation: ${animateRight} 1.7s linear infinite alternate;
			}
			.yellow-star {
				position: absolute;
				bottom: 15%;
				left: -25%;
			}
			.white-star {
				position: absolute;
				bottom: 150%;
				left: -28%;
			}
		}
	}
`;

const Coins = () => {
	return (
		<Container className='coins-container'>
			<div className='coins-wrapper'>
				<div className='coin-pot-wrapper'>
					<Ripple left={-10} delay={5} image='star-group.png' />
					<Ripple left={20} delay={3} image='dot.svg' />
					<Ripple left={50} delay={2} image='star-group.png' />
					<Ripple left={80} delay={4} image='star.png' />
					<Ripple left={110} delay={1} image='star-group.png' />
					<img className='white-star' src={whiteStar} alt='white star' />
					<img className='yellow-star' src={yellowStar} alt='yellow star' />
					<img className='coin-pot' src={coinpot} alt='coin pot' />
					<img className='coin-left' src={coinleft} alt='coin left' />
					<img className='coin-right' src={coinright} alt='coin right' />
				</div>
			</div>
		</Container>
	);
};

export default Coins;
