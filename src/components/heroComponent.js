import React, { Component } from 'react';

class HeroComponent extends Component {
    state = {  } 
    render() { 
        return (
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">Rick and Morty API </h1>
                    <p className="lead text-body-secondary">
                    This app will help you get familiar with the resources 
                    of the Rick and Morty API and show you episodes
                    for each character in the show.
                    </p>
                    <p>
                    </p>
                </div>
                </div>
            </section>
        );
    }
}
 
export default HeroComponent;