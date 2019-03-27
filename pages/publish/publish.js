Page({
  data: {
    items: [
      { name: 'private', value: '私密', checked: 'true'},
      { name: 'public', value: '匿名公开' },
     
    ]
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  }
})
