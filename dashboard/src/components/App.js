import React from 'react';
import SideBar from './SideBar';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import ContentWrapper from './ContentWrapper';
import TopBar from './TopBar';
import Footer from './Footer';
import NotFound from './NotFound';
import { Route, Routes } from 'react-router';
function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <Routes>
                      <Route path='/' element={<ContentWrapper/>}/>
                      <Route path='/allGenres' element={<GenresInDb/>}/>
                      <Route path='/lastMovie' element={<LastMovieInDb/>}/>
                      <Route path='/allMovies' element={<ContentRowMovies/>}/>
                      <Route path='*' element={<NotFound />}/>
                    </Routes>
                    <Footer />
                </div>
            </div>  
        </div>
    </React.Fragment>
  );
}

export default App;
