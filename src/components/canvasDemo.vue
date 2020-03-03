<template>
    <canvas id="circle" width="140px" height="140px" style="border:1px solid red;"></canvas>
</template>

<script scoped>
  export default {
    data() {
      return {
        num: 0,
        progress: 60,
        baseColor: 'red',
        barColor: 'blue',
        count: 0,
        ctx: ''
      }
    },
    mounted() {
        var circle = document.getElementById('circle');
        this.ctx = circle.getContext('2d');
        this.draw()
    },
    methods: {
      init(obj) {
        console.log(obj, 'fds')
        this.progress = obj.progress
        this.baseColor = obj.baseColor
        this.barColor = obj.barColor
        this.draw()
      },
      draw() {
        console.log('--canvas-obj:',this.ctx)
        this.ctx.clearRect(0, 0, 140, 140);
        this.ctx.beginPath();
        this.ctx.arc(70, 70, 60, Math.PI * 3 / 4, Math.PI * 9 / 4, false);
        this.ctx.strokeStyle = this.baseColor;
        this.ctx.lineWidth = 20;
        this.ctx.stroke();
        // ctx.font = '26px'
        // ctx.fillText('168', 60, 60);
        // ctx.font = '14px'
        // ctx.fillText('已施工(天)', 50, 80);
        this.move(this.ctx);
        setTimeout(()=>{
            
            this.count++;
          if(this.count<2){
              console.log('--重置画布---')
              this.ctx.clearRect(0, 0, 140, 140);
              this.drawAgain()
          }
        },3000)
      },
      move(ctx) {
        let p = this.progress / 100
        let deg = Math.PI * 3 / 2
        let view = deg * p
        let speed = view / 20
        this.num = 0; // 添加这一句
        let times = setInterval(() => {
          this.num++
          ctx.beginPath();
          ctx.arc(70, 70, 60, Math.PI * 3 / 4, (Math.PI * 3 / 4) + speed, false);
          ctx.strokeStyle = this.barColor;
          ctx.lineWidth = 20;
          ctx.stroke();
          speed += view / 20
          if (this.num > 19) {
            clearInterval(times)
          }
        }, 20);
      },
      drawAgain(){
        setTimeout(()=>{
            console.log('--开始重绘---')
            this.draw();
        },3000)
      }
    }
  }

</script>
<!--
<style lang="scss" scoped>
  #circle {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
</style>
-->
<style  scoped>
  #circle {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
  }
</style>