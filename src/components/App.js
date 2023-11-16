import React from 'react';
import _ from 'lodash';
import { AboutNav } from './Navigation';
import { BreedNav } from './Navigation';

function App(props) {
  let groupedBreeds = _.groupBy(props.pets, 'breed');
  let uniqueBreeds = Object.keys(groupedBreeds);
  return (
    <div>
      <header className="jumbotron jumbotron-fluid py-4">
        <div className="container">
          <h1>Adopt a Pet</h1>
        </div>
      </header>
      <main className="container">
        <div className="row">
          <div id="navs" className="col-3">
            <AboutNav />
            <BreedNav breeds={uniqueBreeds}/>
          </div>
          <div id="petList" className="col-9">

          </div>
        </div>
      </main>
      <footer className="container">
        <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
      </footer>
    </div>
  );
}

export default App;
