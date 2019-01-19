module.exports = {
    title: 'HeiYe',  // 设置网站标题
    description : '黑叶HeiYe博客，一个爱于分享和转载前端技术、前端资讯的博客。是记录博主学习和成长的一个自媒体博客、个人博客。使用的是Hexo框架搭建在Github中。',
    base : '/blog/',
    dest: '.vuepress/dist/blog',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' }, // 导航条
            { text: '组件文档', link: '/baseComponents/' },
            { text: '知识库', link: '/knowledge/' },
            { text: 'github',        // 这里是下拉列表展现形式。
                items: [
                    { text: 'focus-outside', link: 'https://github.com/TaoXuSheng/focus-outside' },
                    { text: 'stylus-converter', link: 'https://github.com/TaoXuSheng/stylus-converter' },
                ]
            }
        ],
        sidebar: [
            {
                title: '首页'
            }
        ]
    },
    sidebarDepth: 2
}