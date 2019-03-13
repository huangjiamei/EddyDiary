const date = new Date()
const hours = []
const minutes = []
for (let i = 0; i <= 24; i++) {
  hours.push(i)
}
for (let i = 0; i <= 60; i++) {
  minutes.push(i)
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hours: hours,
    minute:60,
    hour:10,
    value: [10, 30],
    minutes: minutes,
  },
  bindChange: function(e) {
    const val = e.detail.value
    this.setData({
      hour: this.data.hours[val[0]],
      minutes: this.data.minutes[val[1]],
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})