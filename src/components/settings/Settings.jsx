import React from 'react';
import styled from 'styled-components';

import Button from 'styled/Button';
import Slider from 'styled/Slider';

const Settings = () => {
	return (
		<SettingsStyle>
			<div>
				<div>Width: 9</div>
				<div><Slider min='9' max='30' /></div>
			</div>
			<div>
				<div>Height: 9</div>
				<div><Slider min='9' max='30' /></div>
			</div>
			<div>
				<div>Mines: 10</div>
				<div><Slider min='10' max='30' /></div>
			</div>
			<div>
				<Button>Start</Button>
			</div>
		</SettingsStyle>
	);
};

const SettingsStyle = styled.div`

`;

export default Settings;