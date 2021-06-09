import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import stylesMsg from '../styles/toast.module.scss';

function notify(type: string, msg: string) {
    const toastStyle = stylesMsg.message;
    const barStyle = stylesMsg.bar;
    const errorBarStyle = stylesMsg.errorBar;


    if (type === 'success') {
      toast(msg, {
        className: toastStyle,
        progressClassName: barStyle,
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    else if (type === 'error') {
      toast(msg, {
        className: toastStyle,
        progressClassName: errorBarStyle,
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  export default notify;