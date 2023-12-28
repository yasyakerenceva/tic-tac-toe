import { useState } from 'react';
import styles from './App.module.css';
import { FieldLayout, HeaderLayout } from './components';
import { store } from './store/store';

export const App = () => {
	const [render, setRender] = useState(false);

	store.subscribe(() => {
		setRender(!render);
	});

	return (
		<div className={styles.game}>
			<div className={styles.header}>
				<HeaderLayout />
			</div>
			<div className={styles.field}>
				<FieldLayout />
			</div>
		</div>
	);
};
