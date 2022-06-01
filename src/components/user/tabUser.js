import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import '../styles/tabs.css';


function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
      }}
      {...props}
    />
  );
}
export default function NavTabs(props) {
  const [value, setValue] = React.useState(0);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label="exercise" href="/exercise" />
        <LinkTab label="diet" href="/diet" />
        <LinkTab label="Instructions" href="/Instructions" />
      </Tabs>
    </Box>
  );
}
