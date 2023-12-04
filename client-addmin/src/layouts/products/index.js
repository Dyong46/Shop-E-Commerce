/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

j=======================================r=================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";

import { useForm, Controller } from "react-hook-form";
import { userSchema } from "utils/rules";

import { productGetAll } from "servers/productService";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { styled } from "@mui/material/styles";
import { yupResolver } from "@hookform/resolvers/yup";

// Data
import projectsTableData from "./data/projectsTableData.js";
import { useState, useRef, useMemo, useEffect } from "react";
import { Tab, Tabs, Typography } from "@mui/material";

function Products() {
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [open, setOpen] = useState(false);

  const [file, setFile] = useState();
  const [age, setAge] = useState("");
  const [products, setProduct] = useState([]);

  const profileSchema = userSchema.pick([
    "title",
    "price",
    "category",
    "date_create",
    "img",
    "description",
  ]);

  const methods = useForm({
    defaultValues: {
      name: "",
      img: "",
      date_of_birth: new Date(),
      description: "",
    },
    resolver: yupResolver(profileSchema),
  });

  const {
    register,
    handleSubmit,
    control,
    setValues,
    watch,
    setError,
    formState: { errors },
  } = methods;

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const fileInputRef = useRef(null);

  const img =
    "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg";

  // const previewImage = useMemo(() => {
  //   return file ? URL.createObjectURL(file) : "";
  // }, [file]);

  const handleClose = () => {
    setOpen(!open);
  };

  const handleUpload = () => {
    fileInputRef.current?.click();
  };

  const onFileChange = (event) => {
    const fileFromLocal = event.target.files[0];

    fileInputRef.current?.setAttribute("value", "");

    if (!fileFromLocal) {
      console.error("......");
    } else {
      setFile(event.target.files);
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    const payload = { ...data, img: file };
    console.log("data: ", payload);
    try {
      // let avatarName = avatar;
      // if (file) {
      //   const uploadRes = await upload({ image: file });
      //   avatarName = uploadRes.url;
      //   setValue('avatar', avatarName);
      // }
      // const res = await updateAccount(profile.id, {
      //   ...data,
      //   fullname: data.name,
      //   img: avatarName,
      // });
      // setProfile(res);
      // setProfileToLS(res);
    } catch (error) {
      console.log(error);
      // if (isAxiosUnprocessableEntityError(error)) {
      //   const formError = error.response?.data.data;
      //   console.log(formError);
      //   if (formError) {
      //     Object.keys(formError).forEach((key) => {
      //       setError(key, {
      //         message: formError[key],
      //         type: 'Server',
      //       });
      //     });
      //   }
      // }
    }
  });

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <MDBox sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </MDBox>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-2`,
      "aria-controls": `simple-tabpanel-2`,
    };
  }
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid>
          <Stack>
            <Grid item xs={12}>
              <Card>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant="gradient"
                  bgColor="info"
                  coloredShadow="info"
                  borderRadius="lg"
                  direction="row"
                >
                  <Stack direction="row" spacing={4}>
                    <MDTypography variant="h6" color="white" pt={1}>
                      Quản lý sản phẩm
                    </MDTypography>
                    <MDButton variant="contained" color="white" onClick={handleClose}>
                      + Tạo sản phẩm
                    </MDButton>
                  </Stack>
                </MDBox>

                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogTitle id="alert-dialog-title">{"Create new product"}</DialogTitle>
                    <DialogContent>
                      <Stack pt={4}>
                        <Stack direction="row" sx={{ width: "100%" }} spacing={10}>
                          <Stack>
                            <MDBox>
                              <Controller
                                control={control}
                                name="name"
                                render={({ field: { onChange, onBlur, value, ref } }) => (
                                  <MDInput label="Name" onChange={onChange} />
                                )}
                              />
                            </MDBox>
                            <MDBox pt={2}>
                              <Controller
                                control={control}
                                name="price"
                                render={({ field: { onChange, onBlur, value, ref } }) => (
                                  <MDInput label="Price" onChange={onChange} />
                                )}
                              />
                            </MDBox>
                            <MDBox sx={{ minWidth: 120 }} pt={2}>
                              <FormControl fullWidth sx={{ minHeight: 50 }}>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Controller
                                  control={control}
                                  name="category"
                                  render={({ field: { onChange, onBlur, value, ref } }) => (
                                    <Select
                                      sx={{ minHeight: 45 }}
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={value || ""}
                                      label="Age"
                                      onChange={onChange}
                                    >
                                      <MenuItem value="dt">Điện thoại</MenuItem>
                                      <MenuItem value="lt">Laptop</MenuItem>
                                      <MenuItem value="qa">Quần áo nam</MenuItem>
                                    </Select>
                                  )}
                                />
                              </FormControl>
                            </MDBox>
                          </Stack>
                          <Stack>
                            <img
                              style={{ width: 200 }}
                              srcSet={`${img ?? previewImage}`}
                              src={`${img ?? previewImage}`}
                              loading="lazy"
                            />
                            <MDButton
                              variant="contained"
                              onClick={handleUpload}
                              startIcon={<CloudUploadIcon />}
                            >
                              Upload Image
                            </MDButton>
                            <input
                              className="hidden"
                              value={file?.name || null}
                              type="file"
                              accept=".jpg,.jpeg,.png"
                              ref={fileInputRef}
                              onChange={onFileChange}
                              onClick={(event) => {
                                event.target.value = null;
                              }}
                              hidden
                            />
                          </Stack>
                        </Stack>

                        <Controller
                          control={control}
                          name="description"
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <MDInput
                              label="Description"
                              mt={2}
                              minRows={2}
                              multiline
                              onChange={onChange}
                            />
                          )}
                        />
                      </Stack>
                    </DialogContent>
                    <DialogActions>
                      <MDButton onClick={handleClose}>Disagree</MDButton>
                      <button type="submit">Agree</button>
                    </DialogActions>
                  </form>
                </Dialog>

                <MDBox pt={3}>
                  <DataTable
                    table={{ columns: pColumns, rows: pRows }}
                    isSorted={false}
                    entriesPerPage={false}
                    showTotalEntries={false}
                    noEndBorder
                  />
                </MDBox>
              </Card>
            </Grid>
          </Stack>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Products;
