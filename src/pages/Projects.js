import React from 'react'
const myProjects = [{
  title: 'Business Land',
  description: 'A simple landing page developed with HTML and CSS',
  url: ' https://moufida-hakim.github.io/business-land/'
}]
// {
//   title: 'to doom',
//   description: 'A simple to do list developed with HTML and CSS',
//   url: ' https://moufida-hakim.githu.io/business-land/'
// }
function Projects() {
  return (
    <div>
      {myProjects.map((item, index) => (
        <div style={{ padding: 20 }}>
          <div class="card" >
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>Some
              <p class="card-text"> {item.description}</p>
              <a href={item.url} target='_blank'class="card-link">Preview</a>
            </div>
          </div>
        </div>

      ))}
    </div>
  )
}

export default Projects