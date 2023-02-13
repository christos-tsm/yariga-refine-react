import { Box, Typography, FormControl, FormHelperText, TextField, TextareaAutosize, Stack, Select, MenuItem, Button } from "@pankod/refine-mui";

import { FormProps } from "interfaces/common";
import CustomButton from "./CustomButton";

const Form: React.FC<FormProps> = ({ type, register, handleImageChange, handleSubmit, formLoading, onFinish, onFinishHandler, propertyImage }) => {
    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142d">
                {type} a property
            </Typography>
            <Box padding="20px" mt={2.5} borderRadius="15px" bgcolor="#fcfcfc">
                <form onSubmit={handleSubmit(onFinishHandler)} style={{ marginTop: "20px", width: "100%", display: "flex", flexDirection: "column", gap: "20px" }}>
                    <FormControl>
                        <FormHelperText sx={{ fontWeight: 500, margin: "10px 0", fontSize: "14px", color: "#11142d" }}>Enter Property Name</FormHelperText>
                        <TextField fullWidth required id="outline-basic" color="info" variant="outlined" {...register("title", { required: true })} />
                    </FormControl>
                    <FormControl>
                        <FormHelperText sx={{ fontWeight: 500, margin: "10px 0", fontSize: "14px", color: "#11142d" }}>Enter Property Description</FormHelperText>
                        <TextareaAutosize
                            minRows={5}
                            required
                            style={{
                                outlineColor: "#0b82f0",
                                width: "100%",
                                background: "transparent",
                                fontSize: "14px",
                                borderColor: "rgba(0,0,0,0.23)",
                                padding: "10px",
                                color: "#919191",
                                borderRadius: "6px",
                            }}
                            {...register("description", { required: true })}
                        />
                    </FormControl>
                    <Stack direction="row" gap={4}>
                        <FormControl sx={{ flex: 1 }}>
                            <FormHelperText sx={{ fontWeight: 500, margin: "10px 0", fontSize: "14px", color: "#11142d" }}>Select Property Type</FormHelperText>
                            <Select
                                color="info"
                                variant="outlined"
                                displayEmpty
                                required
                                inputProps={{ "aria-label": "without label" }}
                                defaultValue="apartment"
                                {...register("propertyType", { required: true })}
                            >
                                <MenuItem value="apartment">Apartment</MenuItem>
                                <MenuItem value="villa">Villa</MenuItem>
                                <MenuItem value="farmhouse">Farmhouse</MenuItem>
                                <MenuItem value="condos">Condos</MenuItem>
                                <MenuItem value="townhouse">Townhouse</MenuItem>
                                <MenuItem value="duplex">Duplex</MenuItem>
                                <MenuItem value="studio">Studio</MenuItem>
                                <MenuItem value="chalet">Chalet</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormHelperText sx={{ fontWeight: 500, margin: "10px 0", fontSize: "14px", color: "#11142d" }}>Enter Property Price</FormHelperText>
                            <TextField fullWidth required id="outline-basic" color="info" type="number" variant="outlined" {...register("price", { required: true })} />
                        </FormControl>
                    </Stack>
                    <FormControl>
                        <FormHelperText sx={{ fontWeight: 500, margin: "10px 0", fontSize: "14px", color: "#11142d" }}>Enter Property Location</FormHelperText>
                        <TextField fullWidth required id="outline-basic" color="info" variant="outlined" {...register("location", { required: true })} />
                    </FormControl>
                    <Stack direction="column" gap={1} justifyContent="center" mb={2}>
                        <Stack direction="row" gap={2}>
                            <Typography color="#11142d" fontSize="14px" fontWeight={500} my="10px">
                                Property Photo
                            </Typography>
                            <Button component="label" sx={{ width: "fit-content", color: "#0b82f0", textTransform: "capitalize", fontSize: "14px" }}>
                                Upload *
                                <input
                                    hidden
                                    accept="image/*"
                                    type="file"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        handleImageChange(e.target.files![0]);
                                    }}
                                />
                            </Button>
                        </Stack>
                        <Typography fontSize="14px" color="#808191" sx={{ wordBreak: "break-all" }}>
                            {propertyImage?.name}
                        </Typography>
                    </Stack>
                    <CustomButton type="submit" title={formLoading ? "Submitting..." : "Submit"} backgroundColor="#475be8" color="#fcfcfc" />
                </form>
            </Box>
        </Box>
    );
};

export default Form;
