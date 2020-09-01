const app = getApp();
Page({
  data: {
    song: '',
  },
  onLoad: function() {
    app.player.playSong({ hash: '82F3643F68E89050B9B5FF48141195D5', album_audio_id: '258660928'})
    app.player.addEventSeachResultCallBack(this.searchResultCallback, this);
    app.player.addEventPlaySongResultCallBack(this.playSongResultCallback, this);
  },
  searchResultCallback(res) {
    console.log('搜索并选择的结果：', res)
    
  },
  playSongResultCallback(res) {
    console.log('加载歌曲信息res:', res)
    if(res.data) {
      this.setData({
        song: res.data
      })
    }
  },
  copyText() {
    var jsonstr = JSON.stringify({hash: this.data.song.hash, album_audio_id: this.data.song.albumAudioId})
    wx.setClipboardData({
      data: 'player.playSong(' + jsonstr + ')',
      success () {
      }
    })
  }
})