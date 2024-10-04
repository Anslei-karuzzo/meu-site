import { defineConfig } from 'tinacms';

export default defineConfig({
  clientId: 'Ov23li8uNNRSb2i8MZl2', // Substitua pelo seu Client ID do GitHub
  branch: 'main', // Certifique-se de que está usando o branch correto
  tokenStorage: 'localStorage', // Armazena o token no localStorage para manter o login
  media: {
    loadMedia: () => {
      // Configuração para mídia (opcional)
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
});
