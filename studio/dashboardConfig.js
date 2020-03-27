export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e7d948fa3a9689c86c62c64',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-xtwv6z3g',
                  apiId: '2529c81b-03aa-4eb5-bcb2-41d8203b4dfa'
                },
                {
                  buildHookId: '5e7d948faa6a0ccd53668bd5',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-3pt44tkh',
                  apiId: 'd60d5395-125f-4853-8fa2-ba2141d4246c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/theoryforcestudio/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-3pt44tkh.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
