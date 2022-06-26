import styled, { keyframes } from 'styled-components';

const animate = keyframes`
 from {
    transform: translateY(50px);
  }
  to {
    transform: translateY(0);
  }
`;

const Container = styled.div`
	text-align: center;
	font-size: 3rem;
	line-height: 3rem;

	.wrapper {
		overflow: hidden;
		display: block;
	}

	.top {
		animation: ${animate} 0.5s ease-in;
		animation-delay: 0.2s;
		display: inline-block;
	}

	.bottom {
		animation: ${animate} 0.5s ease-in;
		animation-delay: 0.3s;
		display: inline-block;
	}

	.light {
		font-weight: 300;
	}

	.small {
		display: none;
	}

	@media (max-width: 576px) {
		font-size: 2rem;
		line-height: 2.4rem;

		.large {
			display: none;
		}
		.small {
			display: block;
		}
	}
`;

const HeadLine = () => {
	return (
		<Container>
			<div className='large'>
				<div className='wrapper'>
					<span className='light top'>Unlock to</span>
				</div>
				<div className='wrapper'>
					<span className='bottom'>
						<strong>Power your dreams!</strong>
					</span>
				</div>
			</div>
			<div className='small'>
				<div className='wrapper'>
					<span className='light top'>Unlock to</span>&nbsp;
					<span className='top'>
						<strong>Power</strong>
					</span>
				</div>
				<div className='wrapper'>
					<span className='bottom'>
						<strong>your dreams!</strong>
					</span>
				</div>
			</div>
		</Container>
	);
};

export default HeadLine;
