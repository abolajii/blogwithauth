import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalContextProvider from './context/GlobalContext';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

const GlobalStyle = createGlobalStyle`

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: Roboto;
}

html, body {
	font-family: Roboto;
}

button {
	outline: none;
	border: none;
	cursor: pointer;
	background-color:none;
}
`;

render(
	<>
		<Router>
			<Provider store={store}>
				<GlobalContextProvider>
					<GlobalStyle />
					<App />
				</GlobalContextProvider>
			</Provider>
		</Router>
	</>,
	document.getElementById('root')
);
