

function MediaPlayer(config) {
    this.media = config.el;
}
  
MediaPlayer.prototype.play = function() {
    this.media.play();  
};
 
MediaPlayer.prototype.play = function() {
    this.media.paused();  
};
    
MediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused) {
      this.play();
    } else {
        this.pause();
    }
};
   
  export default MediaPlayer;