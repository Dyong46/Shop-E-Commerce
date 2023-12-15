import * as yup from "yup";

export const getRules = (getValues) => ({
  email: {
    required: {
      value: true,
      message: "Email là bắt buộc",
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "Email không đúng định dạng",
    },
    maxLength: {
      value: 160,
      message: "Độ dài từ 5 - 160 ký tự",
    },
    minLength: {
      value: 5,
      message: "Độ dài từ 5 - 160 ký tự",
    },
  },
  password: {
    required: {
      value: true,
      message: "Password là bắt buộc",
    },
    maxLength: {
      value: 160,
      message: "Độ dài từ 6 - 160 ký tự",
    },
    minLength: {
      value: 6,
      message: "Độ dài từ 6 - 160 ký tự",
    },
  },
  confirm_password: {
    required: {
      value: true,
      message: "Nhập lại password là bắt buộc",
    },
    maxLength: {
      value: 160,
      message: "Độ dài từ 6 - 160 ký tự",
    },
    minLength: {
      value: 6,
      message: "Độ dài từ 6 - 160 ký tự",
    },
    validate:
      typeof getValues === "function"
        ? (value) => value === getValues("password") || "Nhập lại password không khớp"
        : undefined,
  },
});

function testPriceMinMax() {
  const { price_max, price_min } = this.parent;
  if (price_min !== "" && price_max !== "") {
    return Number(price_max) >= Number(price_min);
  }
  return price_min !== "" || price_max !== "";
}

const handleConfirmPasswordYup = (refString) => {
  return yup
    .string()
    .required("Nhập lại password là bắt buộc")
    .min(6, "Độ dài từ 6 - 160 ký tự")
    .max(160, "Độ dài từ 6 - 160 ký tự")
    .oneOf([yup.ref(refString)], "Nhập lại password không khớp");
};

export const schema = yup.object({
  username: yup
    .string()
    .trim()
    .required("Username người dùng là bắt buộc")
    .min(5, "Độ dài từ 6 - 20 ký tự")
    .max(20, "Độ dài từ 6 - 20 ký tự")
    .matches(/^[a-zA-Z0-9]+$/, "Username không được chứa kí tự đặc biệt"),
  email: yup
    .string()
    .required("Email là bắt buộc")
    .email("Email không đúng định dạng")
    .min(5, "Độ dài từ 5 - 160 ký tự")
    .max(160, "Độ dài từ 5 - 160 ký tự"),
  password: yup
    .string()
    .required("Password là bắt buộc")
    .min(6, "Độ dài từ 6 - 160 ký tự")
    .max(160, "Độ dài từ 6 - 160 ký tự"),
  confirm_password: handleConfirmPasswordYup("password"),
  price_min: yup.string().test({
    name: "price-not-allowed",
    message: "Giá không phù hợp",
    test: testPriceMinMax,
  }),
  price_max: yup.string().test({
    name: "price-not-allowed",
    message: "Giá không phù hợp",
    test: testPriceMinMax,
  }),
  name: yup.string().trim().required("Tên người dùng là bắt buộc"),
});

export const userSchema = yup.object({
  name: yup.string().required("Tên không được để trống").max(160, "Độ dài tối đa là 160 ký tự"),
  email: yup
    .string()
    .required("Email là bắt buộc")
    .email("Email không đúng định dạng")
    .min(5, "Độ dài từ 5 - 160 ký tự")
    .max(160, "Độ dài từ 5 - 160 ký tự"),
  username: yup
    .string()
    .required("Username không được để trống")
    .max(50, "Độ dài tối đa là 50 ký tự"),
  phone: yup.string().min(10, "Số điện thoại không hợp lệ").max(11, "Số điện thoại không hợp lệ"),
  avatar: yup.string().max(1000, "Độ dài tối đa là 1000 ký tự"),
  date_of_birth: yup.date().max(new Date(), "Hãy chọn một ngày trong quá khứ"),
  password: schema.fields["password"],
  new_password: schema.fields["password"],
  confirm_password: handleConfirmPasswordYup("new_password"),
});

export const addressSchema = yup.object({
  fullname: yup.string().required("Tên không được để trống").max(160, "Độ dài tối đa là 160 ký tự"),
  phone: yup.string().min(10, "Số điện thoại không hợp lệ").max(11, "Số điện thoại không hợp lệ"),
  address: yup
    .mixed()
    .test("isValidAddress", "Vui lòng chọn đầy đủ thông tin địa chỉ", function (value) {
      const { province, district, ward } = value || {};
      return province !== "" && district !== "" && ward !== "";
    }),
  detail_address: yup
    .string()
    .required("Địa chỉ không được để trống")
    .max(160, "Độ dài tối đa là 160 ký tự"),
});
