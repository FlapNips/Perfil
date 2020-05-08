<template>
    <div id="layout-login">
        <JoinBar> </JoinBar>
        <div id="context-row">
        <CardsJoin></CardsJoin>
        <TextRight></TextRight>
        </div>
        <iframe src="" frameborder="0"></iframe>
        <div class="ripple-background">
            <div class="circle xxlarge shade1"></div>
            <div class="circle xlarge shade2"></div>
            <div class="circle large shade3"></div>
            <div class="circle mediun shade4"></div>
            <div class="circle small shade5"></div>
        </div>
    </div>
</template>
<script>
import JoinBar from './Sign-In/JoinBar.vue'
import CardsJoin from './Sign-In/CardsJoin.vue'
import TextRight from './Sign-In/TextRight.vue'

export default {
    components: {
        JoinBar,
        CardsJoin,
        TextRight
    },
    data() {
        return {

        }
    }
}
</script>
<style scooped>
#layout-login {
    display       : flex;
    flex-direction: column;
    width         : 100vw;
    height        : 100vh;
    position      : relative;
    margin        : 0;
    background    : #ffffff;
}
#context-row {
    display: flex;
    flex-direction: row;
    text-align: center;
}
.circle{
  position     : absolute;
  border-radius: 50%;
  background   : rgb(89, 117, 170);
  animation    : ripple 15s infinite;
  box-shadow   : 0px 0px 1px 0px #508fb9;
  bottom       : 0;
  top          : 0;
  margin-top   : auto;
  margin-bottom: auto;
  width: max-content;
  height: max-content;
}

.small{
  width        : 250px;
  height       : 250px;
  left         : -125px;
  bottom       : 0;
  top          : 0;
  margin-top   : auto;
  margin-bottom: auto;
}

.medium{
  width        : 300px;
  height       : 300px;
  left         : -150px;
  bottom       : 0;
  top          : 0;
  margin-top   : auto;
  margin-bottom: auto;
}

.large{
  width        : 400px;
  height       : 400px;
  left         : -200px;
  bottom       : 0;
  top          : 0;
  margin-top   : auto;
  margin-bottom: auto;
}

.xlarge{
  width        : 500px;
  height       : 500pxpx;
  left         : -250px;
  bottom       : 0;
  top          : 0;
  margin-top   : auto;
  margin-bottom: auto;
}

.xxlarge{
  width        : 600px;
  height       : 600px;
  left         : -300px;
  bottom       : 0;
  top          : 0;
  margin-top   : auto;
  margin-bottom: auto;
}

.shade1{
  opacity: 0.2;
}
.shade2{
  opacity: 0.5;
}

.shade3{
  opacity: 0.7;
}

.shade4{
  opacity: 0.8;
}

.shade5{
  opacity: 0.9;
}

@keyframes ripple{
  0%{
    transform: scale(0.8);
  }
  
  50%{
    transform: scale(1.2);
  }
  
  100%{
    transform: scale(0.8);
  }
}

</style>