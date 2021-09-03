// pages/storys/storys.js
const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    const id=options.id 
    const storys=db.collection('rowlist')
   storys
    .doc(id)
    .get()
    .then(res=>{
      wx.setNavigationBarTitle({//设置标题
        title: res.data.title,
      })
    })
    .catch(err=>{
     console.log(err)
    })

    const file=db.collection('filelist')
    file
    .where({
      rowlistid:id
    })
      .get()
      .then(res=>{
        console.log(res)
        this.setData({
          filelist:res.data
        })
      })
     .catch(err=>{
       console.log(err)
     })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onPullDownRefresh:function(){
    wx.showNavigationBarLoading() //在标题栏中显示加载
    setTimeout(function()
    {
    wx.hideNavigationBarLoading() //完成停止加载
    wx.stopPullDownRefresh() //停止下拉刷新
    },1500);
    },
})