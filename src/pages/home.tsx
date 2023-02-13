import { Typography, Box, Stack } from "@pankod/refine-mui";
import { PieChart, PropertyReferrals, TotalRevenue } from "components";

const Home: React.FC = () => {
    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142d">
                Dashboard
            </Typography>
            <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
                <PieChart title="Properties for sale" value={684} series={[75, 25]} colors={["#475be8", "#e4e8ef"]} />
                <PieChart title="Properties for rent" value={550} series={[55, 45]} colors={["#47a5b8", "#e4e8ef"]} />
                <PieChart title="Total customers" value={5684} series={[85, 15]} colors={["#c4e842", "#e4e8ef"]} />
            </Box>
            <Stack mt="25px" gap={4} direction={{ xs: "column", lg: "row" }} width="100%">
                <TotalRevenue />
                <PropertyReferrals />
            </Stack>
        </Box>
    );
};

export default Home;
