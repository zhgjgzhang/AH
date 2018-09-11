var app      = getApp();

var pageData = {
  data: {"picture1":{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:0rpx;border-style:none;border-width:0rpx;height:398.4375rpx;width:750rpx;margin-left:auto;margin-right:auto;margin-top:0rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_595da39e9a1b8.jpg","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"hidden":false,"page_form":"","compId":"picture1"},"form_vessel2":{"type":"form-vessel","style":"background-color:rgba(0, 0, 0, 0);margin-top:4.6875rpx;opacity:1;margin-left:auto;","content":[{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(53, 53, 53);font-size:44.53125rpx;font-weight:bold;height:44.53125rpx;width:679.6875rpx;line-height:44.53125rpx;margin-left:auto;margin-top:7.03125rpx;opacity:1;text-align:left;margin-right:auto;","content":"\u8d44\u6e90\u5408\u4f5c","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"hidden":false,"compId":"data.content[0]","formCompid":"form_vessel2","parentCompid":"form_vessel2","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(53, 53, 53);font-size:32.8125rpx;height:44.53125rpx;width:672.65625rpx;line-height:53.90625rpx;margin-left:auto;margin-top:30.46875rpx;opacity:1;text-align:left;margin-right:auto;","content":"\u521b\u4e1a\u8def\u4e0a\u3001\u4ea6\u6216\u4e92\u8054\u7f51+\u521b\u4e1a\u8def\u4e0a\uff0c\u90fd\u4f1a\u9047\u5230\u5404\u79cd\u8d44\u6e90\u77ed\u7f3a\u7684\u60c5\u51b5\uff0c\u4f60\u6709\u76f8\u5173\u8d44\u6e90\u53ef\u4ee5\u5e2e\u52a9\u5230\u4ed6\uff08\u5979\uff09\u5417\uff1f\n\n\u5982\u679c\u4f60\u6709\u521b\u4e1a\u6216\u4e92\u8054\u7f51+\u518d\u521b\u4e1a\u6240\u9700\u7684\u67d0\u79cd\u8d44\u6e90\uff08\u653f\u5e9c\u8d44\u52a9\u9879\u76ee\u4ee3\u7533\u62a5\u3001\u521b\u4e1a\u6cd5\u52a1\u3001\u7ba1\u7406\u54a8\u8be2\u3001\u54c1\u724c\u7b56\u5212\u3001\u4e2a\u4eba\u5f62\u8c61\u8bbe\u8ba1\u3001\u65b0\u5a92\u4f53\u8fd0\u8425\u3001\u4ea7\u54c1\u8bbe\u8ba1\u7b49\uff0c\u6b22\u8fce\u5728\u6b64\u767b\u8bb0\uff01\uff09","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"hidden":false,"compId":"data.content[1]","formCompid":"form_vessel2","parentCompid":"form_vessel2","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(53, 53, 53);font-size:32.8125rpx;height:44.53125rpx;width:679.6875rpx;line-height:44.53125rpx;margin-left:auto;margin-top:30.46875rpx;opacity:1;text-align:left;margin-right:auto;","content":"\u60a8\u516c\u53f8\u7684\u540d\u79f0","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"hidden":false,"compId":"data.content[2]","formCompid":"form_vessel2","parentCompid":"form_vessel2","markColor":"","mode":0},{"type":"input-ele","style":"margin-top:16.40625rpx;margin-left:auto;width:679.6875rpx;height:82.03125rpx;margin-right:auto;opacity:1;border-radius:0rpx;","content":"","customFeature":{"placeholder":""},"animations":[],"hidden":false,"compId":"data.content[3]","formCompid":"form_vessel2","segment_required":0,"parentCompid":"form_vessel2"},{"type":"input-ele","style":"margin-top:16.40625rpx;margin-left:auto;width:679.6875rpx;height:82.03125rpx;margin-right:auto;opacity:1;border-radius:0rpx;","content":"","customFeature":{"placeholder":""},"animations":[],"hidden":false,"compId":"data.content[4]","formCompid":"form_vessel2","segment_required":0,"parentCompid":"form_vessel2"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(53, 53, 53);font-size:32.8125rpx;height:44.53125rpx;width:679.6875rpx;line-height:44.53125rpx;margin-left:auto;margin-top:16.40625rpx;opacity:1;text-align:left;margin-right:auto;","content":"\u8425\u4e1a\u6267\u7167\u3001\u7ec4\u7ec7\u673a\u6784\u4ee3\u7801\u8bc1\u3001\u7a0e\u52a1\u767b\u8bb0\u8bc1\u3001\u6cd5\u4eba\u8eab\u4efd\u8bc1\u7167\u7247","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"hidden":false,"compId":"data.content[5]","formCompid":"form_vessel2","parentCompid":"form_vessel2","markColor":"","mode":0},{"type":"upload-img","style":"margin-top:35.15625rpx;margin-bottom:35.15625rpx;text-align:center;padding:35.15625rpx 0;border-top:2.34375rpx solid #c6c6c6;border-bottom:2.34375rpx solid #c6c6c6;margin-left:auto;","content":"","customFeature":[],"animations":[],"hidden":false,"compId":"data.content[6]","formCompid":"form_vessel2","segment_required":0,"parentCompid":"form_vessel2"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(53, 53, 53);font-size:32.8125rpx;height:44.53125rpx;width:679.6875rpx;line-height:44.53125rpx;margin-left:auto;margin-top:16.40625rpx;opacity:1;text-align:left;margin-right:auto;","content":"\u8425\u4e1a\u6267\u7167\u4e0a\u7684\u7ecf\u8425\u8303\u56f4 ","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"hidden":false,"compId":"data.content[7]","formCompid":"form_vessel2","parentCompid":"form_vessel2","markColor":"","mode":0},{"type":"textarea-ele","style":"margin-top:16.40625rpx;opacity:1;border-radius:0;width:679.6875rpx;height:234.375rpx;margin-left:auto;line-height:70.3125rpx;margin-right:auto;","content":"","customFeature":{"placeholder":""},"animations":[],"hidden":false,"compId":"data.content[8]","formCompid":"form_vessel2","segment_required":0,"parentCompid":"form_vessel2"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(53, 53, 53);font-size:32.8125rpx;height:44.53125rpx;width:679.6875rpx;line-height:44.53125rpx;margin-left:auto;margin-top:16.40625rpx;opacity:1;text-align:left;margin-right:auto;","content":"\u53ef\u63d0\u4f9b\u7684\u8d44\u6e90","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"hidden":false,"compId":"data.content[9]","formCompid":"form_vessel2","parentCompid":"form_vessel2","markColor":"","mode":0},{"type":"input-ele","style":"margin-top:16.40625rpx;margin-left:auto;width:679.6875rpx;height:82.03125rpx;margin-right:auto;opacity:1;border-radius:0rpx;","content":"","customFeature":{"placeholder":""},"animations":[],"hidden":false,"compId":"data.content[10]","formCompid":"form_vessel2","segment_required":0,"parentCompid":"form_vessel2"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(53, 53, 53);font-size:32.8125rpx;height:44.53125rpx;width:679.6875rpx;line-height:44.53125rpx;margin-left:auto;margin-top:16.40625rpx;opacity:1;text-align:left;margin-right:auto;","content":"\u516c\u53f8\u7f51\u5740\uff08\u5982\u6709\uff09","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"hidden":false,"compId":"data.content[11]","formCompid":"form_vessel2","parentCompid":"form_vessel2","markColor":"","mode":0},{"type":"input-ele","style":"margin-top:16.40625rpx;margin-left:auto;width:679.6875rpx;height:82.03125rpx;margin-right:auto;opacity:1;border-radius:0rpx;","content":"","customFeature":{"placeholder":""},"animations":[],"hidden":false,"compId":"data.content[12]","formCompid":"form_vessel2","segment_required":0,"parentCompid":"form_vessel2"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(53, 53, 53);font-size:32.8125rpx;height:44.53125rpx;width:679.6875rpx;line-height:44.53125rpx;margin-left:auto;margin-top:16.40625rpx;opacity:1;text-align:left;margin-right:auto;","content":"\u516c\u53f8\u5730\u5740 ","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"hidden":false,"compId":"data.content[13]","formCompid":"form_vessel2","parentCompid":"form_vessel2","markColor":"","mode":0},{"type":"input-ele","style":"margin-top:16.40625rpx;margin-left:auto;width:679.6875rpx;height:82.03125rpx;margin-right:auto;opacity:1;border-radius:0rpx;","content":"","customFeature":{"placeholder":""},"animations":[],"hidden":false,"compId":"data.content[14]","formCompid":"form_vessel2","segment_required":0,"parentCompid":"form_vessel2"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(53, 53, 53);font-size:32.8125rpx;height:44.53125rpx;width:679.6875rpx;line-height:44.53125rpx;margin-left:auto;margin-top:16.40625rpx;opacity:1;text-align:left;margin-right:auto;","content":"\u8054\u7cfb\u4eba","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"hidden":false,"compId":"data.content[15]","formCompid":"form_vessel2","parentCompid":"form_vessel2","markColor":"","mode":0},{"type":"input-ele","style":"margin-top:16.40625rpx;margin-left:auto;width:679.6875rpx;height:82.03125rpx;margin-right:auto;opacity:1;border-radius:0rpx;","content":"","customFeature":{"placeholder":""},"animations":[],"hidden":false,"compId":"data.content[16]","formCompid":"form_vessel2","segment_required":0,"parentCompid":"form_vessel2"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(53, 53, 53);font-size:32.8125rpx;height:44.53125rpx;width:679.6875rpx;line-height:44.53125rpx;margin-left:auto;margin-top:16.40625rpx;opacity:1;text-align:left;margin-right:auto;","content":"\u8054\u7cfb\u4eba\u624b\u673a ","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"hidden":false,"compId":"data.content[17]","formCompid":"form_vessel2","parentCompid":"form_vessel2","markColor":"","mode":0},{"type":"input-ele","style":"margin-top:16.40625rpx;margin-left:auto;width:679.6875rpx;height:82.03125rpx;margin-right:auto;opacity:1;border-radius:0rpx;","content":"","customFeature":{"placeholder":""},"animations":[],"hidden":false,"compId":"data.content[18]","formCompid":"form_vessel2","segment_required":0,"parentCompid":"form_vessel2"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(53, 53, 53);font-size:32.8125rpx;height:44.53125rpx;width:679.6875rpx;line-height:44.53125rpx;margin-left:auto;margin-top:16.40625rpx;opacity:1;text-align:left;margin-right:auto;","content":"\u8054\u7cfb\u4eba\u5fae\u4fe1","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"hidden":false,"compId":"data.content[19]","formCompid":"form_vessel2","parentCompid":"form_vessel2","markColor":"","mode":0},{"type":"input-ele","style":"margin-top:16.40625rpx;margin-left:auto;width:679.6875rpx;height:82.03125rpx;margin-right:auto;opacity:1;border-radius:0rpx;","content":"","customFeature":{"placeholder":""},"animations":[],"hidden":false,"compId":"data.content[20]","formCompid":"form_vessel2","segment_required":0,"parentCompid":"form_vessel2"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:28.125rpx;height:44.53125rpx;width:679.6875rpx;line-height:44.53125rpx;margin-left:auto;margin-top:16.40625rpx;opacity:1;text-align:left;margin-right:auto;","content":"\u611f\u8c22\u60a8\u63d0\u4ea4\u5165\u9a7b\u7533\u8bf7\uff0c\u63d0\u4ea4\u4fe1\u606f\u540e\uff0c\u4f1a\u6709\u5de5\u4f5c\u4eba\u5458\u4e0e\u60a8\u7535\u8bdd\u6c9f\u901a \u3002","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"hidden":false,"compId":"data.content[21]","formCompid":"form_vessel2","parentCompid":"form_vessel2","markColor":"","mode":0},{"type":"form-button","style":"background-color:rgb(255, 219, 15);border-color:rgb(34, 34, 34);border-radius:7.03125rpx;border-style:none;border-width:0rpx;color:rgb(255, 255, 255);font-size:32.8125rpx;height:82.03125rpx;line-height:82.03125rpx;margin-left:auto;margin-right:auto;margin-top:30.46875rpx;opacity:1;text-align:center;width:679.6875rpx;","content":"\u63d0\u4ea4","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0","segment":"submit-btn"},"animations":[],"hidden":false,"compId":"data.content[22]","parentCompid":"form_vessel2"}],"customFeature":{"form":"","id":"zhichi_284746179660"},"animations":[],"hidden":false,"page_form":"","compId":"form_vessel2","form":"","field_info":[],"formCompid":"form_vessel2"},"text3":{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:42.1875rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;","content":"             ","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"hidden":false,"page_form":"","compId":"text3","markColor":"","mode":0},"has_tabbar":0,"page_hidden":true,"page_form":"","top_nav":{"navigationBarTitleText":"\u5408\u4f5c"},"dataId":""},
    need_login: false,
      bind_phone: false,
    page_router: 'page10002',
    page_form: 'none',
      dataId: '',
      list_compids_params: [],
      user_center_compids_params: [],
      goods_compids_params: [],
  prevPage:0,
      tostoreComps: [],
      carouselGroupidsParams: [],
      relobj_auto: [],
      bbsCompIds: [],
      dynamicVesselComps: [],
      communityComps: [],
      franchiseeComps: [],
      cityLocationComps: [],
      seckillOnLoadCompidParam: [],
      dynamicClassifyGroupidsParams: [],
      newClassifyGroupidsParams: [],
      videoListComps: [],
      videoProjectComps: [],
      newsComps: [],
      popupWindowComps: [],
        formVesselComps: [{"compid":"form_vessel2"}],
      searchComponentParam: [],
      topicComps: [],
      topicClassifyComps: [],
      topicSortComps: [],
      rowNumComps: [],
      sidebarComps: [],
      slidePanelComps: [],
    returnToVersionFlag: true,
  requesting: false,
  requestNum: 1,
  modelChoose: [],
  modelChooseId: '',
  modelChooseName: [],
  onLoad: function (e) {
    if (e.statisticsType == 11) {
      delete e.statisticsType
      delete e.needStatistics
    }
    app.onPageLoad(e);
    app.isNeedRewardModal();

    app.checkCanUse('navigator.target', 'canIUseNavigatorTarget', ['button', 'picture', 'text', 'layout-vessel', 'static-vessel', 'free-vessel', 'title-ele', 'album', 'carousel', 'suspension', 'list', 'announce']);
  },
  dataInitial: function () {
    app.pageDataInitial();
  },
  onPageScroll: function(e) {
    app.onPageScroll(e);
  },
  onShareAppMessage: function (e) {
    if (e.from == 'button') {
      if (e.target.dataset.from == 'topicButton') {
        return app.shareAppMessage({
          path: '/informationManagement/pages/communityDetail/communityDetail?detail=' + e.target.dataset.id,
          desc: e.target.dataset.desc,
          success: function(addTime) {
            app.getIntegralLog(addTime);
            app.CountSpreadCount(e.target.dataset.id);
          }
        });
      }
    };
    return app.onPageShareAppMessage(e, app.getIntegralLog);
  },
  onShow: function () {
    app.onPageShow();
  },
  onHide: function () {
    app.onPageHide();
  },
  reachBottomFuc: [],
  onReachBottom: function () {
    app.onPageReachBottom( this.reachBottomFuc );
  },
  onUnload: function () {
    app.onPageUnload();
  },
  slidePanelStart: function (e) {
    app.slidePanelStart(e);
  },
  slidePanelEnd: function (e) {
    app.slidePanelEnd(e);
  },
  onPullDownRefresh : function(){
    app.onPagePullDownRefresh();
  },
  changeDropDown:function(e){
    app.changeDropDown(e);
  },
  connectWifiHandler:function(e){
    app.connectWifiHandler(e)
  },
  tapPrevewPictureHandler: function (e) {
    app.tapPrevewPictureHandler(e);
  },
  suspensionBottom: function () {
    app.suspensionBottom(this);
  },
  pageScrollFunc: function (e) {
    app.pageScrollFunc(e);
  },
  dynamicVesselScrollFunc: function (e) {
    app.dynamicVesselScrollFunc(e);
  },
  goodsScrollFunc: function (e) {
    app.goodsScrollFunc(e);
  },
  takeoutStyleScrollFunc: function(e){
    app.takeoutStyleScrollFunc(e);
  },
  franchiseeScrollFunc: function (e) {
    app.franchiseeScrollFunc(e);
  },
  seckillScrollFunc: function (e) {
    app.seckillScrollFunc(e);
  },
  videoScrollFunc: function (e) {
    app.videoScrollFunc(e);
  },
  carouselVideoClose: function(e) {
    app.carouselVideoClose(e);
  },
  changeCount: function (e) {
    app.changeCount(e);
  },
  inputChange: function (e) {
    app.inputChange(e);
  },
  bindDateChange: function (e) {
    app.bindDateChange(e);
  },
  bindTimeChange: function (e) {
    app.bindTimeChange(e);
  },
  bindSelectChange: function (e) {
    app.bindSelectChange(e);
  },
  bindScoreChange: function (e) {
    app.bindScoreChange(e);
  },
  bindSliderChange: function (e) {
    app.bindSliderChange(e);
  },
  selectPicOption:function(e){
    app.selectPicOption(e);
  },
  formAddress: function(e){
    app.formAddress(e);
  },
  selectOptionOne: function (e) {
    app.selectOptionOne(e);
  },
  selectOptionSecond: function (e) {
    app.selectOptionSecond(e);
  },
  submitForm: function (e) {
    app.submitForm(e);
  },
  udpateVideoSrc: function (e) {
    app.udpateVideoSrc(e);
  },
  tapMapDetail: function (e) {
    app.tapMapDetail(e);
  },
  uploadFormImg: function (e) {
    app.uploadFormImg(e);
  },
  deleteUploadImg: function (e) {
    app.deleteUploadImg(e);
  },
  listVesselTurnToPage: function (e) {
    app.listVesselTurnToPage(e);
  },
  dynamicVesselTurnToPage: function (e) {
    app.dynamicVesselTurnToPage(e);
  },
  userCenterTurnToPage: function (e) {
    app.userCenterTurnToPage(e);
  },
  turnToGoodsDetail: function (e) {
    app.turnToGoodsDetail(e);
  },
  turnToFranchiseeDetail: function (e) {
    app.turnToFranchiseeDetail(e);
  },
  turnToSeckillDetail: function (e) {
    app.turnToSeckillDetail(e);
  },
  sortListFunc: function (e) {
    app.sortListFunc(e);
  },
  bbsInputComment: function (e) {
    app.bbsInputComment(e);
  },
  bbsInputReply: function (e) {
    app.bbsInputReply(e);
  },
  uploadBbsCommentImage: function (e) {
    app.uploadBbsCommentImage(e);
  },
  uploadBbsReplyImage: function (e) {
    app.uploadBbsReplyImage(e);
  },
  deleteCommentImage: function (e) {
    app.deleteCommentImage(e);
  },
  deleteReplyImage: function (e) {
    app.deleteReplyImage(e);
  },
  bbsPublishComment: function (e) {
    app.bbsPublishComment(e);
  },
  clickBbsReplyBtn: function (e) {
    app.clickBbsReplyBtn(e);
  },
  bbsPublishReply: function (e) {
    app.bbsPublishReply(e);
  },
  searchList: function (e) {
    app.searchList(e);
  },
  selectLocal: function (e) {
    app.selectLocal(e);
  },
  cancelCity: function (e) {
    app.cancelCity(e);
  },
  bindCityChange: function (e) {
    app.bindCityChange(e);
  },
  submitCity: function (e) {
    app.submitCity(e);
  },
  openTakeoutLocation: function (e) {
    app.openTakeoutLocation(e);
  },
  callTakeout: function (e) {
    app.callTakeout(e);
  },
  getMoreAssess: function (e) {
    app.getMoreAssess(e);
  },
  changeEvaluate: function (e) {
    app.changeEvaluate(e)
  },
  deleteAllCarts: function (e) {
    app.deleteAllCarts(e);
  },
  deleteSingleCarts:function (e) {
    app.deleteSingleCarts(e);
  },
  clickCategory: function (e) {
    app.clickCategory(e);
  },
  goodsListMinus: function (e) {
    app.goodsListMinus(e);
  },
  goodsListPlus: function (e) {
    app.goodsListPlus(e);
  },
  cartListMinus: function (e) {
    app.cartListMinus(e);
  },
  cartListPlus: function (e) {
    app.cartListPlus(e);
  },
  changeAssessType: function (e) {
    app.changeAssessType(e);
  },
  showShoppingCartPop: function (e) {
    app.showShoppingCartPop(e);
  },
  hideShoppingCart: function (e) {
    app.hideShoppingCart(e);
  },
  showGoodsDetail: function (e) {
    app.showGoodsDetail(e);
  },
  hideDetailPop: function (e) {
    app.hideDetailPop(e);
  },
  hideModelPop: function (e) {
    app.hideModelPop(e);
  },
  chooseModel: function (e) {
    app.chooseModel(e);
  },
  sureChooseModel: function (e) {
    app.sureChooseModel(e);
  },
  clickChooseComplete: function (e) {
    app.clickChooseComplete(e);
  },
  reLocalAddress: function(e){
    app.reLocalAddress(e);
  },
  tapGoodsTradeHandler: function (e) {
    app.tapGoodsTradeHandler(e);
  },
  tapVideoHandler: function(e){
    app.tapVideoHandler(e);
  },
  tapVideoPlayHandler: function(e){
    app.tapVideoPlayHandler(e);
  },
  tapInnerLinkHandler: function (e) {
    app.tapInnerLinkHandler(e);
  },
  tapToPluginHandler: function (e) {
    app.tapToPluginHandler(e);
  },
  tapPhoneCallHandler: function (e) {
    app.tapPhoneCallHandler(e);
  },
  tapNewClassifyShowSubClassify: function(e){
    app.tapNewClassifyShowSubClassify(e);
  },
  tapNewClassifyRefreshHandler: function(e){
    app.tapNewClassifyRefreshHandler(e);
  },
  tapRefreshListHandler: function (e) {
    app.tapRefreshListHandler(e);
  },
  tapGetCouponHandler: function (e) {
    app.tapGetCouponHandler(e);
  },
  tapCommunityHandler: function (e) {
    app.tapCommunityHandler(e);
  },
  tapTopicHandler: function (e) {
    app.tapTopicHandler(e);
  },
  tapNewsHandler: function (e) {
    app.tapNewsHandler(e);
  },
  tapPageShareHandler:function(e) {
    app.tapPageShareHandler(e);
  },
  turnToCommunityPage: function (e) {
    app.turnToCommunityPage(e);
  },
  tapToFranchiseeHandler: function (e) {
    app.tapToFranchiseeHandler(e);
  },
  tapToTransferPageHandler: function () {
    app.tapToTransferPageHandler();
  },
  tapToSeckillHandler: function (e) {
    app.tapToSeckillHandler(e);
  },
  tapToPromotionHandler: function () {
    app.tapToPromotionHandler();
  },
  tapToCouponReceiveListHandler: function () {
    app.tapToCouponReceiveListHandler();
  },
  tapToRechargeHandler: function () {
    app.tapToRechargeHandler();
  },
  tapToXcx: function (e) {
    app.tapToXcx(e);
  },
  tapFranchiseeLocation: function (e) {
    app.tapFranchiseeLocation(e);
  },
  showAddShoppingcart: function (e) {
    app.showAddShoppingcart(e);
  },
  hideAddShoppingcart: function () {
    app.hideAddShoppingcart();
  },
  selectGoodsSubModel: function (e) {
    app.selectGoodsSubModel(e);
  },
  resetSelectCountPrice: function () {
    app.resetSelectCountPrice();
  },
  inputBuyCount: function(e){
    app.inputBuyCount(e)
  },
  clickGoodsMinusButton: function (e) {
    app.clickGoodsMinusButton();
  },
  clickGoodsPlusButton: function (e) {
    app.clickGoodsPlusButton();
  },
  sureAddToShoppingCart: function () {
    app.sureAddToShoppingCart();
  },
  sureAddToBuyNow: function () {
    app.sureAddToBuyNow();
  },
  clickTostoreMinusButton: function (e) {
    app.clickTostoreMinusButton(e);
  },
  clickTostorePlusButton: function (e) {
    app.clickTostorePlusButton(e);
  },
  readyToPay: function () {
    app.readyToTostorePay();
  },
  getValidateTostore: function () {
    app.getValidateTostore();
  },
  goToShoppingCart: function () {
    app.goToShoppingCart();
  },
  getCartList: function () {
    app.getTostoreCartList();
  },
  stopPropagation: function () {
  },
  turnToSearchPage:function (e) {
    app.turnToSearchPage(e);
  },
  previewImage: function (e) {
    var dataset = e.currentTarget.dataset;
    app.previewImage({
      current : dataset.src,
      urls: dataset.previewImgarr,
    });
  },
  scrollPageTop: function () {
    app.pageScrollTo(0);
  },
  suspensionTurnToPage: function (e) {
    app.suspensionTurnToPage(e);
  },
  tapToLuckyWheel: function (e) {
    app.tapToLuckyWheel(e);
  },
  tapToGoldenEggs: function (e) {
    app.tapToGoldenEggs(e);
  },
  tapToScratchCard: function (e) {
    app.tapToScratchCard(e);
  },
  keywordList:{},
  bindSearchTextChange: function (e) {
    this.keywordList[e.currentTarget.dataset.compid] = e.detail.value;
  },
  // 文字组件跳到地图
  textToMap: function(e) {
    app.textToMap(e);
  },
  tapDynamicClassifyFunc: function(e){
    app.tapDynamicClassifyFunc(e);
  },
  // 跳转到视频详情
  turnToVideoDetail : function(e) {
    app.turnToVideoDetail(e);
  },
  // 单个视频组件播放视频
  startPlayVideo : function(e) {
    app.startPlayVideo(e);
  },
  // 视频播放报错
  videoError: function(e) {
    app.showModal({
      content: e.detail.errMsg
    });
  },
  // 视频项目播放事件
  videoProjectPlay: function(e){
    app.videoProjectPlay(e);
  },
  // 视频项目暂停事件
  videoProjectPause: function(e) {
    app.videoProjectPause(e);
  },
  // 跳转到资讯详情
  turnToNewsDetail: function (e) {
    app.turnToNewsDetail(e)
  },
  //切换资讯分类
  getNewsCateList: function (e) {
    app.getNewsCateList(e);
  },
  // 跳转多商家入驻
  franchiseeEnterHandler: function () {
    app.franchiseeEnterHandler();
  },
  // 跳转多商家代理推广合作联系
  franchiseeCooperationHandler: function () {
    app.franchiseeCooperationHandler();
  },
  //bbs评论
  showBbsReplyDialog: function(e){
    app.showBbsReplyDialog(e);
  },
  hideBbsReplyDialog: function(e){
    app.hideBbsReplyDialog(e);
  },
  popupWindowControlHandler: function(e){
    app.popupWindowControlHandler(e);
  },
  tapMaskClosePopupWindow: function(e){
    app.tapMaskClosePopupWindow(e);
  },
  //话题组件
  topicEleScrollFunc: function (e) {
    app.topicEleScrollFunc(e);
  },
  switchTopiclistOrderBy: function (e) {
    app.switchTopiclistOrderBy(e);
  },
  switchTopicCategory: function (e) {
    app.switchTopicCategory(e);
  },
  topicSearchInputAct: function (e) {
    app.topicSearchInputAct(e);
  },
  searchForTopicAct: function (e) {
    app.searchForTopicAct(e);
  },
  turnToTopicUserCenter: function (e) {
    app.turnToTopicUserCenter(e);
  },
  turnToTopicNotify: function (e) {
    app.turnToTopicNotify(e);
  },
  turnToTopicDetail: function (e) {
    app.turnToTopicDetail(e);
  },
  pageBackTopAct: function (e) {
    app.pageBackTopAct(e);
  },
  turnToTopicPublish: function (e) {
    app.turnToTopicPublish(e);
  },
  showTopicCommentBox: function (e) {
    app.showTopicCommentBox(e);
  },
  showTopicPhoneModal: function (e) {
    app.showTopicPhoneModal(e);
  },
  topicMakePhoneCall: function (e) {
    app.topicMakePhoneCall(e);
  },
  showTopicReplyComment: function (e) {
    app.showTopicReplyComment(e);
  },
  topicCommentReplyInput: function (e) {
    app.topicCommentReplyInput(e);
  },
  topicReplycommentSubmit: function (e) {
    app.topicReplycommentSubmit(e);
  },
  topicPerformLikeAct: function (e) {
    app.topicPerformLikeAct(e);
  },
  topicImgLoad: function (e) {
    app.topicImgLoad(e);
  },
  topicCommentReplyfocus:function (e) {
    app.topicCommentReplyfocus(e);
  },
  topicCommentReplyblur:function (e) {
    app.topicCommentReplyblur(e);
  },

  // 筛选组件 综合排序tab = 0
  sortByDefault: function (e) {
    app.sortByDefault(e);
  },
  // 筛选组件 按销量排序 tab = 1
  sortBySales: function (e) {
    app.sortBySales(e);
  },
  // 筛选组件 按价格排序 tab = 2
  sortByPrice: function (e) {
    app.sortByPrice(e);
  },
  // 筛选组件 展示侧边筛选
  filterList: function(e){
    app.filterList(e);
  },
  // 筛选侧栏确定
  filterConfirm: function(e){
    app.filterConfirm(e);
  },
  //侧边栏
  sidebarControlHandler: function (e) {
    app.sidebarControlHandler(e);
  },
  tapMaskCloseSidebar: function (e) {
    app.tapMaskCloseSidebar(e);
  },
  hideCompeletSidebar: function (e) {
    app.hideCompeletSidebar(e);
  },
  // 动画结束回调函数
  animationEnd: function(e){
    app.animationEnd(e);
  },
  //排号
  showTakeNumberWindow: function(e){
    app.showTakeNumberWindow(e);
  },
  hideTakeNumberWindow: function(e){
    app.hideTakeNumberWindow(e);
  },
  goToPreviewRowNumberOrder: function(e){
    app.goToPreviewRowNumberOrder(e);
  },
  selectRowNumberType: function(e){
    app.selectRowNumberType(e);
  },
  sureTakeNumber: function(e){
    app.sureTakeNumber(e);
  },
  goToCheckRowNunberDetail: function(e){
    app.goToCheckRowNunberDetail(e);
  },
  cancelCheckRowNunber: function(e){
    app.cancelCheckRowNunber(e);
  },
  rowNumberRefresh: function(e){
    app.rowNumberRefresh(e);
  },
  showCancelWindow: function (e) {
    app.showCancelWindow(e)
  },
  hideCancelWindow: function (e) {
    app.hideCancelWindow(e)
  },
  tapPluginLinkHandler: function(e){
    app.tapPluginLinkHandler(e);
  },
  tapGetWxCouponHandler: function (e){
    app.tapGetWxCouponHandler(e);
  },
  tapVipListHandler: function(){
    app.tapVipListHandler();
  },
  };
Page(pageData);
