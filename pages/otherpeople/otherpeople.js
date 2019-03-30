const app = getApp()
var template = require('../../template/template.js');
Page({

  
  data: {
    
  },
  onDetailTap: function () {
    console.log("onDetailTap"); 
    wx.navigateTo({
      url: '../otherpeople/otherpeople_detail/otherpeople_detail',
    })
    },
  
  
  onLoad: function (options) {
    template.tabbar("tabBar", 1, this)
    wx.request({
      url: 'http://140.143.36.123:8020/diary',
      method: 'GET',
      data: {

      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        var date = res.data;
        that.setData({
          listData: date
        })
      },
      fail: function (res) {
        console.log("...fail...");
      }
    })
  },

  
})
