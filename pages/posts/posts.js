// pages/posts/posts.js
const app = getApp()
var template = require('../../template/template.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    listData: [],
    //result: '',
    state: '',
    start_date: '',
    finddate:"",
  },
  //事件处理函数
  //加载日记列表
  onLoad: function (e) { 
    template.tabbar("tabBar", 0, this)//0表示第一个tabbar
    var that = this;
    wx.request({
      url: 'http://140.143.36.123:8030/diary',
      method: 'GET',
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        var data = res.data
        that.setData({
          listData: data
        })
        var string=data[0].ddate
        var start_date = string[8];
        var end_date = string[9];
        var finddate = start_date + end_date
        that.setData({
          finddate:finddate
        })
        //console.log("test"+start_date+end_date);
      },    
      fail: function (res) {
        console.log("...fail...");
      },
    })
   
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
  
  //删除函数
  delete: function (e) {
    var that = this; //因为不能直接调用this
    var index = e.currentTarget.dataset.indexdel; //获取自定义的内容下标值
    var list = this.data.listData; //获取数据列表
    console.log(index);
    wx.showModal({
      title: '提示',
      content: '是否确定删除日记？',
      success: function (res) {
        if (res.confirm) {
          wx.request({ //删除数据库中的内容
            url: "http://140.143.36.123:8030/deletediary",
            method: 'POST',
            data: {
              diaryid:index
            },
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function (res) {
              //console.log(res.data)
              //console.log(data);
              //console.log(index);
              console.log("删除")
            }
          })
          list.splice(index,1); //删除指定的内容
          that.setData({ //重新渲染列表
            list:list
          })
        }
      }
    })
   
  },

  //搜索日记
  formSubmit: function (e) {
    var that = this;
    var formData = e.detail.value.id; //获取表单所有name=id的值  
    wx.request({
      url: 'http://140.143.36.123:8030/',
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

})
