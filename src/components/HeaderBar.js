import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default function HeaderBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">COVID-19 Dashboard</Typography>
      </Toolbar>
    </AppBar>
  );
}
