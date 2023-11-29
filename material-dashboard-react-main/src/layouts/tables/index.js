/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =======================================r=================

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

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import { useState, useRef, useMemo } from "react";
import { Tab, Tabs, Typography } from "@mui/material";

function Tables() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [open, setOpen] = useState(false);

  const [file, setFile] = useState();
  const [age, setAge] = useState("");

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const fileInputRef = useRef(null);

  const img =
    "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg";

  const previewImage = useMemo(() => {
    return file ? URL.createObjectURL(file) : "";
  }, [file]);

  const handleClose = () => {
    setOpen(!open);
  };

  const handleUpload = () => {
    fileInputRef.current?.click();
  };

  const onFileChange = (event) => {
    const fileFromLocal = event.target.files?.[0];

    fileInputRef.current?.setAttribute("value", "");

    if (fileFromLocal) {
      console.error("......");
    } else {
      onChange && onChange(fileFromLocal);

      setFile(event.terget.files);
    }
  };

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
        <Grid container spacing={6}>
          <Stack>
            <MDBox sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
              </Tabs>
            </MDBox>
            <CustomTabPanel value={value} index={0}>
              <Grid item xs={12}>
                <Card>
                  <MDBox
                    mx={2}
                    mt={-3}
                    py={3}
                    px={2}
                    variant="gradient"
                    bgColor="info"
                    borderRadius="lg"
                    coloredShadow="info"
                    direction="row"
                  >
                    <Stack direction="row" spacing={4}>
                      <MDTypography variant="h6" color="white" pt={1}>
                        Authors Table
                      </MDTypography>
                      <MDButton variant="contained" color="white" onClick={handleClose}>
                        + Add Product
                      </MDButton>
                    </Stack>
                  </MDBox>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">{"Create new product"}</DialogTitle>
                    <DialogContent>
                      <Stack pt={4}>
                        <Stack direction="row" sx={{ width: "100%" }} spacing={10}>
                          <Stack>
                            <MDBox>
                              <MDInput label="Name" />
                            </MDBox>
                            <MDBox pt={2}>
                              <MDInput label="Price" type="number" />
                            </MDBox>
                            <MDBox sx={{ minWidth: 120 }} pt={2}>
                              <FormControl fullWidth sx={{ minHeight: 50 }}>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                  sx={{ minHeight: 45 }}
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  value={age}
                                  label="Age"
                                  onChange={handleChangeAge}
                                >
                                  <MenuItem value={1}>Điện thoại</MenuItem>
                                  <MenuItem value={2}>Laptop</MenuItem>
                                  <MenuItem value={3}>Quần áo nam</MenuItem>
                                </Select>
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
                        <MDInput label="Description" mt={2} minRows={2} multiline />
                      </Stack>
                    </DialogContent>
                    <DialogActions>
                      <MDButton onClick={handleClose}>Disagree</MDButton>
                      <MDButton onClick={handleClose} autoFocus>
                        Agree
                      </MDButton>
                    </DialogActions>
                  </Dialog>
                  <MDBox pt={3}>
                    <DataTable
                      table={{ columns, rows }}
                      isSorted={false}
                      entriesPerPage={false}
                      showTotalEntries={false}
                      noEndBorder
                    />
                  </MDBox>
                </Card>
              </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Grid item xs={12}>
                <Card>
                  <MDBox
                    mx={2}
                    mt={-3}
                    py={3}
                    px={2}
                    variant="gradient"
                    bgColor="info"
                    borderRadius="lg"
                    coloredShadow="info"
                  >
                    <MDTypography variant="h6" color="white">
                      Projects Table
                    </MDTypography>
                  </MDBox>
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
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              Item Three
            </CustomTabPanel>
          </Stack>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
