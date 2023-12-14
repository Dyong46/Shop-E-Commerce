/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
**/

import { getStatisticalYear } from "servers/OrderService";

var mang = [];
async function statisticalYear() {
  const getSevenInStatisticalYear = async (y) => {
    let getalls = await getStatisticalYear(y);
    mang.push(getalls);
  };

  let currentYear = new Date();
  await getSevenInStatisticalYear(currentYear.getFullYear());

  return mang;
}
statisticalYear();

export default {
  labels: ["Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
  datasets: { label: "Sales", data: mang },
};
