export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'مستندات فارسی تایپ اسکریپت',
      description:
        'این داکیومنت، مستندات رسمی تایپ اسکریپت را به زبان فارسی ترجمه کرده، و به آن نظم بخشیده است.',
      favicon: '/favicon.ico',
    },
    theme: {
      customizable: false,
      color: 'blue',
      radius: 0.5,
    },
    header: {
      title: 'مستندات فارسی تایپ اسکریپت',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/logo.png',
        dark: '/logo.png',
      },
      nav: [],
      links: [
        {
          icon: 'lucide:github',
          to: 'https://github.com/amirhossein-unlimit/typescript-fa',
          target: '_blank',
        },
      ],
      showLoadingIndicator: true,
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: `© ${new Date().getFullYear()} تمام حقوق این مستندات فارسی تایپ اسکریپت محفوظ است. بازنشر مطالب تنها با ذکر منبع و لینک به سایت مجاز می‌باشد.`,
      links: [
        {
          icon: 'lucide:github',
          to: 'https://github.com/amirhossein-unlimit',
          target: '_blank',
        },
        {
          icon: 'lucide:send',
          to: 'https://t.me/amirhossein-unlimit',
          target: '_blank',
        },
        {
          icon: 'lucide:instagram',
          to: 'https://instagram.com/amirhossein-unlimit',
          target: '_blank',
        },
      ],
    },
    toc: {
      enable: true,
      links: [
        {
          title: 'ستاره دادن',
          icon: 'lucide:star',
          to: 'https://github.com/amirhossein-unlimit/typescript-fa',
          target: '_blank',
        },
        {
          title: 'گزارش مشکل',
          icon: 'lucide:circle-dot',
          to: 'https://github.com/amirhossein-unlimit/typescript-fa/issues',
          target: '_blank',
        },
      ],
    },
    search: {
      enable: true,
      inAside: false,
      placeholder: 'جست و جو ...',
    },
  },
});
