var app = getApp()

Component({
  properties: {
    // 这里定义了传进来的对象属性，属性值可以在组件使用时指定
    pageQRCodeData: {
      type: Object,
      value: {
        shareDialogShow: "100%",
        shareMenuShow: false,
      }
    }
  },
  data: {
    // 这里是一些组件内部数据
    pageQRCodeShow: false,
    pageQRCodeData: {
      shareDialogShow: "100%",
      shareMenuShow: false,
      imageUrl: ''
    },
    showShare: false,
    siteBaseUrl: getApp().globalData.siteBaseUrl 
  },
  ready: function () {
    this.getShareToMomentsSwitch();
  },
  methods: {
    // 获取是否显示转发朋友圈
    getShareToMomentsSwitch: function () {
      let that = this;
      app.sendRequest({
        url: '/index.php?r=AppData/GetShareToMomentsSwitch',
        data: {
        },
        success: function (res) {
          that.setData({
            showShare: res.data
          });
        }
      });
    },
    // 这里是一个自定义方法
    // 隐藏分享组件
    hideShareDialog: function () {
      let animation = wx.createAnimation({
        duration: 200,
        timingFunction: "ease"
      })
      this.animation = animation;
      animation.bottom("-320rpx").step()
      this.setData({
        "pageQRCodeData.shareDialogShow": "100%",
        "pageQRCodeData.shareMenuShow": false,
        "pageQRCodeData.animation": animation.export(),
        "pageQRCodeShow": false
      })
    },
    // 转发到朋友圈
    showPageCode: function () {
      let animation = wx.createAnimation({
        duration: 200,
        timingFunction: "ease"
      })
      this.animation = animation;
      animation.bottom("-320rpx").step()
      this.setData({
        "pageQRCodeData.shareMenuShow": false,
        "pageQRCodeData.animation": animation.export(),
        pageQRCodeShow: true
      });
    },
    stopPropagation: function () {
    },
    savePageCode: function (e) {
      let animation = wx.createAnimation({
        duration: 200,
        timingFunction: "ease"
      })
      this.animation = animation;
      animation.bottom("-320rpx").step()
      let that = this;
      let url = app.getSiteBaseUrl() + '/index.php?r=Download/DownloadShareQRCode&str=' + e.currentTarget.dataset.src;
      wx.showLoading({
        title: '正在下载图片',
        mask: true
      })
      wx.downloadFile({
        url: url,
        success: function (res) {
          console.log(res);
          console.log(url)
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: function (data) {

              wx.showToast({
                title: '保存成功',
                icon: 'success',
                duration: 4000
              })
              that.animation = animation;
              that.animation.bottom("-320rpx").step();
              that.setData({
                "pageQRCodeData.shareDialogShow": "100%",
                "pageQRCodeData.shareMenuShow": false,
                "pageQRCodeData.animation": that.animation.export(),
                "pageQRCodeShow": false
              })
            },
            fail: function(res){
              if (res && (res.errMsg === "saveImageToPhotosAlbum:fail auth deny" || res.errMsg === "saveImageToPhotosAlbum:fail:auth denied")) {
                wx.showModal({
                  title: '提示',
                  content: '您已经拒绝授权保存图片到您的相册，这将影响您使用小程序，您可以点击右上角的菜单按钮，选择关于。进入之后再点击右上角的菜单按钮，选择设置，然后将保存到相册按钮打开，返回之后再重试。',
                  showCancel: false,
                  confirmText: "确定",
                  success: function (res) {
                  }
                })
              }
            }
          })
        },
        complete: function (res) {
          wx.hideLoading();
        }
      })
    }
  }
})