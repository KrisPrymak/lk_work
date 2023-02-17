import { Button } from '@mui/material';
import React from 'react';
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const ButtonBack = ({handleClick}) => {
    return (
        <Button
        variant="outlined"
        sx={{ textTransform: "None", mt: { xs: "30px" } }}
        onClick={handleClick}
        startIcon={<KeyboardBackspaceIcon />}
      >
        Назад
      </Button>
    );
};

export default ButtonBack;