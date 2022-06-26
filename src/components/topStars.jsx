import styled from 'styled-components';

import topstars from '../assets/images/topstars.svg';

const Container = styled.div`
	position: absolute;
	top: 13%;
	width: 100%;

	.img-container {
		width: 72%;
		margin: auto;
	}

	img {
		width: 100%;
	}

	@media (max-width: 576px) {
		display: none;
	}
`;

const TopStars = () => {
	return (
		<Container>
			<div className='img-container'>
				<img src={topstars} alt='top stars' />
			</div>
		</Container>
	);
};

export default TopStars;
