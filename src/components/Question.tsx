import { Button, Stack, Typography } from "@mui/material";
import { Answer } from "../App";

type Props = {
  handleChoose: (value: Answer) => void;
};

const Question = ({ handleChoose }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.name as Answer;
    handleChoose(value);
  };

  return (
    <Stack>
      <Typography variant="h1" mb={4}>
        Hey, do you like React?
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="contained" name="yes" onClick={handleClick}>
          Yes! I love it!
        </Button>
        <Button variant="outlined" name="no" onClick={handleClick}>
          No. I hate it.
        </Button>
      </Stack>
    </Stack>
  );
};

export default Question;
