module.exports = {
    title: '叶子HeiYe',  // 设置网站标题
    description : '黑叶HeiYe博客，一个爱于分享和转载前端技术、前端资讯的博客。是记录博主学习和成长的一个自媒体博客、个人博客。使用的是Hexo框架搭建在Github中。',
    base : '/blog/',
    dest: '.vuepress/dist/blog',
    head:[
        ['link', { rel: 'heiyehk icon', type: 'image/x-icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        background: '/img/bg.jpg',
        github: 'heiyehk',
        logo: '/img/logo.jpg',
        per_page: 6,
        nav: [
            { text: '主页', link: '/' },
            { text: '技术分享',
                items: [
                    { text: '前端文章', link: '/article/front-end/' },
                    { text: '后端文章', link: '/article/background/' },
                ] 
            },
            { text: '关于我', link: '/about/' },
            { text: '博客园', link: 'https://www.cnblogs.com/hkly/' },
            { text: 'github', link: 'https://github.com/heiyehk' }
        ],
        sidebar: {
            '/article/front-end/': [
                ['/article/front-end/test1', 'test1']
            ],
            '/article/background/': [
                ['/article/background/test1', 'test1']
            ]
        }
    },
    sidebarDepth: 2,
    displayAllHeaders: true
}