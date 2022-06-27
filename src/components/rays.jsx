import styled, { keyframes } from 'styled-components';

import triangleRay from '../assets/images/triangle-ray.svg';

const raysSpin = keyframes`
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
	animation: ${raysSpin} infinite 30s linear;
	pointer-events: none;

	.ray-wrapper {
		position: absolute;
		bottom: 0;
		width: 100%;
		transform-origin: bottom;
	}
`;

const Ray = styled.div`
	&.ray-position {
		transform: ${(props) => `rotate(${props.position * 40}deg)`};
	}
`;

const Rays = () => {
	return (
		<Container>
			{Array(9)
				.fill(null)
				.map((_, i) => {
					return (
						<Ray
							key={i}
							position={i}
							className='ray-wrapper ray-position'
						>
							<img
								className='ray'
								src={triangleRay}
								alt='triangleRay'
							/>
						</Ray>
					);
				})}
		</Container>
	);
};

export default Rays;
