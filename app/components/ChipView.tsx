import { Stack, Chip } from "@mui/material";

interface ChipViewProps {
  names: string[];
}

export const ChipView: React.FC<ChipViewProps> = ({ names }) => {
  return (
    <Stack direction="row" spacing={2} marginBottom={2} justifyContent="center">
      {names.map((name, index) => (
        <Chip key={index} label={name} />
      ))}
    </Stack>
  );
};
