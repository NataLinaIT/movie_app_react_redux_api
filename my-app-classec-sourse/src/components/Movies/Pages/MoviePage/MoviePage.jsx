import React, { Component } from 'react'
import CallApi from '../../../../api/api'

export default class MoviePage extends Component {
  componentDidMount(){
    CallApi.get(`/movie/${this.props.match.params.id}`)
    // .then(response => response.json())
    .then(data => console.log(data.genres))

  }
  render() {
    return (
      <div>
        <div></div>
        Movie Page
      </div>
    )
  }
}
