const app = getApp()
var template = require('../../template/template.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  onDiaryTap: function () {
    console.log("onDiaryTap"); 
    wx.navigateTo({
      url: '../management/management',
    })
  },
  onTimeTap: function () {
    console.log("onTimeTap"); 
    wx.navigateTo({
      url: '../timeselect/timeselect',
    })
  },
  onPubTap: function () {
    console.log("onPubTap"); 
    wx.navigateTo({
      url: '../timeselect/timeselect?time=晚上几点',
    })
  },
  onPublicTap: function () {
    console.log("onPublishTap"); 
    wx.navigateTo({
      url: '../publish/publish',
    })
  },
  onPwTap: function () {
    console.log("onPwTap");
    wx.navigateTo({
      url: '../personal/setPassword/setPassword',
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123',
      success: function (res) {
        // 转发成功
        // 如果这里有 shareTickets，则说明是分享到群的
        console.log(res.shareTickets)
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  onLoad: function (options) {
    template.tabbar("tabBar", 2, this)//0表示第一个tabbar
    wx.showShareMenu({
      withShareTicket: true
    })

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
