import styled, { keyframes } from 'styled-components';

const animateGroup = keyframes`
    0% {
		transform: translate(0, 0);
		opacity: 1;
	}
	25% {
		transform: translate(-50px, -100px);
	}
	50% {
		transform: translate(0, -200px);
	}
	75% {
		transform: translate(-50px, -300px);
	}
	100% {
		transform: translate(0, -400px);
		opacity: 0;
	}
`;

const animate = keyframes`
    0% {
		width: 0px;
		height: 0px;
	}
	50% {
		opacity: 1;
	}
	100% {
		width: 30px;
		height: 30px;
		opacity: 0;
	}
`;

const animateImage = keyframes`
    0% {
		width: 5px;
		transform: rotate(0deg);
		opacity: 0;
	}
	50% {
		width: 30px;
	}
	100% {
		width: 5px;
		transform: rotate(-360deg);
		opacity: 1;
	}
`;

const Container = styled.div`
	width: 100px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: ${animateGroup} 7s linear infinite;
	animation-delay: ${(props) => `${props.delay}s`};
	position: absolute;
	bottom: -50%;
	left: ${(props) => `${props.left}%`};

	span {
		position: absolute;
		box-shadow: 0px 0px 10px 0px rgb(255, 230, 0);
		-webkit-box-shadow: 0px 0px 10px 0px rgb(255, 230, 0);
		-moz-box-shadow: 0px 0px 10px 0px rgb(255, 230, 0);
		border-radius: 50%;
		animation: ${animate} 5s linear infinite;
		animation-delay: calc(0.5s * var(--i));
		margin: 30px auto;
	}

	img {
		animation: ${animateImage} 7s infinite;
		animation-delay: 0.5s;
	}
`;

const Ripple = ({ left, delay, image }) => {
	return (
		<Container left={left} delay={delay} image={image}>
			<span style={{ '--i': 1 }}></span>
			<span style={{ '--i': 2 }}></span>
			<span style={{ '--i': 3 }}></span>
			<span style={{ '--i': 4 }}></span>
			<img src={require(`../assets/images/${image}`)} alt='star-group' />
		</Container>
	);
};

export default Ripple;
