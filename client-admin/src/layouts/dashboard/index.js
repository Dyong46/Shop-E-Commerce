/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import DataTable from "examples/Tables/DataTable";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import { Link, useNavigate } from "react-router-dom";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Api
import { getStatistical } from "servers/OrderService";
import { getStatisticalYear } from "servers/OrderService";

// React
import { useEffect, useState } from "react";
import productTableData from "./data/productTableData.js";
import accountTableData from "./data/accountTableData.js";

const mang = [];
function Dashboard() {
  const { sales } = reportsLineChartData;
  const [statistical, setStatistical] = useState([]);
  const [statisticalYear, setStatisticalYear] = useState([]);
  const { columns: pColumns, rows: pRows } = productTableData();
  const { columns: aColumns, rows: aRows } = accountTableData();

  const getStatistiCalTotalprice = async () => {
    let getall = await getStatistical();
    setStatistical(getall);
  };

  const getSevenInStatisticalYear = async (y) => {
    let getalls = await getStatisticalYear(y);
    setStatisticalYear(getalls);
    mang.push(getalls);
  };

  useEffect(() => {
    let currentYear = new Date();
    getStatistiCalTotalprice();
    getSevenInStatisticalYear(currentYear.getFullYear());
  }, []);

  const onClick = (category) => {
    // navigate("/tables", { category });
  };

  function statusUI() {
    const elements = [];
    console.log("statistical: ", statistical);
    statistical.map((item, index) => {
      elements.push(
        <Grid item xs={12} md={6} lg={3}>
          <MDBox mb={1.5}>
            <ComplexStatisticsCard
              color="dark"
              icon={item.icon}
              title={item.status}
              count={item.count}
              percentage={{
                color: "success",
                amount: "+55%",
                label: "than lask week",
              }}
            />
          </MDBox>
        </Grid>
      );
    });
    return elements;
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          {statusUI()}
        </Grid>

        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="Thống kê 7 tháng gần nhất"
                  description="Last Campaign Performance"
                  date="Cập nhật 2 ngày trước"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="Tỉ lệ doanh số hằng tháng"
                  description={
                    <>
                      (<strong>+15%</strong>) Tăng trưởng trong tháng.
                    </>
                  }
                  date="Cập nhật 4' trước"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            {/* <Grid item xs={12} md={6} lg={4}> */}
            {/*   <MDBox mb={3}> */}
            {/*     <ReportsLineChart */}
            {/*       color="dark" */}
            {/*       title="completed tasks" */}
            {/*       description="Last Campaign Performance" */}
            {/*       date="just updated" */}
            {/*       chart={tasks} */}
            {/*     /> */}
            {/*   </MDBox> */}
            {/* </Grid> */}
          </Grid>
        </MDBox>

        <MDBox>
          <Grid container spacing={3}>
            {/* <Grid item xs={12} md={6} lg={8}> */}
            {/*   <Projects /> */}
            {/* </Grid> */}
            {/* <Grid item xs={12} md={6} lg={4}> */}
            {/*   <OrdersOverview /> */}
            {/* </Grid> */}

            <Grid item xs={12} md={6} lg={12}>
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

            <Grid item xs={12} md={6} lg={12}>
              <Card>
                <MDBox pt={3}>
                  <DataTable
                    table={{ columns: aColumns, rows: aRows }}
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
      </MDBox>
    </DashboardLayout>
  );
}
export default Dashboard;
