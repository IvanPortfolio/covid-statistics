import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import Routes from "./Routes";
import Layout from "./components/Layout";

const theme = createMuiTheme({});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Routes />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
