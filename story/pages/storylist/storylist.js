// pages/storylist/storylist.js
const db=wx.cloud.database()
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  storyselect(e){
      console.log(e)
      const zid=e.currentTarget.dataset.id 
      const index=e.currentTarget.dataset.index
      //更新id实现高亮效果
      this.setData({
        playingid:zid
      })
   
  }, 
  
  
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    const id=options.id 
    const storylist=db.collection('storylist')
    storylist
    .doc(id)
    .get()
    .then(res=>{
      this.setData({
        playInfo:res.data
      })
      wx.setNavigationBarTitle({//设置标题
        title: res.data.text,
      })
    })
    .catch(err=>{
     console.log(err)
    })

    
    const storycollection=db.collection('rowlist')
  storycollection
  .where({
    storylistid:id
  })
    .get()
    .then(res=>{
      console.log(res)
      this.setData({
        rowlist:res.data
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