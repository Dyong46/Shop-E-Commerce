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
import projectsTableData from "layouts/tables/data/projectsTableData";
import cancelTableData from "layouts/tables/data/cancelTableData";
import watingTableData from "layouts/tables/data/watingTableData";
import watingAcceptTableData from "layouts/tables/data/watingAcceptTableData";

import { useState, useRef, useMemo } from "react";
import { Tab, Tabs, Typography } from "@mui/material";

function Orders() {
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const { columns: wColumns, rows: wRows } = watingTableData();
  const { columns: waColumns, rows: waRows } = watingAcceptTableData();
  const { columns: cColumns, rows: cRows } = cancelTableData();

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
            <MDBox sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="chờ xác nhận" />
                <Tab label="Đang giao" />
                <Tab label="Đã giao" />
                <Tab label="Đơn Huỷ" />
              </Tabs>
            </MDBox>
            <CustomTabPanel value={value} index={0}>
              <Grid item xs={12}>
                <Card>
                  <MDBox pt={3}>
                    <DataTable
                      table={{ columns: wColumns, rows: wRows }}
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
                  <MDBox pt={3}>
                    <DataTable
                      table={{ columns: waColumns, rows: waRows }}
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
              <Grid item xs={12}>
                <Card>
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
            <CustomTabPanel value={value} index={3}>
              <Grid item xs={12}>
                <Card>
                  <MDBox pt={3}>
                    <DataTable
                      table={{ columns: cColumns, rows: cRows }}
                      isSorted={false}
                      entriesPerPage={false}
                      showTotalEntries={false}
                      noEndBorder
                    />
                  </MDBox>
                </Card>
              </Grid>
            </CustomTabPanel>
          </Stack>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Orders;
