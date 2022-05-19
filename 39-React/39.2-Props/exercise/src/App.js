import './App.css';
import Part1 from './Components/Part1';
import { Tweet } from './Components/Tweet';
import Person from './Components/Person';
import BsButton from './Components/BsButton';
import BsCard from './Components/BsCard';


import { Typography, AppBar, Toolbar } from '@mui/material'
import AppleIcon from '@mui/icons-material/Apple';

import ResponsiveAppBar from './Components/ResponseAppBar';

import Badge from '@mui/material/Badge'



function App() {
  return (
    <>
      <ResponsiveAppBar />

      <Typography variant='h1' align='center'>
        Heading1
      </Typography>

      <Badge badgeContent={4} color='primary'>
        <AppleIcon />
      </Badge>

      <AppBar position='sticky'>
        <Toolbar>
          <AppleIcon />
          <Typography variant='h5'>
            Link1
          </Typography>
        </Toolbar>
      </AppBar>




      <h1> Exercise 39.1 </h1>
      <Part1 name="shiva" />

      <Tweet
        id={2}
        username='shivajreddy'
        name='shiva'
        message='hello world'
        msgs={['msg1', 2, "msg3", "reddy", true]}
      />

      <Person
      />

      <BsButton
        color="primary"
        text="woaw"
      />

      <BsCard
        title="title"
        body="body of the card"
      />

    </>
  );
}

export default App;