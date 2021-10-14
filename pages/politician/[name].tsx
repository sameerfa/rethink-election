import Layout from "../../components/Layout";
import useStyles from "../../utils/styles";
import { useRouter } from "next/router";
import { Card, Typography } from "@material-ui/core";

function PoliticianScreen() {
  const classes = useStyles();
  const router = useRouter();
  const { name } = router.query;
  return (
    <Layout
      title={`${name} Assembly Election Results`}
      description={`${name} Assembly Election Results`}
    >
      <Card className={classes.card} variant="outlined">
        <h1 className={classes.headingOne}>{name} and personal info</h1>
      </Card>
      <div className={classes.charts}>
        <Card className={classes.card} variant="outlined">
          <Typography>News</Typography>
          <hr />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          ullam veritatis at et voluptate cupiditate perferendis delectus enim
          nihil rerum, eveniet sunt eius nemo fugit iste temporibus? Voluptates,
          illum quisquam! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Voluptatibus ullam veritatis at et voluptate cupiditate
          perferendis delectus enim nihil rerum, eveniet sunt eius nemo fugit
          iste temporibus? Voluptates, illum quisquam! Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Voluptatibus ullam veritatis at et
          voluptate cupiditate perferendis delectus enim nihil rerum, eveniet
          sunt eius nemo fugit iste temporibus? Voluptates, illum quisquam!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          ullam veritatis at et voluptate cupiditate perferendis delectus enim
          nihil rerum, eveniet sunt eius nemo fugit iste temporibus? Voluptates,
          illum quisquam! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Voluptatibus ullam veritatis at et voluptate cupiditate
          perferendis delectus enim nihil rerum, eveniet sunt eius nemo fugit
          iste temporibus? Voluptates, illum quisquam!
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          ullam veritatis at et voluptate cupiditate perferendis delectus enim
          nihil rerum, eveniet sunt eius nemo fugit iste temporibus? Voluptates,
          illum quisquam! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Voluptatibus ullam veritatis at et voluptate cupiditate
          perferendis delectus enim nihil rerum, eveniet sunt eius nemo fugit
          iste temporibus? Voluptates, illum quisquam! Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Voluptatibus ullam veritatis at et
          voluptate cupiditate perferendis delectus enim nihil rerum, eveniet
          sunt eius nemo fugit iste temporibus? Voluptates, illum quisquam!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          ullam veritatis at et voluptate cupiditate perferendis delectus enim
          nihil rerum, eveniet sunt eius nemo fugit iste temporibus? Voluptates,
          illum quisquam! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Voluptatibus ullam veritatis at et voluptate cupiditate
          perferendis delectus enim nihil rerum, eveniet sunt eius nemo fugit
          iste temporibus? Voluptates, illum quisquam!
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          ullam veritatis at et voluptate cupiditate perferendis delectus enim
          nihil rerum, eveniet sunt eius nemo fugit iste temporibus? Voluptates,
          illum quisquam! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Voluptatibus ullam veritatis at et voluptate cupiditate
          perferendis delectus enim nihil rerum, eveniet sunt eius nemo fugit
          iste temporibus? Voluptates, illum quisquam! Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Voluptatibus ullam veritatis at et
          voluptate cupiditate perferendis delectus enim nihil rerum, eveniet
          sunt eius nemo fugit iste temporibus? Voluptates, illum quisquam!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          ullam veritatis at et voluptate cupiditate perferendis delectus enim
          nihil rerum, eveniet sunt eius nemo fugit iste temporibus? Voluptates,
          illum quisquam! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Voluptatibus ullam veritatis at et voluptate cupiditate
          perferendis delectus enim nihil rerum, eveniet sunt eius nemo fugit
          iste temporibus? Voluptates, illum quisquam!
          <br />
          <br />
        </Card>
      </div>
      <div className={classes.charts}>
        <Card variant="outlined" className={classes.card}>
          <Typography>Other candidates contested in Constituency</Typography>
        </Card>
      </div>
    </Layout>
  );
}

export default PoliticianScreen;
