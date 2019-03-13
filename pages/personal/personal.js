Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  onDiaryTap: function () {
    console.log("onDiaryTap"); /*父子页面的跳转 只有五级跳转*/
    wx.navigateTo({
      url: '../management/management',
    })
  },
  onTimeTap: function () {
    console.log("onTimeTap"); /*父子页面的跳转 只有五级跳转*/
    wx.navigateTo({
      url: '../timeselect/timeselect',
    })
  },
  onPubTap: function () {
    console.log("onPubTap"); /*父子页面的跳转 只有五级跳转*/
    wx.navigateTo({
      url: '../timeselect/timeselect',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})