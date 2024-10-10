import { Stack, Typography } from "@mui/material";

const Yes = () => {
  return (
    <Stack direction="column" spacing={3}>
      <Typography variant="h2">💖 You are awesome! 💖</Typography>
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWd6MDM2NWFqeDg0bnB1YWtxb3QzdHBpaW82ZzZ4aGgzODdjeHFwYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MDJ9IbxxvDUQM/giphy.gif"
        width="620"
        height="350"
      />
    </Stack>
  );
};

export default Yes;
