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

import { productGetAll, updateProduct } from "servers/productService";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
import { styled } from "@mui/material/styles";
import { yupResolver } from "@hookform/resolvers/yup";

// Data
import projectsTableData from "./data/projectsTableData.js";
import { useState, useRef, useMemo, useEffect } from "react";
import { Tab, Tabs, Typography } from "@mui/material";
import { upload } from "servers/cloudinaryService.js";
import { createProduct } from "servers/productService.js";
import { productById } from "servers/productService.js";
import { categoriesGetAll } from "servers/categoryService.js";
import { toast } from "react-toastify";

function Products() {
  const [open, setOpen] = useState(false);

  const [file, setFile] = useState();
  const [categorys, setCategorys] = useState([]);

  const {
    columns: pColumns,
    rows: pRows,
    idProduct: pId,
    cleanIdProduct,
    getAllProduct,
  } = projectsTableData();

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
      name_product: "",
      img: "",
      description: "",
      quantity: "",
      price: "",
      category_id: "",
    },
    resolver: yupResolver(profileSchema),
  });

  const {
    register,
    handleSubmit,
    control,
    setValues,
    watch,
    reset,
    setError,
    formState: { errors },
  } = methods;

  const fileInputRef = useRef(null);

  const previewImage = useMemo(() => {
    return file ? URL.createObjectURL(file) : "";
  }, [file]);

  const handleClose = async () => {
    setOpen(!open);
    if (!open) reset();
  };

  const handleUpload = () => {
    fileInputRef.current?.click();
  };

  const onFileChange = (event) => {
    const fileFromLocal = event.target.files?.[0];
    fileInputRef.current?.setAttribute("value", "");
    console.log("111aaa", fileFromLocal);
    setFile(fileFromLocal);
    toast.success("Upload ảnh thành công");
  };

  const handleOpenUpdate = async () => {
    const product = await productById(pId);

    if (product) {
      reset({
        name_product: product?.name_product || "",
        img: product?.img || "",
        description: product?.description || "",
        price: product?.price || "",
        quantity: product?.quantity || "",
        "category_id.id": product?.category_id.id || "",
      });
    }
  };

  useEffect(() => {
    if (pId) {
      setOpen(!open);
      handleOpenUpdate();
    }
  }, [pId]);

  const getAllCategories = async () => {
    const res = await categoriesGetAll();
    setCategorys(res);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const imageFile = watch("img");

  const onSubmit = handleSubmit(async (data) => {
    const payload = { ...data, img: file };
    console.log("data: ", payload);
    try {
      let imgFile = imageFile;
      if (file) {
        console.log(file);
        const uploadRes = await upload({ image: file });

        imgFile = uploadRes.url;
      }

      console.log("img file: ", imgFile);

      setValue("img", imgFile);

      if (pId) {
        await updateProduct(pId, {
          ...data,
          img: imgFile,
        });
      } else {
        await createProduct({
          ...data,
          img: imgFile,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      cleanIdProduct();
      getAllProduct();
      handleClose();
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
                                name="name_product"
                                render={({ field: { onChange, onBlur, value, ref } }) => (
                                  <MDInput label="Name" value={value || ""} onChange={onChange} />
                                )}
                              />
                            </MDBox>
                            <MDBox pt={2}>
                              <Controller
                                control={control}
                                name="price"
                                render={({ field: { onChange, onBlur, value, ref } }) => (
                                  <MDInput
                                    type="number"
                                    label="Price"
                                    value={value || ""}
                                    onChange={onChange}
                                  />
                                )}
                              />
                            </MDBox>
                            <MDBox pt={2}>
                              <Controller
                                control={control}
                                name="quantity"
                                render={({ field: { onChange, onBlur, value, ref } }) => (
                                  <MDInput
                                    type="number"
                                    label="Quantity"
                                    value={value || ""}
                                    onChange={onChange}
                                  />
                                )}
                              />
                            </MDBox>
                            <MDBox sx={{ minWidth: 120 }} pt={2}>
                              <FormControl fullWidth sx={{ minHeight: 50 }}>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Controller
                                  control={control}
                                  name="category_id.id"
                                  render={({ field: { onChange, onBlur, value, ref } }) => (
                                    <Select
                                      sx={{ minHeight: 45 }}
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={value || ""}
                                      label="Age"
                                      onChange={onChange}
                                    >
                                      {categorys.map((category) => {
                                        return (
                                          <MenuItem key={category.id} value={category.id}>
                                            {category.name}
                                          </MenuItem>
                                        );
                                      })}
                                    </Select>
                                  )}
                                />
                              </FormControl>
                            </MDBox>
                          </Stack>
                          <Stack>
                            <img style={{ width: 200 }} src={previewImage} />
                            <MDButton
                              variant="contained"
                              onClick={handleUpload}
                              startIcon={<CloudUploadIcon />}
                            >
                              Upload Image
                            </MDButton>
                            <input
                              className="hidden"
                              type="file"
                              accept=".jpg,.jpeg,.png"
                              ref={fileInputRef}
                              hidden
                              onChange={onFileChange}
                              onClick={(event) => {
                                event.target.value = null;
                              }}
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
                              value={value || ""}
                              multiline
                              onChange={onChange}
                            />
                          )}
                        />
                      </Stack>
                    </DialogContent>
                    <DialogActions>
                      <MDButton
                        onClick={() => {
                          cleanIdProduct();
                          handleClose();
                        }}
                      >
                        Disagree
                      </MDButton>
                      <MDButton type="submit">Aggre</MDButton>
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
    </DashboardLayout>
  );
}

export default Products;
