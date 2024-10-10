import { Button, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";

type Props = {
  handleTryAgain: () => void;
};

const No = ({ handleTryAgain }: Props) => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Stack direction="column" spacing={3}>
      <Typography variant="h3">😥 Please try again</Typography>
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGcyZnVlcWU5ajdudWd5eXBiMnh6bzBkcml6azQ3cWQ5dDN4NzNvNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/YmVNzDnboB0RQEpmLr/giphy.gif"
        width="600"
        height="550"
      />
      <Button
        variant="contained"
        color="primary"
        name="yes"
        disabled={seconds > 0}
        onClick={handleTryAgain}
      >
        Try again
        {seconds > 0 && ` in ${seconds} seconds`}
      </Button>
    </Stack>
  );
};

export default No;
