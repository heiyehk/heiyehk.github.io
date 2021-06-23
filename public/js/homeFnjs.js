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
          name: 'Heiyehk',
          author: 'Heiyehk',
          description: '',
          contact: [
            {
              icon: 'email',
              name: 'Email',
              info: 'mailto:heiyehk@foxmail.com'
            },
            {
              icon: 'juejin',
              name: '掘金',
              info: 'https://juejin.im/user/3650034335225112'
            },
            {
              icon: 'git',
              name: 'Github',
              info: 'https://github.com/heiyehk'
            }
          ]
        },
        hitokoto: null
      }
    })
  },
  hitokoto: function() {
    axios.get('https://v1.hitokoto.cn').then(function(res) {
      this.app.hitokoto = res.data;
    })
  }
}