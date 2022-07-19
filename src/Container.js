import { Grid, Image } from "semantic-ui-react";
import './Container.css'

const src = "https://picsum.photos/1000?random=";

const ContainerCard = (prop) => (
  <Grid columns={4} className="container" doubling stackable>
    <Grid.Column>
      <Image src={src + Number(prop.count + 1)} size="large" rounded centered />
    </Grid.Column>
    <Grid.Column>
      <Image src={src + Number(prop.count + 2)} size="large" rounded centered />
    </Grid.Column>
    <Grid.Column>
      <Image src={src + Number(prop.count + 3)} size="large" rounded centered />
    </Grid.Column>
    <Grid.Column>
      <Image src={src + Number(prop.count + 4)} size="large" rounded centered />
    </Grid.Column>
  </Grid>
);

export default ContainerCard;
