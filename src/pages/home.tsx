import { useList } from "@pankod/refine-core";
import { Typography, Box, Stack } from "@pankod/refine-mui";
import { PieChart, PropertyCard, PropertyReferrals, TotalRevenue } from "components";

const Home: React.FC = () => {
    const { data, isLoading, isError } = useList({
        resource: "properties",
        config: {
            pagination: {
                pageSize: 4,
            },
        },
    });

    const latestProperties = data?.data ?? [];

    if (isLoading) return <Typography>Loading...</Typography>;
    if (isError) return <Typography>Something went wrong...</Typography>;

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
            <Box flex={1} borderRadius="15px" padding="20px" bgcolor="#fcfcfc" display="flex" flexDirection="column" minWidth="100%" mt="25px">
                <Typography fontSize={18} fontWeight={600} color="#11142d">
                    Latest Properties
                </Typography>
                <Box mt={2.5} sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                    {latestProperties.map((property) => (
                        <PropertyCard key={property._id} id={property._id} title={property.title} location={property.location} price={property.price} photo={property.photo} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Home;
