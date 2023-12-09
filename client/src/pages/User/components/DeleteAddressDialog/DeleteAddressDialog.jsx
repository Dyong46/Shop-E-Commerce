import { useState } from "react";
import { toast } from "react-toastify";
import Button from "~/components/Button";
import { deleteAddress } from "~/servers/addressService";
import PropTypes from 'prop-types'
import { Modal } from "flowbite-react";
import { useQueryClient } from "@tanstack/react-query";

const DeleteAddressDialog = ({ id }) => {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    try {
      const res = await deleteAddress(id)
      if (res) {
        toast.success("Delete address success")
        await queryClient.invalidateQueries(['address']);
      }
    } catch (error) {
      console.log(error.response.message);
      toast.error("Delete address fail")
    } finally {
      setOpen(false)
    }
  }

  return (
    <>
      <Button onClick={() => setOpen(true)} className="text-blue-600">Xóa</Button>
      <Modal show={open} size="md" onClose={() => setOpen(false)} popup>
        <Modal.Header className="bg-white shadow-sm" />
        <Modal.Body className="bg-white shadow-sm">
          <div className="text-center">
            <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <h3 className='mb-5 text-lg font-normal text-gray-500'>Bạn có muốn xóa địa chỉ này chứ ?</h3>
          </div>
          <div className="flex justify-end">
            <Button
              onClick={() => setOpen(false)}
              className="flex items-center justify-center rounded-sm py-2 text-black hover:bg-gray-100 font-normal me-3 w-[150px]"
            >
              Trở lại
            </Button>
            <Button
              onClick={handleDelete}
              className="flex items-center justify-center bg-red-500 py-2 px-4 rounded-sm text-white hover:bg-red font-normal"
            >
              Có, tôi chắc chắn
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

DeleteAddressDialog.propTypes = {
  id: PropTypes.number
}

export default DeleteAddressDialog;
