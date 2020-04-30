var homeFnjs = {
  app: null,
  read: function() {
    this.vueOperation();
    this.hitokoto();
  },
  vueOperation: function() {
    this.app = new Vue({
      el: '#app',
      data: {
        myinfo: {
          name: 'HeiYe',
          author: 'HeiYehk',
          description: '不忘初心，方得始终',
          contact: [
            {
              icon: 'qq',
              name: 'QQ',
              info: 'http://wpa.qq.com/msgrd?v=1&uin=1374918347&menu=yes'
            },
            {
              icon: 'email',
              name: 'Email',
              info: 'mailto:heiyehk@foxmail.com'
            },
            {
              icon: 'juejin',
              name: '掘金',
              info: 'https://juejin.im/heiyehk'
            },
            {
              icon: 'git',
              name: 'Github',
              info: 'https://github.com/heiyehk'
            }
          ]
        },
        hitokoto: null,
        routerLink: [
          {
            name: '博客',
            path: '/blog/'
          },
          {
            name: 'Generate Json',
            path: '/generatejson'
          }
        ]
      }
    })
  },
  hitokoto: function() {
    axios.get('https://v1.hitokoto.cn').then(function(res) {
      this.app.hitokoto = res.data;
    })
  }
}