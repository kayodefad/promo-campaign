import styled from 'styled-components';
import Header from './components/header';
import bgImage from './assets/images/bgImage.png';
import Gradients from './components/gradients';
import Hero from './components/hero';
import Coins from './components/coins';
import TopStars from './components/topStars';

const Container = styled.div`
	height: 100vh;
	background: url(${bgImage}) center center/cover;
	color: #fff;
	overflow: hidden;
	position: relative;
`;

const App = () => {
	return (
		<Container>
			<Header />
			<TopStars />
			<Hero />
			<Coins />
			<Gradients />
		</Container>
	);
};

export default App;
