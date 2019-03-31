const app = getApp()
var template = require('../../template/template.js');
Page({

  
  data: {
    listData:[{
      image:"../../images/photo/1.jpg",
      name:"damei",
      time:"17:00",
      date:"03-25",
      content:"开心点了外卖",
    },
      {
        image: "../../images/photo/2.jpg",
        name: "damei",
        time: "17:00",
        date: "03-25",
        content: "代码写不出来",
      },
      {
        image: "../../images/photo/3.jpg",
        name: "damei",
        time: "17:00",
        date: "03-25",
        content: "玉渊潭的花真好看",
      },
      {
        image: "../../images/photo/cat.jpg",
        name: "damei",
        time: "17:00",
        date: "03-25",
        content: "今天的程序没有bug",
      },
      {
        image: "../../images/photo/iqiyi.jpg",
        name: "damei",
        time: "17:00",
        date: "03-25",
        content: "吃火锅喽",
      }

    ]
    
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
