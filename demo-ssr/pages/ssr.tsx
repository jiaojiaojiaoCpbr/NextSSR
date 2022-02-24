import type { NextPage } from 'next';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image4k from '../public/4K.jpg';

const Home: NextPage = ({ data }) => {
  return data.map((person) => (
    <>
      <Card key={person.phone} sx={{ minWidth: 275, maxWidth: 300 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {`${person.first_name} ${person.last_name}`}
          </Typography>
          <Typography variant="body2">{`Phone: ${person.phone}`}</Typography>
          <Image src={image4k} alt="4K coconut tree" />
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <br />
    </>
  ));
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://localhost:3000/customers');
  const allData = await res.json();

  // Pass data to the page via props
  return { props: { data: allData.slice(0, 20) } };
}

export default Home;
