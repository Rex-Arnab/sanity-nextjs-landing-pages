export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6219b481d3eec843eac8485e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-c1z8p3zf',
                  apiId: 'b42bb00a-7a12-4768-8d6c-81c7ff494147'
                },
                {
                  buildHookId: '6219b481af444b504e179e9c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-iny2k8k9',
                  apiId: 'd570507c-6da7-4fe3-b6a9-bcf05db14880'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Rex-Arnab/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-iny2k8k9.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
