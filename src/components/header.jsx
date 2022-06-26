import logo from '../assets/images/logo.svg';
import dateIcon from '../assets/images/date-icon.svg';
import styled from 'styled-components';

const Container = styled.header`
	width: 80%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 2rem auto 1.5rem auto;

	.date {
		display: flex;
		gap: 0.8rem;
		align-items: center;

		&-right {
			font-family: 'Inter', sans-serif;
			&-top {
				font-size: 18px;
			}
			&-bottom {
				color: rgba(255, 255, 255, 0.6);
				font-size: 14px;
				margin-top: 2px;
			}
		}

		@media (max-width: 576px) {
			&-right {
				&-top {
					font-size: 16px;
				}
			}
		}
	}

	@media (max-width: 576px) {
		width: 90%;
	}
`;

const Header = () => {
	return (
		<Container>
			<div className='logo'>
				<img src={logo} alt='logo' />
			</div>
			<div className='date'>
				<img src={dateIcon} alt='date icon' />
				<div className='date-right'>
					<p className='date-right-top'>Day 1</p>
					<p className='date-right-bottom'>of 5</p>
				</div>
			</div>
		</Container>
	);
};

export default Header;
