import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const StyledOnee = styled(ToastContainer)`
	/* background: teal; */
`;

const Toastify = () => {
	const done = !true;

	const notify = () =>
		toast.success('🦄 Sign up succesful!', {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

	return (
		<div>
			<StyledOnee theme={'dark'} />
		</div>
	);
};

export default Toastify;
