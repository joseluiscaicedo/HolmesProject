import React from 'react';
import { connect } from 'react-redux';
import Cover from '../components/Cover';
import Information from '../components/Information';
import Search from '../components/Search';
import Footer from '../components/Footer';
import SimilarListings from '../components/SimilarListings';
import useFetchData from '../hooks/useDatos';

const Home = ({ myList }) => {
  const users = useFetchData('https://api-holmes.herokuapp.com/users');
  console.log(users);
  return (
    <>
      {myList}
      <Cover />
      <Search />
      <SimilarListings />
      <SimilarListings />
      <br />
      <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Te sugerimos ver</h2>
      <SimilarListings />
      <br />
      <br />
      <Information title='Trabaja con nosotros' />
      <Footer title='Haz tus sueños una realidad' />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
  };
};
//export default Home;
export default connect(mapStateToProps, null)(Home);
