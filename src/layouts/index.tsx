import * as React from 'react'
import Helmet from 'react-helmet'
// import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'

import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'

// interface StaticQueryProps {
//   site: {
//     siteMetadata: {
//       title: string
//       description: string
//       keywords: string
//     }
//   }
// }

// # Write your query or mutation here
// query {
//   projects {
//     data {
//       id
//       attributes {
//         Name
//         URL
//         WhitepaperURL
//         tokens {
//           data {
//             id
//             attributes {
//               Name
//               Fungible
//             }
//           }
//         }
//       }
//     }
//   }
// }

// <StaticQuery
//   query={graphql`
//     query IndexLayoutQuery {
//       site {
//         siteMetadata {
//           title
//           description
//         }
//       }
//     }
//   `}

const siteTemp = {
  site: {
    siteMetadata: {
      title: 'Crypto-Mutualism',
      description: '',
      keywords: ''
    }
  }
}

const data = siteTemp

interface IndexLayoutProps {
  children: React.ReactNode
}

const IndexLayout: React.FC<IndexLayoutProps> = ({ children }) => (
  <LayoutRoot>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords }
      ]}
    />
    <Header title={data.site.siteMetadata.title} />
    <LayoutMain>{children}</LayoutMain>
  </LayoutRoot>
)

export default IndexLayout
