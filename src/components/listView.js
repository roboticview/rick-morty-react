import React, { Component } from 'react';
import axios from 'axios';
import DetailView from './detailView';

class ListView extends Component {
    constructor(){
        super();
        this.state = {
            actors : [],
            episodes : []
        };
        console.log("I am first")
    }
    handleClick(arr){
        const dataEpisodes = [];
        const promises = arr.map((api) =>
            axios.get(api).then(res => res.data.name) 
        );
        Promise.all(promises).then((dataEpisodes) =>
            this.setState({episodes:dataEpisodes})
        )
    }
    componentDidMount(){
        console.log("Now its my turn")
        axios
            .get("https://rickandmortyapi.com/api/character")
            .then((res) => this.setState({actors:res.data.results}));
    }
    render() { 
        console.log("This is render method")
        console.log(this.state.actors)
        return (
            <div className='container'>
                <div className = "row g-3">
                    <div className='col-md-5 col-lg-4 order-md-last'>
                        <DetailView episodes={this.state.episodes} />
                    </div>
                    <div className='col-md-7 col-lg-8'>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {this.state.actors.map(actor =>
                            <div key={actor.id} className='col m-3'>
                                <div className='card shadow-sm'>
                                <img
                                    className="bd-placeholder-img card-img-top"
                                    width="100%"
                                    height="225"
                                    src={actor.image}
                                    aria-label="Placeholder: Thumbnail"
                                    preserveAspectRatio="xMidYMid slice"
                                    focusable="false"
                                    />
                                    <div className="card-body">
                                    <h1 className="card-text">{actor.name}</h1>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                        <button
                                            onClick={() => this.handleClick(actor.episode)}
                                            type="button"
                                            className="btn btn-sm btn-outline-secondary"
                                        >
                                            Episodes
                                        </button>
                                        </div>
                                        <small className="text-muted">{actor.species}</small>
                                    </div>
                                    </div>
                                </div>
                        </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ListView;