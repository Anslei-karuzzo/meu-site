import { defineConfig } from 'tinacms'

export default defineConfig({
  clientId: process.env.TINA_CLIENT_ID, // necessário para autenticação
  branch: 'main',
  media: {
    loadMedia: () => {
      // Configuração de mídia
    },
  },
  collections: [
    {
      name: 'posts',
      label: 'Posts',
      path: 'content/posts',
      fields: [
        { type: 'string', name: 'title', label: 'Title' },
        { type: 'textarea', name: 'body', label: 'Body' },
      ],
    },
  ],
})
