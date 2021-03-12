import { Container, makeStyles } from "@material-ui/core";
import HeaderBar from "./HeaderBar";

const useClasses = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },
}));

export default function Layout({ children }) {
  const classes = useClasses();

  return (
    <>
      <HeaderBar />
      <Container className={classes.container}>{children}</Container>
    </>
  );
}
