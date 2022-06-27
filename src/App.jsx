import styled from 'styled-components';
import Header from './components/header';
import bgImage from './assets/images/bgImage.png';
import Rays from './components/rays';
import Hero from './components/hero';
import Coins from './components/coins';
import TopStars from './components/topStars';
import TopStarsSmall from './components/topStarsSmall';

const Container = styled.div`
	height: 100vh;
	background: url(${bgImage}), #141531 center center/cover;
	color: #fff;
	overflow: hidden;
	position: relative;
`;

const App = () => {
	return (
		<Container>
			<Rays />
			<Header />
			<TopStars />
			<TopStarsSmall />
			<Hero />
			<Coins />
		</Container>
	);
};

export default App;
