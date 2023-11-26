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
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

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
import { useState } from "react";

function Tables() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [open, setOpen] = useState(false);

  const img =
    "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg";

  const handleClose = () => {
    setOpen(!open);
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

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
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
                <DialogTitle id="alert-dialog-title">
                  {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    {
                      "To subscribe to this website, please enter your email address here. We will send updates occasionally."
                    }
                  </DialogContentText>
                  <Stack pt={4}>
                    <Stack direction="row" sx={{ width: "100%" }} spacing={10}>
                      <Stack>
                        <MDBox>
                          <MDInput label="Name" />
                        </MDBox>
                        <MDBox pt={2}>
                          <MDInput label="Price" />
                        </MDBox>
                      </Stack>
                      <Stack justifyContent="end">
                        <img
                          style={{ width: 200 }}
                          srcSet={`${img}`}
                          src={`${img}`}
                          loading="lazy"
                        />
                        <MDButton variant="contained" startIcon={<CloudUploadIcon />}>
                          {"Upload Image"}
                          <VisuallyHiddenInput type="file" />
                        </MDButton>
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
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
