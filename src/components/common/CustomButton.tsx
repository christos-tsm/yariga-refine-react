import React from "react";
import { Button } from "@pankod/refine-mui";
import { CustomButtonProps } from "interfaces/common";

const CustomButton: React.FC<CustomButtonProps> = ({ type, fullWidth, handleClick, title, icon, backgroundColor, color }) => {
    return (
        <Button
            type={type === "submit" ? "submit" : "button"}
            onClick={handleClick}
            sx={{
                flex: fullWidth ? 1 : "unset",
                padding: "10px 15px",
                width: fullWidth ? "100%" : "fit-content",
                minWidth: 130,
                backgroundColor,
                color,
                gap: "10px",
                transform: "Capitalize",
                fontSize: "16px",
                fontWeight: "600",
                "&:hover": {
                    opacity: 0.9,
                    backgroundColor,
                },
            }}
        >
            {icon}
            {title}
        </Button>
    );
};

export default CustomButton;
