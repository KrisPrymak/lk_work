import {
  Button,
  createTheme,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
} from "@mui/material";
import React, { useState } from "react";
import style from "./SearchForm.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const theme = createTheme({
  palette: {
    primary: {
      main: "#757575",
      primary: "#A3A3A3",
    },
  },
  typography: {
    fontFamily: `"Tahoma", "Verdana", sans-serif`,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    fontSize: 16,
    textTransform: "none",
  },
});

const SearchForm = ({setIsOpenList}) => {
    const [selectedPaid, setSelectedPaid] = useState(null);

    const onPaidChange = (event) => {
        setSelectedPaid(event.target.value)
        if (event) {
          setIsOpenList(true)
        }
    }
  return (
    <ThemeProvider theme={theme}>
      <form className={style.searchForm}>
        <Box sx={{ height: "44px"}}>
         <TextField
            id="outlined-basic"
            type="search"
            label="Поиск услуги..."
            variant="outlined"
            size="small"
            sx={{ width: {xs: '86%', md: "79%"}, borderRadius: "5px 0px 0px 5px"}}
          />
          <Button
            size="medium"
            startIcon={<SearchIcon />}
            variant="contained"
            sx={{
              width: "21%",
              height: "44px",
              backgroundColor: "#757575",
              borderRadius: "0px 5px 5px 0px",
              fontSize: "14px",
              textTransform: "none",
              fontWeight: "700",
              display: {xs: 'none', md: 'inline-flex'}
            }}
          >
            Найти
          </Button>
          <Button
            size="medium"
            startIcon={<SearchIcon />}
            variant="contained"
            sx={{
              width: {xs: "14%"},
              height: "44px",
              backgroundColor: "#757575",
              borderRadius: "0px 5px 5px 0px",
              fontSize: "14px",
              textTransform: "none",
              fontWeight: "700",
              minWidth: '10px',
              justifyContent: 'space-between',
              display: {xs: 'inline-flex', md: 'none'}
            }}
          >
          </Button>
        </Box>

        <div className={style.searchForm__controls}>
          <FormControl sx={{ width: "154px"}}>
            <InputLabel sx={{textAlign: 'center'}} id="paid">Платно/ОМС</InputLabel>
            <Select
            IconComponent={ExpandMoreIcon}
              labelId="paid-label"
              id="paid"
              label="Платно/ОМС"
              onChange={onPaidChange}
            >
              <MenuItem value={"Платно"}>Платно</MenuItem>
              <MenuItem value={"ОМС"}>ОМС</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ width: {xs: '154px', md: "255px"}, height: "44px" }}>
            <InputLabel id="doctor-label">Врач</InputLabel>
            <Select
            IconComponent={ExpandMoreIcon}
              labelId="doctor-label"
              id="doctor"
              label="doctor"
            ></Select>
          </FormControl>

          <FormControl sx={{ width: {xs: '343px', md: "255px"}, height: "44px", mt: {xs: '10px', md: '0'}, mb: {xs: '10px'} }}>
            <InputLabel id="demo-simple-select-label">Отделение</InputLabel>
            <Select
            IconComponent={ExpandMoreIcon}
              labelId="departament-label"
              id="departament"
              label="departamentС"
            ></Select>
          </FormControl>
        </div>
        {selectedPaid === 'ОМС' ?
        <div className={style.searchForm__oms}>Для посещение услуг <span className={style.bold}>ОМС</span> Вам требуется <span className={style.bold}>направление</span>.</div> :
        <div className={style.searchForm__help}>
          Для поиска услуги введите название или используйте фильтрацию.
        </div>
        }
      </form>
    </ThemeProvider>
  );
};

export default SearchForm;
