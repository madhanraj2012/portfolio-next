import { Box } from "@mui/material";
import Image from "next/image";

export const LandingImageView = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        src="/boy_working.svg"
        alt="Boy Working"
        width={600}
        height={400}
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </Box>
  );
};
