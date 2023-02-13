import { Typography, Box, Stack } from "@pankod/refine-mui";
import { ArrowCircleUpRounded } from "@mui/icons-material";
import ReactApexChart from "react-apexcharts";
import { TotalRevenueOptions, TotalRevenueSeries } from "./chart.config";

const TotalRevenue: React.FC = () => {
    return (
        <Box p={4} flex={1} bgcolor="#fcfcfc" id="chart" display="flex" flexDirection="column" borderRadius="12px">
            <Typography fontSize={18} fontWeight={600} color="#11142b">
                Total Revenue
            </Typography>
            <Stack my="20px" gap={4} direction="row" flexWrap="wrap">
                <Typography fontSize={20} fontWeight={500} color="#11142b">
                    $236,533
                </Typography>
                <Stack direction="row" alignItems="center" gap={1}>
                    <ArrowCircleUpRounded sx={{ fontSize: 25, color: "#475be8" }} />
                    <Stack>
                        <Typography fontSize={15} color="#475be8">
                            0.8%
                        </Typography>
                        <Typography fontSize={12} color="#808191">
                            Than last month
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <ReactApexChart series={TotalRevenueSeries} type="bar" height={310} options={TotalRevenueOptions} />
        </Box>
    );
};

export default TotalRevenue;
