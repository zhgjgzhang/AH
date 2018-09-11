
var appInstance = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    param: {
      page: 1,
      page_size: 5,
      is_leader_order: 1,
      current_status: 0
    },
    isLeader: 1,
    status: 0,
    noMore: false,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    appInstance.sendRequest({
      url: '/index.php?r=AppGroupBuy/MyGroupBuy',
      data: _this.data.param,
      success: function (data) {
        _this.setData({ list: data.data });
      }
    })
  },
  onShareAppMessage: function (e) {
    let that = this,
        url = '/pages/myGroup/myGroup',
        title = '',
        imageUrl = '';
    if (e.from == 'button') {
      let index = e.target.dataset.index,
          groupInfo = this.data.list[index].form_data.group_buy_order_info,
          teamToken = this.data.list[index].team_token,
          goodsInfo = this.data.list[index].form_data.goods_info[0];
      url = '/eCommerce/pages/joinGroupDetail/joinGroupDetail?detail=' + groupInfo.goods_id + '&teamToken=' + teamToken,
      title = appInstance.getUserInfo('nickname') + ' 喊你拼单啦~ ' + goodsInfo.price + '元拼' + goodsInfo.goods_name + '，火爆抢购中......',
      imageUrl = 'https://www.zhichiwangluo.com/zhichi_frontend/static/webapp/images/group_goods_share.jpeg';
    }

    return appInstance.shareAppMessage({ 
      title: title,
      path: url,
      imageUrl: imageUrl,
      success: function (addTime) {
        app.showToast({ title: '转发成功', duration: 500 });
        // 转发获取积分
        app.sendRequest({
          hideLoading: true,
          url: '/index.php?r=appShop/getIntegralLog',
          data: { add_time: addTime },
          success: function (res) {
            if (res.status == 0) {
              res.data && that.setData({
                'rewardPointObj': {
                  showModal: true,
                  count: res.data,
                  callback: ''
                }
              });
            }
          }
        })
      }
    });
  },
  getGroupOrders: function (e) {
    this.setData({ isLeader: e.currentTarget.dataset.status });
    this.setData({ 'param.page': 1, 'param.current_status': 0, 'param.is_leader_order': e.currentTarget.dataset.status});
    this.setData({ status: 0, noMore: false });
    let _this = this;
    appInstance.sendRequest({
      url: '/index.php?r=AppGroupBuy/MyGroupBuy',
      data: _this.data.param,
      success: function (data) {
        //console.log(data);
        _this.setData({ list: data.data });
      }
    })
  },

  getGroupOrderByStatus: function (e) {
    this.setData({ 'param.page': 1, 'param.current_status': e.currentTarget.dataset.status });
    this.setData({ status: e.currentTarget.dataset.status });
    let _this = this;
    appInstance.sendRequest({
      url: '/index.php?r=AppGroupBuy/MyGroupBuy',
      data: _this.data.param,
      success: function (data) {
        //console.log(data);
        _this.setData({ list: data.data });
      }
    })
  },

  turnToDetail: function (e) {
    let id = e.currentTarget.dataset.orderid;
    appInstance.turnToPage('/eCommerce/pages/groupOrderDetail/groupOrderDetail?id=' + id);
  },

  getMore: function (e) {
    console.warn('more');
    if (e.target.dataset.page !== this.data.param.page) { return };
    if (this.data.noMore) { return };
    let _this = this;
    this.data.param.page = e.target.dataset.page + 1;
    appInstance.sendRequest({
      url: '/index.php?r=AppGroupBuy/MyGroupBuy',
      data: _this.data.param,
      success: function (data) {
        //console.log(data);
        if (data.is_more == 0) { _this.setData({ noMore: true }); }
        if (data.data.length != 0) {
          let list = _this.data.list.concat(data.data);
          _this.setData({ list: list });
          _this.setData({ 'param.page': _this.data.param.page });
        }
      }
    })
  },

  //确认收到退款
  retrieveMoney: function (e) {
    let _this = this;
    appInstance.sendRequest({
      url: '/index.php?r=AppShop/ComfirmRefund',
      data: {
        order_id: e.target.dataset.id
      },
      success: function (data) {
        if (data.status === 0) {
          wx.showToast({
            title: '确认成功',
          });
          _this.onLoad();
        }
      }
    })
  },

  //再拼一次
  onceMore: function (e) {
    let id = e.currentTarget.dataset.id;
    appInstance.turnToPage('/pages/groupGoodsDetail/groupGoodsDetail?detail=' + id);
  },

  //支付
  pay: function (e) {
    let _this = this;
    appInstance.sendRequest({
      url: '/index.php?r=AppShop/GetWxWebappPaymentCode',
      data: {
        order_id: e.target.dataset.id
      },
      success: function (res) {
        var param = res.data,
          orderId = e.target.dataset.id;

        param.orderId = orderId;
        param.goodsType = e.target.dataset.type;
        param.success = function () {
          setTimeout(function () {
            appInstance.turnToPage('/eCommerce/pages/groupOrderDetail/groupOrderDetail?id=' + orderId);
          }, 1500);
        };
        appInstance.wxPay(param);
      }
    })
  },

  goToOrderDetail: function () {
    appInstance.turnToPage('/eCommerce/pages/myOrder/myOrder');
  },

  cancelOrder: function (e) {
    let that = this;
    appInstance.showModal({
      content: '是否取消拼团？',
      showCancel: true,
      confirmText: '是',
      cancelText: '否',
      confirm: function () {
        appInstance.sendRequest({
          url: '/index.php?r=AppShop/CancelOrder',
          data: {
            order_id: e.target.dataset.id
          },
          success: function (res) {
            console.log(res);
            that.onLoad();
          }
        })
      }
    })
  }
})
