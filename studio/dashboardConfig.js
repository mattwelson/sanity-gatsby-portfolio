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
                  buildHookId: '60346c1aa2180f49430cf949',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-zebho9de',
                  apiId: 'bd7e4464-7501-4ddb-9d01-49191ecdcd2a'
                },
                {
                  buildHookId: '60346c1aab1d6948162dc539',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-iaf9yj5i',
                  apiId: '649a19d1-51e8-4e0e-8693-b878048e4ad9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mattwelson/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-iaf9yj5i.netlify.app',
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
