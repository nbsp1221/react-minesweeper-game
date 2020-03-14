import styled from 'styled-components';

const Block = styled.div`
	background-color: ${({ bgColor }) => bgColor || 'inheret'};
	color: ${({ color }) => color || 'inheret'};
	display: ${({ display }) => display || 'block'};
	margin-top: ${({ mt }) => mt || '0'};
	margin-bottom: ${({ mb }) => mb || '0'};
	padding: ${({ padding }) => padding || '0'};
	text-align: ${({ textAlign }) => textAlign || 'inheret'};
`;

export default Block;