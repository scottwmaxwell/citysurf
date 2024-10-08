import "./Modal.css";
import { useState } from "react";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Metrics from "../Metrics/Metrics";
import Passreset from "../Passreset/Passreset";
import Toast from "../Toast/Toast";

// This component holds several other components (signup, login, metrics, password reset)
// It will appear at the top of the page when accessing these different functionalities of the site
function Modal({
  setModalOpen,
  setLoggedIn,
  setToastMessage,
  setToastTitle,
  setToastShow,
}: any) {
  const [login, setLogin] = useState(true);
  const [passReset, setPassReset] = useState(false);
  const [signup, setSignup] = useState(false);
  const [metrics, setMetrics] = useState(false);

  // User clicked to close modal
  const handleClose = (e: any) => {
    e.preventDefault();
    setModalOpen(false); // Remove modal component
  };

  return (
    <div className="modal-container">
      <div className="modal modal-open show d-block" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body">
              {login && (
                <Login
                  setModalOpen={setModalOpen}
                  setPassReset={setPassReset}
                  setLogin={setLogin}
                  setLoggedIn={setLoggedIn}
                  setSignup={setSignup}
                  setToastShow={setToastShow}
                  setToastMessage={setToastMessage}
                  setToastTitle={setToastTitle}
                />
              )}
              {passReset && (
                <Passreset
                  setPassReset={setPassReset}
                  setModalOpen={setModalOpen}
                  setLogin={setLogin}
                  setToastShow={setToastShow}
                  setToastMessage={setToastMessage}
                  setToastTitle={setToastTitle}
                />
              )}

              {signup && (
                <Signup
                  setLoggedIn={setLoggedIn}
                  setPassReset={setPassReset}
                  setLogin={setLogin}
                  setSignup={setSignup}
                  setMetrics={setMetrics}
                  setToastShow={setToastShow}
                  setToastMessage={setToastMessage}
                  setToastTitle={setToastTitle}
                />
              )}

              {metrics && (
                <Metrics
                  setModalOpen={setModalOpen}
                  setToastShow={setToastShow}
                  setToastMessage={setToastMessage}
                  setToastTitle={setToastTitle}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
