import React from 'react';
import { useMessage,Positon } from '@components/index'
import { ConfigProvider } from '@components/index'
import './index.less'
function Demo () {
	const {add} = useMessage();
	const onClick = (positon:Positon) => {
		add({
			content: Math.random().toString().slice(2,8),
			positon
		})
	}
	return (
		<div>
			<button onClick={()=>onClick('top')}>添加TOP</button>
			<button onClick={()=>onClick('bottom')}>添加BOTTOM</button>
		</div>
	)
}
function App() {
	return (
			<ConfigProvider>
				<Demo/>
			</ConfigProvider>
	);
}

export default App;
