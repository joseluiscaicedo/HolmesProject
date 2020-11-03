import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const countries = [
  {
    value: 'MX',
    label: 'México',
  },
  {
    value: 'COL',
    label: 'Colombia',
  },
];
const states = [
  {
    value: 'MX',
    label: 'México',
  },
  {
    value: 'COL',
    label: 'Colombia',
  },
];
const cities = [
  {
    value: 'MX',
    label: 'México',
  },
  {
    value: 'COL',
    label: 'Colombia',
  },
];const sells = [
  {
    value: 'sell',
    label: 'Compra',
  },
  {
    value: 'rent',
    label: 'Renta',
  },
];
const homes = [
  {
    value: 'home',
    label: 'Casa',
  },
  {
    value: 'apartment',
    label: 'Departamento',
  },
  {
    value: 'wipe',
    label: 'Terreno',
  },
  {
    value: 'torre',
    label: 'Edificio',
  },
];
const costs = [
  {
    value: 'price1',
    label: 'Menos de 200USD',
  },
  {
    value: 'price2',
    label: 'entre 201 y 700 USD ',
  },
  {
    value: 'price3',
    label: 'entre 701 y 1,500 USD',
  },
  {
    value: 'price4',
    label: 'Más de 1500USD',
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function ButtonMenu({id, label, description, dataType, type}) {
  const classes = useStyles();
  const [country, setCountry] = React.useState('');
  const [state, setState] = React.useState('');
  const [city, setCity] = React.useState('');
  const [sell, setSell] = React.useState('');
  const [home, setHomes] = React.useState('');
  const [cost, setCCost] = React.useState('');
  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id={id}
          select
          label={label}
          value={country}
          onChange={handleChange}
          helperText={description}
          variant="outlined"
        >
          {countries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
