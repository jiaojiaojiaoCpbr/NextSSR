import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image4k from '../public/4K.jpg';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Home: NextPage = ({}) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/customers')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return data.slice(0, 20).map((person) => (
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

export default Home;
