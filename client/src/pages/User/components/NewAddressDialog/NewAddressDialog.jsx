import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "~/components/Button";
import Input from "~/components/Input";
import ModalDialog from "~/components/Modal";
import TextArea from "~/components/TextArea";
import AddressSelect from "../AddressSelect";

const NewAddressDialog = () => {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("");

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
              <div className="flex space-x-5 justify-center">
                <Input
                  name="name"
                  // register={register}
                  type="text"
                  className="mt-8 w-full"
                  // errorMessage={errors.email?.message}
                  placeholder="Họ Và Tên"
                />
                <Input
                  name="phonenumber"
                  // register={register}
                  type="phonenumber"
                  className="mt-8 w-full"
                  // errorMessage={errors.email?.message}
                  placeholder="Số Điện Thoại"
                />
              </div>

              <div className="flex space-x-5 justify-center">
                <Input
                  name="phonenumber"
                  // register={register}
                  type="phonenumber"
                  className="mt-1 w-full"
                  // errorMessage={errors.email?.message}
                  placeholder="Tỉnh/ Thành phố, Quận/Huyện, Phường Xã"
                />
              </div>

              <AddressSelect />

              <div>
                <TextArea
                  name="detailAddress"
                  className="mt-1 w-full"
                  placeholder="Địa chỉ cụ thể"
                />
              </div>

              <div>
                <p>Loại địa chỉ</p>

                <div className="flex space-x-2 mt-2">
                  <Button
                    type="button"
                    className={location === "home" ? "flex items-center justify-center px-2 py-2 outline-none border border-gray-300 text-orange rounded-sm " : "flex items-center justify-center px-2 py-2 outline-none border border-gray-300 hover:border-orange hover:text-orange rounded-sm "}
                    onClick={() => { setLocation('home') }}
                  >
                    Nhà Riêng
                  </Button>
                  <Button
                    type="button"
                    className={location === "office" ? "flex items-center justify-center px-2 py-2 outline-none border border-gray-300 text-orange rounded-sm " : "flex items-center justify-center px-2 py-2 outline-none border border-gray-300 hover:border-orange hover:text-orange rounded-sm "}
                    onClick={() => { setLocation('office') }}
                  >
                    Văn Phòng
                  </Button>
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
