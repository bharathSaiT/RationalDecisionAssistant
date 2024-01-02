import { Typography ,Toolbar , IconButton , Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {

  return (
    <>
      <div position="static">
      <Toolbar>
        {/* Menu icon for mobile */}
        {/* <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}

        {/* Title of the navigation bar */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your App Name
        </Typography>

        {/* Navigation buttons */}
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Services</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </div>
      
    </>
  )
}

export default Navbar
