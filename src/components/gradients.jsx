import styled, { keyframes } from 'styled-components';
import triangleGradient from '../assets/images/triangle-gradient.svg';

const gradientsSpin = keyframes`
 from {
    transform: rotate(0deg);
    transform-origin: bottom;
  }
  to {
    transform: rotate(-360deg);
    transform-origin: bottom;
  }
`;

const Container = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	text-align: center;
	height: inherit;
	animation: ${gradientsSpin} infinite 30s linear;
	pointer-events: none;

	.gradient-wrapper {
		position: absolute;
		bottom: 0;
		width: 100%;
		transform-origin: bottom;
	}
`;

const Gradient = styled.div`
	&.gradient-position {
		transform: ${(props) => `rotate(${props.position * 40}deg)`};
	}
`;

const Gradients = () => {
	return (
		<Container>
			{Array(9)
				.fill(null)
				.map((_, i) => {
					return (
						<Gradient
							key={i}
							position={i}
							className='gradient-wrapper gradient-position'
						>
							<img
								className='gradient'
								src={triangleGradient}
								alt='triangleGradient'
							/>
						</Gradient>
					);
				})}
		</Container>
	);
};

export default Gradients;
