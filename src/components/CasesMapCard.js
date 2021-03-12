import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";

export default function CasesMapCard() {
  return (
    <Card variant="outlined">
      <CardHeader title="Coronavirus cases map" />
      <CardContent>
        <Typography variant="h6" component="span">
          Coronavirus cases map
        </Typography>
      </CardContent>
    </Card>
  );
}
