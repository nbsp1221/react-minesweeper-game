import React from 'react';
import styled from 'styled-components';

const Settings = () => {
	return (
		<SettingsStyle>
			<div>
				<div>Width: 9</div>
				<div><input type="range" /></div>
			</div>
			<div>
				<div>Height: 9</div>
				<div><input type="range" /></div>
			</div>
			<div>
				<div>Mines: 10</div>
				<div><input type="range" /></div>
			</div>
			<div>
				<button>Start</button>
			</div>
		</SettingsStyle>
	);
};

const SettingsStyle = styled.div`

`;

export default Settings;