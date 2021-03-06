import styled, {css} from 'styled-components';
import { colors, devices, fonts } from '../../styles'

export const Container = styled.div`
	width: 100%;
	padding: 20px;

	@media ${devices.fromLaptop} {
		width: 80%
	}

`;

export const Invert = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 0;

	@media ${devices.fromLaptop} {
		margin-top: 50px;
		${({top}: {top?: boolean}) => css`
			flex-direction: ${top ? 'row-reverse' : 'row'};
		`}
	}
`

export const Title = styled.span`
	font-size: ${fonts.titleMobile}px;
	font-weight: bold;
	color: ${colors.primary};

	@media ${devices.fromLaptop} {
		font-size: ${fonts.titleDesktop}px;
	}
`

export const UserContainer = styled.div`
	padding: 40px 0;
	display: flex;
	align-items: center;
	/* justify-content: center; */
	flex-direction: column;

	@media ${devices.fromLaptop} {
		align-items: flex-start;
		width: 100%;
	}
`;

export const NameContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: center;

	@media ${devices.fromLaptop} {
		justify-content: flex-start;
		font-size: ${fonts.homeSubtitleDesktop}px;
	}
`

export const Circle = styled.div`   
	display: none;
	background: ${colors.primary};
	width: 20px;
	height: 20px;
	border-radius: 50%;
	margin-right: 15px;

	@media ${devices.fromLaptop} {
		display: inline-flex;
	}
`

export const Name = styled.div`
	font-size: ${fonts.big}px;
	font-weight: bold;
	color: ${colors.primary};

	@media ${devices.fromLaptop} {
		font-size: ${fonts.homeSubtitleDesktop}px;
	}
`

export const YearsOld = styled.div`
	font-size: ${fonts.small}px;
	color: ${colors.primary};
	margin-top: 10px;
	width: 100%;
	text-align: center;

	@media ${devices.fromLaptop} {
		text-align: start;
		font-size: ${fonts.regular}px;
	}
`

export const Description = styled.div`
	font-size: 20px;
	color: #845BC6;
	padding: 0 50px;
	margin-top: 20px;
	width: 100%;
	text-indent: 0;
	text-align: center;

	@media ${devices.fromLaptop} {
		padding: 0;
		text-align: start;
		text-indent: 30px;
		font-size: ${fonts.big}px;
	}
`

export const Spotlight = styled.div`
	font-size: 20px;
	color: #845BC6;
	margin-top: 20px;
	margin-left: 0;
	font-style: italic; 
	width: 60%;
	text-align: center;

	@media ${devices.fromLaptop} {
		text-indent: 20px;
		width: 70%;
		margin-left: 50px;
		padding: 0;
		font-size: ${fonts.big}px;
		text-align: start;
	}
`

export const ImageContainer = styled.div`
	width: 100%;
	display: flex;
	margin-top: 50px;
	justify-content: center;
	align-items: center;
`

export const Image = styled.img`
	width: 250px;
	height: 250px;
	border-radius: 125px;
	border: 1px solid ${colors.grey};
	object-fit: cover;

	@media ${devices.fromLaptop} {
		width: 350px;
		height: 350px;
		border-radius: 175px;
	}
`