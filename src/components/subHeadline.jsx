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
	font-family: 'Inter', sans-serif;
	text-align: center;
	font-size: 1.25rem;

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

	.small {
		display: none;
	}

	@media (max-width: 576px) {
		font-size: 1rem;
		.small {
			display: block;
		}
		.large {
			display: none;
		}
	}

	@media (max-width: 300px) {
		font-size: 0.8rem;
	}
`;
const SubHeadline = () => {
	return (
		<Container>
			<div className='large'>
				<div className='wrapper'>
					<span className='top'>Stand a chance to win</span>
				</div>
				<div className='wrapper'>
					<span className='bottom'>
						<strong>N3,000,000</strong> everyday for the next 5 days
					</span>
				</div>
			</div>
			<div className='small'>
				<div className='wrapper'>
					<span className='top'>
						Stand a chance to win <strong>N3,000,000</strong>
					</span>
				</div>
				<div className='wrapper'>
					<span className='bottom'>everyday for the next 5 days</span>
				</div>
			</div>
		</Container>
	);
};

export default SubHeadline;
