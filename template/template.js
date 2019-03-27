function tabbarinit() {
  return [{
      "current": 0,
      "pagePath": "/pages/posts/posts",
      "iconPath": "/images/icon/wx_home1.png",
      "selectedIconPath": "/images/icon/wx_home.png",
      "text": "首页"
    },
    {
      "current": 0,
      "pagePath": "/pages/otherpeople/otherpeople",
      "iconPath": "/images/icon/wx_app_people.png",
      "selectedIconPath": "/images/icon/wx_app_people1.png",
      "text": "Ta们说"
    },
    {
      "current": 0,
      "pagePath": "/pages/personal/personal",
      "iconPath": "/images/icon/wx_app_set1.png",
      "selectedIconPath": "/images/icon/wx_app_set.png",
      "text": "个人"

    },
  ]
}
//tabbar 主入口
function tabbarmain(bindName = "tabdata", id, target) {
  var that = target;
  var bindData = {};
  var otabbar = tabbarinit();
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath'] //换当前的icon
  otabbar[id]['current'] = 1;
  bindData[bindName] = otabbar
  that.setData({
    bindData
  });
}

module.exports = {
  tabbar: tabbarmain
}