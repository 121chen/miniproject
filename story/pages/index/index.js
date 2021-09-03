// index.js
// 获取应用实例
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
    const db=wx.cloud.database()
  //2.选择操作的集合
  const sp=db.collection('swiper2')
  //3.查询数据
  sp.get().then(res=>{
    //更新轮播图数据
    this.setData({
      swiper2:res.data
    })
  })
  .catch(err=>{
    console.log(err)
  })

  const ms=db.collection('storylist')
  ms
  .where({//查询条件
    status:true
  })
  .limit(9).orderBy('sour','asc').get().then(res=>{
    console.log(res)
    this.setData({
      storylist:res.data
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