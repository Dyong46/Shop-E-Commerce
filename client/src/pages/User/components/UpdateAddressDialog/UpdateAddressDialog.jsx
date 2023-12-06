import { useContext, useEffect, useState } from "react";
import Button from "~/components/Button";
import Input from "~/components/Input";
import ModalDialog from "~/components/Modal";
import TextArea from "~/components/TextArea";
import AddressSelect from "../AddressSelect";
import { Controller, FormProvider, useForm } from "react-hook-form";
import InputNumber from "~/components/InputNumber";
import { isAxiosUnprocessableEntityError } from "~/utils/utils";
import { toast } from "react-toastify";
import { AppContext } from "~/contexts/app.contexts";
import { updateAddress } from "~/servers/addressService";
import PropTypes from 'prop-types'
import { useQueryClient } from "@tanstack/react-query";

const UpdateAddressDialog = ({ body }) => {
  const queryClient = useQueryClient();
  const { profile } = useContext(AppContext)
  const [open, setOpen] = useState(false);

  const methods = useForm({
    defaultValues: {
      fullname: '',
      phone: '',
      address: null,
      detailAddress: '',
    },
  });

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    setError,
    setValue
  } = methods;

  useEffect(() => {
    if (body) {
      setValue('fullname', body.fullname || ''),
        setValue('phone', body.phone || ''),
        setValue('address', {
          province: body.city,
          district: body.district,
          ward: body.wards
        } || {}),
        setValue('detailAddress', body.specific_address || '')
    }
  }, [body, setValue])

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    try {
      const res = await updateAddress(body.id, {
        fullname: data.fullname,
        phone: data.phone,
        city: data.address.province,
        district: data.address.district,
        wards: data.address.ward,
        specific_address: data.detailAddress,
        account_id: JSON.parse(JSON.stringify(profile))
      })
      if (res && res.id) {
        toast.success('Update account successful')
        setOpen(false)
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
      <Button className="text-blue-600 me-2" onClick={() => setOpen(true)}>Cập nhật</Button>
      <ModalDialog
        className=""
        show={open}
        handleClose={() => setOpen(false)}
        renderDialog={
          <>
            <FormProvider {...methods}>
              <form onSubmit={onSubmit}>
                <div className="text-xl">Cập nhật địa chỉ</div>
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
                  name="detailAddress"
                  className="w-full"
                  placeholder="Địa chỉ cụ thể"
                  errorMessage={errors.detail?.message}
                />

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
            </FormProvider>
          </>
        }
      />
    </ >
  )
}

UpdateAddressDialog.propTypes = {
  body: PropTypes.object
}

export default UpdateAddressDialog;
