import { Box, Container, Stack, Typography, Chip, Button } from "@mui/material";
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

      {/* <Box
        component="img"
        sx={{
          width: "100%",
          height: "auto",
          maxWidth: "600px",
        }}
        alt="Image"
        src="/boy_working.svg"
      /> */}
    </Box>
  );
};
