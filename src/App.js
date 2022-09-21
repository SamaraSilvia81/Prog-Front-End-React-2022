import './App.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CollectionRomance from './components/CollectionRomance';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const genderBooks = [
  'Romance',
  'Fantasia',
  'Suspense',
  'Aventura',
  'Ficção Científica',
];

function ComboBox() {

  const [value, setValue] = React.useState(genderBooks[-1]);
  const [inputValue, setInputValue] = React.useState('');


  return (

    <div className='geral'>

      <Box sx={{ flexGrow:1}}>
        <AppBar position="static" sx={{ height:100}} >
          <Toolbar className='NavBar'>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2, height:100}}
            >
            <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
             SAM'S LIBRARY
            </Typography>

            <Search>
              <Autocomplete 
                className='mySearch'
                disablePortal
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                id="combo-box-demo"
                options={genderBooks}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Gender" />}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Quando eu coloco {value} não desaparece, mas tbm não rola.
      setValue(top100Films[1])
      */}

      <div className='Cards'> 

        { value !== genderBooks[0] ? null : (
          <CollectionRomance/>
        )}
        
      </div>
    </div>

  );
}

export default ComboBox
