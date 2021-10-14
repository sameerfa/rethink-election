import Layout from "../../components/Layout";
import useStyles from "../../utils/styles";
import { useRouter } from "next/router";
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@material-ui/core";
import { AccountBalance } from "@material-ui/icons";

function ConstituencyScreen() {
  const classes = useStyles();
  const router = useRouter();
  const { name } = router.query;

  return (
    <Layout
      title={`${name} Assembly Election Results`}
      description={`${name} Assembly Election Results`}
    >
      <Card className={classes.card} variant="elevation">
        <div className={classes.cardHeader}>
          <h1 className={classes.headingOne}>
            {name} 2021 Assembly Election Results
          </h1>
          <div>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button>2021</Button>
              <Button>2016</Button>
              <Button>2011</Button>
            </ButtonGroup>
          </div>
        </div>
        <Grid className={classes.charts} container spacing={4}>
          <Grid item xs={3}>
            <Card variant="outlined">
              <CardContent>
                <AccountBalance />
                <Typography gutterBottom variant="h5" component="div">
                  DMK
                </Typography>
                <Typography variant="body2">Winning Party</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card variant="outlined">
              <CardContent>
                <AccountBalance />
                <Typography gutterBottom variant="h5" component="div">
                  234
                </Typography>
                <Typography variant="body2">Total Constituency</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card variant="outlined">
              <CardContent>
                <AccountBalance />
                <Typography gutterBottom variant="h5" component="div">
                  4000
                </Typography>
                <Typography variant="body2">Total Candidates</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card variant="outlined">
              <CardContent>
                <AccountBalance />
                <Typography gutterBottom variant="h5" component="div">
                  DMK
                </Typography>
                <Typography variant="body2">Winning Party</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Card>
      <Grid className={classes.charts} container spacing={2}>
        <Grid item xs={6}>
          <Card className={classes.card} variant="outlined">
            Age Chart
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.card} variant="outlined">
            Education Chart
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.card} variant="outlined">
            Criminal Cases Chart
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.card} variant="outlined">
            Assets & Liability Chart
          </Card>
        </Grid>
      </Grid>
      <Grid className={classes.charts} container spacing={1}>
        <Grid item xs={12}>
          <Card className={classes.card} variant="outlined">
            Constituency Table
          </Card>
        </Grid>
      </Grid>
      <Grid className={classes.charts} container spacing={1}>
        <Grid item xs={12}>
          <Card className={classes.card} variant="outlined">
            Winning History
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default ConstituencyScreen;
