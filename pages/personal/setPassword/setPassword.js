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
    // 记录临时的值，点击按钮后再保存到对应变量中
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
      // 调用组件中的方法，清除之前的值
      this.passwordBox.clearCurrentValue() 
      this.passwordBox.toggleValue(false)
      // 重置页面初始的数据，以及文案的修改
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
