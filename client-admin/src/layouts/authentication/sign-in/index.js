import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { schema } from "utils/rules";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "servers/accountService";
import { toast } from "react-toastify";
import { useMaterialUIController } from "context";
import { setProfile } from "context";
import { setProfileToLS } from "utils/auth";
import { setIsAuthenticated } from "context";
import { useNavigate } from "react-router-dom";

const loginSchema = schema.pick(["email", "password"]);

function Basic() {
  const [controller, dispatch] = useMaterialUIController();
  const navigate = useNavigate();
  const {
    register,
    setError,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await login(data.email, data.password, true);
      if (res?.id && res?.email) {
        if (res?.role_id.id !== "admin") {
          toast.error("Bạn không đủ quyền để truy cập");
          return;
        }
        setProfile(dispatch, res);
        setProfileToLS(res);
        setIsAuthenticated(dispatch, true);
        navigate("/dashboard");
        toast.success("Login successful!");
      } else {
        reset();
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      // if (isAxiosUnprocessableEntityError(error)) {
      //   const formError = error.response?.data.data;
      //   if (formError) {
      //     Object.keys(formError).forEach((key) => {
      //       setError(key, {
      //         message: formError[key],
      //         type: "Server",
      //       });
      //     });
      //   }
      // }
      toast.error(error.message);
    }
  });

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white">
            Sign in
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={onSubmit}>
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                fullWidth
                {...register("email", {
                  required: errors.email?.message,
                })}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                fullWidth
                {...register("password", {
                  required: errors.password?.message,
                })}
              />
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth type="submit">
                sign in
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
