// Write your JS code here

import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {title, description, publishedDate} = blogItem
  return (
    <li className="blog-item">
      <div className="title-date-card">
        <h1 className="title">{title}</h1>
        <p className="published-date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
