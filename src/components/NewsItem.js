import React, { Component } from 'react'

export default function NewsItem(props) {
        return (
            <div className="card mx-4" style={{boxShadow:'2px 2px 20px 2px grey', position:'relative'}}>
                <img src={props.imgUrl?props.imgUrl:"https://scitechdaily.com/images/Sub-Atomic-Particle-Quantum-Physics-Art-Illustration.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}...</h5>
                    <p className="card-text">{props.description}...</p>
                    <p className="card-text my-3 bg-dark rounded p-2"><small className="text-body-secondary"><span className="text-light">Published by <b>{props.author===null?"Unknown":props.author}</b> on </span><b className="text-info">{new Date(props.Datedate).toGMTString()}</b></small></p>
                    <a href={props.newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    <a href={props.url} target="_blank" className="text-decoration-none badge rounded-pill text-bg-danger" style={{position:'absolute', top:'4.5px', right:'4.5px', cursor:'pointer'}}>{props.source}</a>
                </div>
            </div>
        )
}