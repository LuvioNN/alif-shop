import { useEffect } from 'react'

const Toast = ({ message, onClose, type = 'success' }) => {
	useEffect(() => {
		const timer = setTimeout(onClose, 3000)
		return () => clearTimeout(timer)
	}, [onClose])

	return (
		<div className={`toast-container ${type}`}>
			<div className='toast'>{message}</div>
		</div>
	)
}

export default Toast
