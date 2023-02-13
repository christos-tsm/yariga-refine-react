import { Typography, Box, Stack } from "@pankod/refine-mui";

import { propertyReferralsInfo } from "../../constants";

const ProgressBar = ({ title, percentage, color }: { title: string; percentage: number; color: string }) => {
    return (
        <Box width="100%">
            <Stack alignItems="center" justifyContent="space-between" direction="row">
                <Typography fontSize={16} fontWeight={500} color="#11142d">
                    {title}
                </Typography>
                <Typography fontSize={16} fontWeight={500} color="#11142d">
                    {percentage}%
                </Typography>
            </Stack>
            <Box mt={2} position="relative" width="100%" height="8px" borderRadius={1} bgcolor="#e4e8ef">
                <Box width={`${percentage}%`} bgcolor={color} position="absolute" height="100%" borderRadius={1} />
            </Box>
        </Box>
    );
};

const PropertyReferrals: React.FC = () => {
    return (
        <Box p={4} flex={1} bgcolor="#fcfcfc" id="chart" display="flex" flexDirection="column" borderRadius="12px">
            <Typography fontSize={14} color="#808191">
                Property Referrals
            </Typography>
            <Stack gap={4} my="20px" direction="column">
                {propertyReferralsInfo.map((bar) => (
                    <ProgressBar key={bar.title} {...bar} />
                ))}
            </Stack>
        </Box>
    );
};

export default PropertyReferrals;
