import styled from 'styled-components';

const Block = styled.div`
	background-color: ${({ bgColor }) => bgColor || 'inheret'};
	border-radius: ${({ borderRadius }) => borderRadius || '0'};
	color: ${({ color }) => color || 'inheret'};
	display: ${({ display }) => display || 'block'};
	margin-top: ${({ mt }) => mt || '0'};
	margin-bottom: ${({ mb }) => mb || '0'};
	padding: ${({ p }) => p || '0'};
	text-align: ${({ textAlign }) => textAlign || 'inheret'};
`;

export default Block;