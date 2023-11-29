import { Modal } from 'flowbite-react';
import PropTypes from 'prop-types'

const ModalDialog = ({ className, show, handleClose, renderDialog }) => {
  return (
    <>
      <Modal className={className} dismissible show={show} onClose={handleClose}>
        <Modal.Body className='bg-white shadow-sm'>
          {renderDialog}
        </Modal.Body>
      </Modal>
    </>
  );
}

ModalDialog.propTypes = {
  className: PropTypes.string,
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  renderDialog: PropTypes.node
}
export default ModalDialog;
