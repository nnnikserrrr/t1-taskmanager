import { Suspense } from 'react'
import { MainPage } from './pages/MainPage'
import { Header } from './widgets/Header'
import './app/styles/globalStyles.css';

function App() {
	return (
		<>
			<Suspense fallback='loading'>
				<Header />
				<MainPage />
			</Suspense>
		</>
)
}

export default App
