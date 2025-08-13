import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    about_first_part:
      'Hello, my name is Gabriel Barreto. I am a Front-end Developer and currently work at Teddy Open Finance as a Front-end Software Engineer.',
    about_second_part:
      'I have worked on projects ranging from static landing pages and back-office systems to WebApps using technologies like PWA and WebSockets. Explore my journey through this portfolio 🙇‍♂️',
    graduation_title: 'Education',
    graduation_description:
      'I have a degree in Information Technology Management from São Paulo State Technological College – FATEC Jahu (02/2020 – 12/2023).',
    projects: 'Projects',
    see_more: 'See more information',
    see_less: 'See less information',
    age: 'Age',
    technologies: 'Technologies',
    vscode_configuration_item: 'My configuration (VSCode/Extensions)',
    job_title: 'Mid Level XP',
    cv: 'My resume',
    country: 'Brazil',
    comment_title: 'Comments',
    comment_description:
      'Leave a comment, by pressing enter you can send it directly to my email inbox :)',
    comment_placeholder: 'Comment',
    send_message: 'Message sent successfully :)',
    email_title: 'Portfolio Comment',
    alt_profile_image: 'Profile image',
    alt_profile_frame: 'Profile image frame',
    alt_brazil_flag_icon: 'Brazil flag',
    change_language: 'Mudar para Português'
  },
  pt: {
    about_first_part:
      'Olá, me chamo Gabriel Barreto, sou um Desenvolvedor Front-end e atualmente atuo pela Teddy Open Finance como Engenheiro de Software Frontend.',
    about_second_part:
      'Atuei em projetos que vão desde landing pages estáticas e backoffices a até aplicações WebApp que utilizam recursos como PWA e web sockets. Veja um pouco mais sobre minha trajetória através deste portfólio 🙇‍♂️',
    graduation_title: 'Formação',
    graduation_description:
      'Sou formado pela Faculdade de Tecnologia de São Paulo - FATEC Jahú em Gestão da Tecnologia da Informação (02/2020 - 12/2023).',
    projects: 'Projetos',
    see_more: 'Ver mais informações',
    see_less: 'Ver menos informações',
    age: 'Idade',
    technologies: 'Tecnologias',
    vscode_configuration_item: 'Minha configuração (VSCode/Extensões)',
    job_title: 'Pleno XP',
    cv: 'Meu curriculum',
    country: 'Brasil',
    comment_title: 'Comentários',
    comment_description:
      'Deixe um comentário, ao pressionar enter você poderá enviá-lo diretamente para minha caixa de e-mail :)',
    comment_placeholder: 'Comentário',
    send_message: 'Mensagem enviada com sucesso :)',
    email_title: 'Comentário Do Portfólio',
    alt_profile_image: 'Imagem de perfil',
    alt_profile_frame: 'Moldura da imagem de perfil',
    alt_brazil_flag_icon: 'Bandeira do Brasil',
    change_language: 'Change to English'
  }
}

const i18n = createI18n({
  locale: 'pt',
  legacy: false,
  fallbackLocale: 'en',
  messages
})

export default i18n
