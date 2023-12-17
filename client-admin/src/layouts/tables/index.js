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
import PropTypes from "prop-types";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

// Data
import projectsTableData from "layouts/tables/data/projectsTableData";
import cancelTableData from "layouts/tables/data/cancelTableData";
import watingTableData from "layouts/tables/data/watingTableData";
import watingAcceptTableData from "layouts/tables/data/watingAcceptTableData";

import { useEffect, useState } from "react";
import { Tab, Tabs, Typography } from "@mui/material";

function Orders() {
  const { columns: pColumns, rows: pRows, getProductClientRecive } = projectsTableData();
  const { columns: wColumns, rows: wRows, getProductWatting } = watingTableData();
  const { columns: waColumns, rows: waRows, getProductWattingAccept } = watingAcceptTableData();
  const { columns: cColumns, rows: cRows, getProductCancel } = cancelTableData();

  const [value, setValue] = useState(0);
  useEffect(() => {
    switch (value) {
      case 0:
        getProductWatting();
        break;
      case 1:
        getProductWattingAccept();
        break;
      case 2:
        getProductClientRecive();
        break;
      case 3:
        getProductCancel();
        break;
    }
  }, [value]);

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
    </DashboardLayout>
  );
}

export default Orders;
