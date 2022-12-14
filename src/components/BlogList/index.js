// Write your JS code here

import {Component} from 'react'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  render() {
    const {blogsList} = this.props

    return (
      <ul className="blog-list">
        {blogsList.map(eachBlog => (
          <BlogItem blogItem={eachBlog} key={eachBlog.id} />
        ))}
      </ul>
    )
  }
}

export default BlogList
