import React from 'react';
import { Wrapper, Mine, ControlButton, Timer } from './StatusStyle';

const Status = ({
	leftMineCount,
	mineCount,
	resultEmoji,
	elapsedTime
}) => {
	return (
		<Wrapper>
			<Mine>💣 {leftMineCount} / {mineCount}</Mine>
			<ControlButton title="Restart">{resultEmoji}</ControlButton>
			<Timer>🕙 {elapsedTime}</Timer>
		</Wrapper>
	);
};

export default Status;