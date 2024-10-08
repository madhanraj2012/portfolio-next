import { Box } from "@mui/material";
import Image from "next/image";

interface ProjectImageViewProps {
  path?: string;
}

export const ProjectImageView: React.FC<ProjectImageViewProps> = ({
  path = "",
}) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "150px",
          height: "150px",
          position: "relative",
          borderRadius: "50%",
          backgroundColor: "#fff",
          padding: "5px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}
      >
        <Image
          src={path || "/default_image.jpg"}
          alt="Project Image"
          fill
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
};
