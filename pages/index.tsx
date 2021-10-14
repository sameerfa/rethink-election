import { Button, Grid, TextField, Link } from "@material-ui/core";
import Layout from "../components/Layout";
import useStyles from "../utils/styles";
import NextLink from "next/link";

export default function Home() {
  const classes = useStyles();
  return (
    <Layout description="" title="">
      <TextField
        fullWidth
        label="Search for State, Constituency or Politician..."
        id="fullWidth"
        variant="outlined"
      />
      <div className={classes.charts}>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nisi
          facere nemo saepe fugiat praesentium nostrum nesciunt eos repellat
          minus, assumenda laborum, necessitatibus quidem fuga hic dolor tempora
          eius ullam.
        </h1>
        <Grid container spacing={2}>
          <Grid item>
            <NextLink href="/assembly-election/Andhra Pradesh" passHref>
              <Link>
                <Button variant="outlined">Andhra Pradesh</Button>
              </Link>
            </NextLink>
          </Grid>
          <Grid item>
            <Button variant="outlined">Arunachal Pradesh</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Assam</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Bihar</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Chattisgarh</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Delhi</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Goa</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Gujarat</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Haryana</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Himachal Pradesh</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Jammu & Kashmir</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Jharkhand</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Karnataka</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Kerala</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Madhya Pradesh</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Maharashtra</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Manipur</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Meghalaya</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Mizoram</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Nagaland</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Odisha</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Puducherry</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Punjab</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Rajasthan</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Sikkim</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Tamil Nadu</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Telangana</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Tripura</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Uttarakhand</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Uttar Pradesh</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">West Bengal</Button>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}
