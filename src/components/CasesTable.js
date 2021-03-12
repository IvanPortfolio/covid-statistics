import { Card, CardContent, CardHeader, makeStyles } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "name", headerName: "Country", width: 150 },
  { field: "totalCases", headerName: "Total Cases", width: 150 },
  { field: "totalCases", headerName: "New Cases" },
  { field: "totalCases", headerName: "Total Deaths" },
  { field: "totalCases", headerName: "New Deaths" },
  { field: "totalCases", headerName: "Total Recovered" },
  { field: "totalCases", headerName: "Active cases" },
  { field: "totalCases", headerName: "Serious, Critical" },
  { field: "totalCases", headerName: "Population", width: 140 },
];

const data = [
  { id: 1, name: "United States", totalCases: 100000 },
  { id: 2, name: "United States", totalCases: 100000 },
  { id: 3, name: "United States", totalCases: 100000 },
  { id: 4, name: "United States", totalCases: 100000 },
  { id: 5, name: "United States", totalCases: 100000 },
  { id: 6, name: "United States", totalCases: 100000 },
  { id: 7, name: "United States", totalCases: 100000 },
  { id: 8, name: "United States", totalCases: 100000 },
  { id: 9, name: "United States", totalCases: 100000 },
  { id: 10, name: "United States", totalCases: 100000 },
  { id: 11, name: "United States", totalCases: 100000 },
  { id: 12, name: "United States", totalCases: 100000 },
  { id: 13, name: "United States", totalCases: 100000 },
  { id: 14, name: "United States", totalCases: 100000 },
];

const useClasses = makeStyles((theme) => ({
  gridContainer: {
    width: "100%",
    height: 800,
  },
}));

export default function CasesTable() {
  const classes = useClasses();

  return (
    <Card>
      <CardHeader title={"Cases by Country"} />
      <CardContent>
        <div className={classes.gridContainer}>
          <DataGrid columns={columns} rows={data} />
        </div>
      </CardContent>
    </Card>
  );
}
