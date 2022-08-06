import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>Newzy247</h2>
        <div className="row">
            <div className="col-md-4">
                <Newsitem title="{hello}" description="{hello again}" imageUrl="https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png"/>
            </div>
            <div className="col-md-4">
                <Newsitem title="{hello}" description="{hello again}"/>
            </div>
            <div className="col-md-4">
                <Newsitem title="{hello}" description="{hello again}"/>
            </div>
        </div>    
      </div>
    )
  }
}

export default News