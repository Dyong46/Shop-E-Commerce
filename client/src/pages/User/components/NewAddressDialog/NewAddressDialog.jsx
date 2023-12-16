import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import Button from "~/components/Button";
import Input from "~/components/Input";
import ModalDialog from "~/components/Modal";
import TextArea from "~/components/TextArea";
import AddressSelect from "../AddressSelect";
import { Controller, FormProvider, useForm } from "react-hook-form";
import InputNumber from "~/components/InputNumber";
import { isAxiosUnprocessableEntityError } from "~/utils/utils";
import { toast } from "react-toastify";
import { addAddress } from "~/servers/addressService";
import { AppContext } from "~/contexts/app.contexts";
import { useQueryClient } from "@tanstack/react-query";
import { addressSchema } from "~/utils/rules";
import { yupResolver } from "@hookform/resolvers/yup";

const addressUserSchema = addressSchema.pick(['fullname', 'phone', 'address', 'detail_address']);

const NewAddressDialog = () => {
  const queryClient = useQueryClient();
  const { profile } = useContext(AppContext)
  const [open, setOpen] = useState(false);

  const methods = useForm({
    defaultValues: {
      fullname: '',
      phone: '',
      address: null,
      detail_address: '',
    },
    resolver: yupResolver(addressUserSchema)
  });

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    setError,
    reset
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await addAddress({
        fullname: data.fullname,
        phone: data.phone,
        city: data.address.province,
        district: data.address.district,
        wards: data.address.ward,
        specific_address: data.detail_address,
        account_id: JSON.parse(JSON.stringify(profile))
      })
      if (res && res.id) {
        toast.success('Update account successful')
        setOpen(false)
        reset()
        await queryClient.invalidateQueries(['address']);
      }
    } catch (error) {
      if (isAxiosUnprocessableEntityError(error)) {
        const formError = error.response?.data.data;
        console.log(formError);
        if (formError) {
          Object.keys(formError).forEach((key) => {
            setError(key, {
              message: formError[key],
              type: 'Server',
            });
          });
        }
      }
    }
  });

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
            <FormProvider {...methods}>
              <form onSubmit={onSubmit}>
                <div className="text-xl">Địa chỉ mới</div>
                <div className="flex space-x-5 justify-center">
                  <Input
                    name="fullname"
                    register={register}
                    type="text"
                    className="mt-8 w-full"
                    errorMessage={errors.fullname?.message}
                    placeholder="Họ Và Tên"
                  />
                  <Controller
                    control={control}
                    name="phone"
                    render={({ field }) => (
                      <InputNumber
                        classNameInput="w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm"
                        className="mt-8 w-full"
                        placeholder="Số điện thoại"
                        errorMessage={errors.phone?.message}
                        {...field}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>

                <Controller
                  control={control}
                  name="address"
                  render={({ field }) => (
                    <AddressSelect
                      errorMessage={errors.address?.message}
                      value={field.value || {}}
                      onChange={field.onChange}
                    />
                  )}
                />

                <TextArea
                  register={register}
                  name="detail_address"
                  className="w-full"
                  placeholder="Địa chỉ cụ thể"
                  errorMessage={errors.detail_address?.message}
                />

                <div className="flex justify-end">
                  <Button
                    onClick={() => {
                      reset()
                      setOpen(false)
                    }}
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
            </FormProvider>
          </>
        }
      />
    </ >
  );
}

export default NewAddressDialog;
