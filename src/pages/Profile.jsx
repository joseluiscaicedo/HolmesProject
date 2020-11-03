import React from 'react';

import Layout from '../components/Layout';
import SimilarListings from '../components/SimilarListings';
import ActionButton from '../components/ActionButton';

import '../assets/styles/profile.scss';

import photoUser from '../assets/images/ProfileForm.jpg';
import { Container, FormControl, InputLabel, Input, FormHelperText, Grid } from '@material-ui/core';
import ButtonMenu from '../components/ButtonMenu';

const Profile = () => {
  const open = () => (
    $("#uploadfile").click());
  return (
    <>
      <Layout>
        <section className='userData'>
          <h1>Mi Perfil</h1>
        </section>

        <div className='Grid'>
          <div className='Grid__Formulario'>
            <Container className='Grid__Formulario--container'>
              <Grid container>
                <Grid item lg={10}>
                  <FormControl fullWidth={true}>
                    <InputLabel className='Grid__Formulario--label' htmlFor='usuario'>Usuario</InputLabel>
                    <Input id='usuario' aria-describedby='usuario-helper-text' />
                    <FormHelperText id='usuario-helper-text'>Escribe un usuario.</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item md={10}>
                  <FormControl fullWidth={true}>
                    <InputLabel className='Grid__Formulario--label' htmlFor='nombre'>Nombre</InputLabel>
                    <Input id='nombre' aria-describedby='nombre-helper-text' />
                    <FormHelperText id='nombre-helper-text'>Escribe tu nombre.</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item md={10}>
                  <FormControl fullWidth={true}>
                    <InputLabel className='Grid__Formulario--label' htmlFor='apellido'>Apellido</InputLabel>
                    <Input id='apellido' aria-describedby='apellido-helper-text' />
                    <FormHelperText id='apellido-helper-text'>Escribe tu apellido.</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item md={10}>
                  <FormControl fullWidth={true}>
                    <InputLabel className='Grid__Formulario--label' htmlFor='email'>Correo</InputLabel>
                    <Input id='email' aria-describedby='email-helper-text' />
                    <FormHelperText id='email-helper-text'>Escribe tu correo electrónico.</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item md={10}>
                  <FormControl fullWidth={true}>
                    <InputLabel className='Grid__Formulario--label' htmlFor='telefono'>Telefono</InputLabel>
                    <Input id='telefono' aria-describedby='telefono-helper-text' />
                    <FormHelperText id='telefono-helper-text'>Escribe tu número telefónico.</FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
            </Container>
          </div>

          <div className='Grid__Imagen'>
            <img className='Grid__Imagen--usuario' src={photoUser} alt='' />
            <div className='Grid__Imagen--btnCambiar'>
            <ActionButton text='Cambiar imágen' onClick={open} ><input type="file" id="uploadfile" /> </ActionButton>
            </div>
          </div>
          <div className='Grid__Cambios'>
            <div className='Grid__BotonCambios'>
            <ActionButton text='Guardar cambios' />
            </div>
          </div>
          <div className='Grid__imagen--contraseña'>
            <ActionButton text='Cambiar Contraseña' mode='darkred' />
          </div>
        </div>

        <div className='Mis__Publicaciones'>
          <h1>Mis Publicaciones</h1>
        </div>
        <div className='Grid__MisFavoritos'>
          <SimilarListings />
        </div>
        <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <ActionButton text='Añadir Publicación' to='/addpost'></ActionButton><br/><br/><br/><br/>
        <div className='Mis__Favoritos'>
          <h1>Mis Favoritos</h1>
        </div>

        <div className='Grid__Publicaciones'>
          <SimilarListings />
        </div>
        <br/><br/>
      </Layout>

    </>
  );
};

export default Profile;
