import React, {Component} from 'react'

class MovieCard extends Component 
{
    render() {
        
        return (
            <div>
                <h2>{this.props.movie.name}</h2>
                {(this.props.movie.liked.length > 0) ? (
                    <div>
                        <p>Liked By:</p>
                    <ul>
                        {this.props.movie.liked.map((liked, index) => (
                            <li key={index}>{liked.name}</li>
                        ))}
                    </ul>
                    </div>
                ): <p>None of the current users liked this movie</p>}
            </div>
        )
    }
}

export default MovieCard