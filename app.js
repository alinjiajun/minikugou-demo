//app.js
var kugouPlayer = requirePlugin("kugouPlayer")
kugouPlayer.player.initPlayer({ showLoading: true });
App({
  onLaunch: function () {
  },
  player: kugouPlayer.player, //全局播放器对象
})