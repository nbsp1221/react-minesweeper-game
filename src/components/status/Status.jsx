import React from 'react';
import {
	Wrapper,
	Mine,
	ButtonWrapper,
	RestartButton,
	SettingsButton,
	Timer
} from './StatusStyle';

const Status = ({
	leftMineCount,
	mineCount,
	resultEmoji,
	enableSettings,
	elapsedTime,
	onClickRestart,
	onClickSettings
}) => {
	return (
		<Wrapper>
			<Mine>💣 {leftMineCount} / {mineCount}</Mine>
			<ButtonWrapper>
				<RestartButton title="Restart" onClick={onClickRestart}>{resultEmoji}</RestartButton>
				{enableSettings && <SettingsButton title="Settings" onClick={onClickSettings}>⚙️</SettingsButton>}
			</ButtonWrapper>
			<Timer>🕙 {elapsedTime}</Timer>
		</Wrapper>
	);
};

export default Status;