export default {
  widgets: [
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
                  buildHookId: '5fba8009649aedac3a75ef58',
                  title: 'Sanity Studio',
                  name: 'foody-studio',
                  apiId: '85cb9953-8364-4d7c-afdf-0a9ce3c8cd62'
                },
                {
                  buildHookId: '5fba8009ef271f9fb2f5e269',
                  title: 'Blog Website',
                  name: 'foody-web',
                  apiId: '53edfe65-3c35-4804-afd0-efcc8646b0f8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/perseon/foody',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://foody-web.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
