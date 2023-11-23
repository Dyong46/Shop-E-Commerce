import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "~/components/Button";
import Input from "~/components/Input";
import ModalDialog from "~/components/Modal";

const NewAddressDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        className="flex items-center justify-center bg-red-500 py-2 px-4 rounded-sm text-white hover:bg-red font-normal"
        onClick={() => setOpen(true)}
      >
        <FontAwesomeIcon icon={faPlus} className="me-2" />
        Thêm địa chỉ mới
      </Button>
      <ModalDialog
        className=""
        show={open}
        handleClose={() => setOpen(false)}
        renderDialog={
          <>
            <form>
              <div className="text-xl">Địa chỉ mới</div>
              <div className="row">
                <div className="col col-4">
                  <Input
                    name="email"
                    // register={register}
                    type="email"
                    className="mt-8"
                    // errorMessage={errors.email?.message}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Button
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center rounded-sm py-2 text-black hover:bg-gray-100 font-normal me-3 w-[150px]"
                >
                  Trở lại
                </Button>
                <Button
                  type="submit"
                  className="flex items-center justify-center rounded-sm bg-red-500 py-2 text-white hover:bg-red-600 font-normal w-[150px]"
                >
                  Hoàn thành
                </Button>
              </div>
            </form>
          </>
        }
      />
    </ >
  );
}

export default NewAddressDialog;
