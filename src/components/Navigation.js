import React from 'react';

export function AboutNav() {
    return (
        <nav id="aboutLinks">
         <h2>About</h2>
          <ul class="list-unstyled">
            <li><a href="#/">How to Adopt</a></li>
            <li><a href="#/">Volunteering</a></li>
            <li><a href="#/">Events</a></li>
            <li><a href="#/">Donate</a></li>
            <li><a href="#/">About Us</a></li>
          </ul>
        </nav>
    );
}

export function BreedNav({ breeds }) {
    let breedLinks = breeds.map((breed, index) => (
        <li key={index}><a href=' '>{breed}</a></li>
    ));
    return (
        <nav id="breedLinks">
            <h2>Pick a Breed</h2>
            <ul>{breedLinks}</ul>           
        </nav>
    );
}