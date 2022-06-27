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

	@media (max-width: 300px) {
		font-size: 1.5rem;
		line-height: 1.5rem;
	}
`;

const HeadLine = () => {
	return (
		<Container>
			<div className='large'>
				<p className='wrapper'>
					<span className='light top'>Unlock to</span>
				</p>
				<p className='wrapper'>
					<span className='bottom'>
						<strong>Power your dreams!</strong>
					</span>
				</p>
			</div>
			<div className='small'>
				<p className='wrapper'>
					<span className='light top'>Unlock to</span>&nbsp;
					<span className='top'>
						<strong>Power</strong>
					</span>
				</p>
				<p className='wrapper'>
					<span className='bottom'>
						<strong>your dreams!</strong>
					</span>
				</p>
			</div>
		</Container>
	);
};

export default HeadLine;
