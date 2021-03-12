import { Card, CardContent, CardHeader } from "@material-ui/core";
import CasesChart from "./CasesChart";

export default function CasesStatisticsCard() {
  return (
    <Card variant="outlined">
      <CardHeader title="Daily statistics" />
      <CardContent>
        <CasesChart />
      </CardContent>
    </Card>
  );
}
