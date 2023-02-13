import { Typography, Box, Stack } from "@pankod/refine-mui";
import { PieChartProps } from "interfaces/home";
import ReactApexChart from "react-apexcharts";

const PieChart: React.FC<PieChartProps> = ({ title, series, colors, value }) => {
    return (
        <Box flex={1} borderRadius="12px" display="flex" minHeight="110px" bgcolor="#fcfcfc" justifyContent="space-between" alignItems="center" pl={3.5} py={2} gap={2}>
            <Stack direction="column">
                <Typography fontSize={14} color="#808191">
                    {title}
                </Typography>
                <Typography fontSize={18} color="#11142d" fontWeight={700} mt={1}>
                    {value}
                </Typography>
            </Stack>
            <ReactApexChart
                options={{
                    chart: { type: "donut" },
                    colors,
                    legend: { show: false },
                    dataLabels: { enabled: false },
                }}
                series={series}
                type="donut"
                width="120px"
            />
        </Box>
    );
};

export default PieChart;
