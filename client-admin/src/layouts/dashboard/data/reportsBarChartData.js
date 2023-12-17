import { getStatisticalYear } from "servers/OrderService";

async function statisticalYear() {
  const selectedMonths = [6, 7, 8, 9, 10, 11, 12];
  let res = await getStatisticalYear("2023");
  const resultArray = Array.from({ length: 7 }, () => 0);

  res.forEach((item) => {
    if (selectedMonths.includes(item.month)) {
      resultArray[item.month - 6] = item.totalPrice;
    }
  });

  console.log(resultArray);

  return {
    labels: ["Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
    datasets: { label: "Total", data: resultArray },
  };
}

export default statisticalYear;
