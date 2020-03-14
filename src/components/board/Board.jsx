import styled from 'styled-components';
import { CELL_SIZE, CELL_MARGIN } from '../../store/constants';

const Board = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 30px auto 0 auto;
	width: ${({ widthCount }) => widthCount * (CELL_SIZE + CELL_MARGIN * 2)}px;
`;

export default Board;