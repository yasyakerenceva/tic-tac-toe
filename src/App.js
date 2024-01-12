import { Provider } from 'react-redux';
import styles from './App.module.css';
import { FieldLayout, HeaderLayout } from './components';
import { store } from './store/store';

export const App = () => {
	return (
		<div className={styles.game}>
			<Provider store={store}>
				<div className={styles.header}>
					<HeaderLayout />
				</div>
				<div className={styles.field}>
					<FieldLayout />
				</div>
			</Provider>
		</div>
	);
};
