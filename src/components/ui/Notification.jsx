import ReactDOM from 'react-dom';

import './Notification.css';

function Notification(props) {
  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = 'success';
  }

  if (status === 'error') {
    statusClasses = 'error';
  }

  const cssClasses = `notification ${statusClasses}`;
console.log(cssClasses);
  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById('notifications'));
}

export default Notification;
