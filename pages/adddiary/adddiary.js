//adddiary.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    //let { isPrivate, date, mood, content, location, tag } = e.detail.value;
    wx.request({
      url: "http://localhost:8080/adddiary",
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

  },
  formReset: function () {
    console.log('form发生了reset事件')
  }

})
