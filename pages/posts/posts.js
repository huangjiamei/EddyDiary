// pages/posts/posts.js
const app = getApp()
var template = require('../../template/template.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [],
    result: '',
    state: '',
    start_date: '',
    finddate:"",

  },
  //搜索日记
  formSubmit: function (e) {
    var that = this;
    var formData = e.detail.value.id; //获取表单所有name=id的值  
    wx.request({
      url: 'http://localhost:8080/deletediary',
      data: formData,
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log(res.data)
        that.setData({
          re: res.data,
        })
        wx.showToast({
          title: '已提交',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  //事件处理函数
  //加载日记列表
  onLoad: function (e) {
    
    template.tabbar("tabBar", 0, this)//0表示第一个tabbar
    var that = this;
    wx.request({
      url: 'http://localhost:8020/diary',
      method: 'GET',
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        var date = res.data
        that.setData({
          listData: date
        })
        var string=date[0].date
        var start_date = string[8];
        var end_date = string[9];
        var finddate = start_date + end_date
        that.setData({
          finddate:finddate
        })
        console.log("test"+start_date+end_date);
      },
        
      fail: function (res) {
        console.log("...fail...");
      },
    })
    // var that = this;
    // var start=that.date;
    // var start_date = that.date.replace(/-/g, "/");
  },
  onDetailTap: function () {
    console.log("onDetailTap");
    wx.navigateTo({
      url: '/pages/posts/diarydetail/diarydetail',
    })
  },

  onAddTap: function () {
    console.log("onAddTap");
    wx.navigateTo({
      url: '/pages/adddiary/adddiary',
    })
  },
  onManageTap: function () {
    console.log("onmanageTap");
    wx.navigateTo({
      url: '/pages/management/management',
    })
  },
  // showtip: function () {
  //   wx.showModal({
  //     title: '提示',
  //     content: '是否删除',
  //     success: function (res) {
  //       if (res.confirm) {
  //         var current = e.detail.value.diaryid;
  //         console.log("dangqian"+current);
  //         var list = this.data.list
  //         list.splice(current, 1)
  //         this.setData({
  //           list: list
  //         })
  //         console.log("删除");
  //       }
  //     }
  //   })
  // },
  delete: function (e) {
    let that = this;
    wx.request({
      url: "http://140.143.36.123:8020/diary",
      header: {
        'content-type': 'application/json'
      },
      method: 'DELETE',
      success: function (res) {
        console.log(res.data)
        that.setData({
          re: res.data,
        })
      wx.showModal({
        title: '提示',
        content: '是否删除',
        success: function (res) {
          if (res.confirm) {
            var current = e.detail.value.diaryid;
            console.log("dangqian" + current);
            var list = this.data.list
            list.splice(current, 1)
            this.setData({
              list: list
            })
            console.log("删除");
          }
        }
      })
      }
    })
  },
})
