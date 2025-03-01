import React from 'react';
import styles from './index.module.css';
import imgIcon from '@src/assets/image/tmp.png';
import {Button} from 'wuyue-design';
import 'wuyue-design/dist/esm/index.css';

function App() {
	return (
		<div className={styles.app}>
			React18 + Ts5 + webpack5 开发模板搭建
			<div>
				<img src={imgIcon} alt='' />
			</div>
			<Button label='Button' onClick={() => {}} primary />
		</div>
	);
}

export default App;
