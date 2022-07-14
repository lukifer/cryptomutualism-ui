import * as React from 'react'
import { Convert } from "../types";
// import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

import json from '../content/content.json'
const {projects} = Convert.toTypes(JSON.stringify(json));

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Projects</h1>
        {projects.data.map(project => {
          const {Name, Description, tags} = project.attributes
          return (
            <div>
              <h6>{Name}</h6>
              {Description && <p>{Description}</p>}
              {!!tags.data.length && <ul>
                {tags.data.map(tag => <li>{tag.attributes.Name}</li>)}
              </ul>}
            </div>
          )
        })}
        {/* <Link to="/page-2/">Go to page 2</Link> */}
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
