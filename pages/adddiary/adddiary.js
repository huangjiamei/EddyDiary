//adddiary.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js')
Page({
  data: {
    tempFilePaths: "../../images/icon/wx_app_add1.png",
   
  },
  onLoad: function (options) {
    var time = util.formatMonth(new Date());
    this.setData({
      time: time,
    });
    var date = util.formatDate(new Date());
    this.setData({
      date: date,
    });
  },
  gotoShow: function () {
    var _this = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
      }
    })
  },
showtip:function(){
  wx.showModal({
    title: '记录此刻？',
    content: '是否保存',
    success:function(res){
      if(res.save){
      console.log("保存");
      }
    }
  })
},
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    wx.request({
      url: "http://140.143.36.123:8020/diary",
      method: "POST",
      data: {
        isPrivate: e.detail.value.isPrivate,
        date: e.detail.value.date,
        mood: e.detail.value.mood,
        content: e.detail.value.content,
        location: e.detail.value.location,
        tag: e.detail.value.tag
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res.data);
        wx.navigateBack({
          delta: 1  //小程序关闭当前页面返回上一页面
        })
        wx.showToast({
          title: '添加成功！',
          icon: 'success',
          duration: 2000
        })
      },
    })
    var that = this
    wx.navigateTo({
      url: '/pages/posts/posts?date=' + e.detail.value.date + '&content=' + e.detail.value.content+'&time='+e.detail.value.time+'&mood'+e.detail.value.mood
    })
    wx.navigateTo({
      url: '/pages/posts/diarydetail/diarydetail?date=' + e.detail.value.date + '&content=' + e.detail.value.content + '&time=' + e.detail.value.time + '&mood' + e.detail.value.mood
    })
    console.log("sent message",e.detail.value.content)

  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  onlocationTap: function () {
    console.log("onlocationTap"); 
    wx.navigateTo({
      url: '/pages/location/location',
    })
  },



})
