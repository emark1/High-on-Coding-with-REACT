import React, { Component } from 'react';

export class Article extends Component {

    render() {

      let articles = this.props.articles
      let articleItems = articles.map((article) => {
        return         <div>
        <span className="articletitles">{article.title}</span>
        <p><span>{article.body}</span></p>
        <div className="commentbanner"><span className="commentfont">{article.nocomments} comments      {article.nolikes} likes</span></div>
        </div> 
      })
      return (

          <ul >
            <li>
              {articleItems}
            </li>
          </ul>
        // <div>
        // <span className="articletitles">{article.title}</span>
        // <p><span>{article.body}</span></p>
        // <div className="commentbanner"><span className="commentfont">{article.nocomments} comments      {article.nolikes} likes</span></div>
        // </div> 
        // {/* <div >
        // <span className="articletitles">{this.props.title}</span>
        // <p><span>{this.props.body}</span></p>
        // <div className="commentbanner"><span className="commentfont">{this.props.nocomments} comments      {this.props.nolikes} likes</span></div>
        // </div> */}
      )
    }
  
  }


