import { Grid } from "@material-ui/core";
import CasesStatisticsCard from "../components/CasesStatisticsCard";
import CasesTable from "../components/CasesTable";

export default function Dashboard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <CasesStatisticsCard />
      </Grid>
      <Grid item xs={12} md={4}>
        <CasesStatisticsCard />
      </Grid>
      <Grid item xs={12} md={4}>
        <CasesStatisticsCard />
      </Grid>
      <Grid item xs={12}>
        <CasesTable />
      </Grid>
    </Grid>
  );
}
