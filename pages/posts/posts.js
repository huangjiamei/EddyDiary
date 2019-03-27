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
  },
  formSubmit: function (e) {
    var that = this;
    var formData = e.detail.value.id; //获取表单所有name=id的值  
    wx.request({
      url: 'http://localhost:8080/diary/search.php?id=' + formData,
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
  onLoad: function (options) {
    template.tabbar("tabBar", 0, this)//0表示第一个tabbar
    var that=this
    that.setData({
      content: options.content
    })
    wx.request({
      url: 'http://localhost:8080/diary',
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
  onDetailTap: function () {
    console.log("onDetailTap"); /*父子页面的跳转 只有五级跳转*/
    wx.navigateTo({
      url: '/pages/posts/diarydetail/diarydetail',
    })
  },
  
  showtip: function () {
    wx.showModal({
      title: '提示',
      content: '是否删除',
      success: function (res) {
        if (res.save) {
          console.log("删除");
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  /*
  onLoad: function(options) {

  },
*/
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
