import Button from '@mui/material/Button';
import Footer from '../src/Footer';

export default function Home() {
  return (
    <>
      <Button variant="contained" href="/about">
        Go to about
      </Button>
      <Footer />
    </>
  );
}