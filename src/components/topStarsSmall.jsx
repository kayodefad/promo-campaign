import styled from 'styled-components';
import topStarsSmall from '../assets/images/topstarsmobile.svg';

const Container = styled.div`
	display: none;
	position: absolute;
	height: 100vh;
	width: 100%;

	img {
		width: 100%;
	}

	@media (max-width: 576px) {
		display: block;
	}
`;

const TopStarsSmall = () => {
	return (
		<Container>
			<img className='top-stars' src={topStarsSmall} alt='top stars small' />
		</Container>
	);
};

export default TopStarsSmall;
