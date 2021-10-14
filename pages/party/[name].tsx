import Layout from "../../components/Layout";
import useStyles from "../../utils/styles";
import { useRouter } from "next/router";
import { Card, Typography } from "@material-ui/core";

function PartyScreen() {
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
          <h1 className={classes.headingOne}>{name} Party</h1>
        </div>
      </Card>
      <div className={classes.card}>
          Scatterplot Chart of winning history
      </div>
      <div className={classes.charts}>
        <Card className={classes.card} variant="outlined">
          <div className={classes.cardHeader}>
            <Typography>Politician Name 1</Typography>
          </div>
        </Card>
      </div>
    </Layout>
  );
}

export default PartyScreen;
