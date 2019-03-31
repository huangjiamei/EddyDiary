Page({
  onLoad() {
    console.log('Page Load...')
  },
  onShow: function () {
    this.passwordBox = this.selectComponent('#passwordBox')
  },
  data: {
    tipText: '请输入六位数字密码',
    // 用于页面样式的
    valueIsShow: false,
   
    currentValue: '',
    firstValue: '',
    secondValue: ''
  },
  navigatorTo(e) {
    let url = e.currentTarget.dataset.url 
    wx.navigateTo({
      url: url
    })
  },
  // 调用组件中的方法
  toggleValue() {
    this.setData({
      valueIsShow: !this.data.valueIsShow
    }) 
    this.passwordBox.toggleValue()
  },
  inputChange(e) {
    let currentValue = e.detail 
    this.setData({
      currentValue
    })
  },
  saveInputValue() {
    let value = this.data.currentValue
    if (value.length < 6) {
      return
    }
    if (this.data.firstValue == '') {
  
      this.passwordBox.clearCurrentValue() 
      this.passwordBox.toggleValue(false)
    
      this.setData({
        firstValue: value,
        currentValue: '',
        valueIsShow: false,
        tipText: '请再次确认6位数数字密码'
      })
    } else {
      this.setData({
        secondValue: value
      })
    }
  },
  checkPassword() {
    this.saveInputValue()
    console.log('验证密码...')
  }
})
