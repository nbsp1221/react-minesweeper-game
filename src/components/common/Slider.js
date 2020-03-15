import styled, { css } from 'styled-components';

const thumbCSS = css`
	background-color: dimgray;
	border: none;
	border-radius: 0;
	width: 20px;
	height: 20px;
`;

const Slider = styled.input.attrs({
	type: 'range'
})`
	background-color: skyblue;
	outline: none;
	width: 100%;
	height: 20px;
	-webkit-appearance: none;
	&::-webkit-slider-thumb {
		${thumbCSS};
		-webkit-appearance: none;
	}
	&::-moz-range-thumb {
		${thumbCSS};
	}
	&::-ms-thumb {
		${thumbCSS};
	}
`;

export default Slider;