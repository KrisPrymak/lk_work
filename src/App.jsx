import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/material";
import LkTemplatePage from "./components/common/LkTemplatePage/LkTemplatePage";

function App() {

    const theme = createTheme({
        palette: {
            primary: {
                main: "#2c60e3",
            },
            error: {
                main: "#FF0000"
            },
            info: {
                main: "#757575"
            }
        },
        typography: {
            fontFamily: `"Tahoma", "Verdana", sans-serif`,
            fontWeightRegular: 400,
            fontWeightBold: 700,
            fontSize: 16,
            textTransform: "none",
        },
    });


    return (
        <ThemeProvider theme={theme}>
            <div className='App'>
                <LkTemplatePage />
            </div>
        </ThemeProvider>
    )
}

export default App