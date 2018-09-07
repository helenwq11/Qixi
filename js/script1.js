
    //第一幅画
    // 飘云
        $(".cloud:first").addClass('cloud1Anim');
        $(".cloud:last").addClass('cloud2Anim');

    //第二幅画
    //开关门
   function doorAction(left, right, time) {
    var $door = $('.door'),
        doorLeft = $('.door-left'),
        doorRight = $('.door-right'),
        defer = $.Deferred(),
        count = 2;
    // 等待开门完成
    var complete = function() {
        if (count == 1) {
            defer.resolve();
            return;
        }
        count--;
    };
    doorLeft.transition({
        'left': left
    }, time, complete);

    doorRight.transition({
        'left': right
    }, time, complete);

    return defer;
  }
     // 开门
    function openDoor() {
       return doorAction('-50%', '100%', 2000);
   }
     // 关门
   function shutDoor() {
    return doorAction('0%', '50%', 2000);
  }
    // 灯动画
   var lamp = {
     elem: $('.b_background'),
     bright: function() {
        this.elem.addClass('lamp-bright');
      },
     dark: function() {
        this.elem.removeClass('lamp-bright');
      }
   };
   //飞鸟 //
   var bird = {
    elem: $(".bird"),
    fly: function() {
        this.elem.addClass('birdFly');
        this.elem.transition({
            right: $('#content').width()
        }, 15000, 'linear');
      }
    };

    //第三幅画
     //飘花 //
   var snowflakeURl = [
    'http://img.mukewang.com/55adde120001d34e00410041.png',
    'http://img.mukewang.com/55adde2a0001a91d00410041.png',
    'http://img.mukewang.com/55adde5500013b2500400041.png',
    'http://img.mukewang.com/55adde62000161c100410041.png',
    'http://img.mukewang.com/55adde7f0001433000410041.png',
    'http://img.mukewang.com/55addee7000117b500400041.png'
     ];

   function snowflake() {
    // 雪花容器
    var $flakeContainer = $('#snowflake');
    // 随机六张图
    function getImagesName() {
        return snowflakeURl[[Math.floor(Math.random() * 6)]];
    }
    // 创建一个雪花元素
    function createSnowBox() {
        var url = getImagesName();
        return $('<div class="snowbox" />').css({
            'width': 41,
            'height': 41,
            'position': 'absolute',
            'backgroundSize': 'cover',
            'zIndex': 100000,
            'top': '-41px',
            'backgroundImage': 'url(' + url + ')'
        }).addClass('snowRoll');
    }
    // 开始飘花
    setInterval(function() {
        // 运动的轨迹
        var startPositionLeft = Math.random() * visualWidth - 100,
            startOpacity    = 1,
            endPositionTop  = visualHeight - 40,
            endPositionLeft = startPositionLeft - 100 + Math.random() * 500,
            duration        = visualHeight * 10 + Math.random() * 5000;


        // 随机透明度，不小于0.5
        var randomStart = Math.random();
        randomStart = randomStart < 0.5 ? startOpacity : randomStart;

        // 创建一个雪花
        var $flake = createSnowBox();

        // 设计起点位置
        $flake.css({
            left: startPositionLeft,
            opacity : randomStart
        });

        // 加入到容器
        $flakeContainer.append($flake);

        // 开始执行动画
        $flake.transition({
            top: endPositionTop,
            left: endPositionLeft,
            opacity: 0.7
        }, duration, 'ease-out', function() {
            $(this).remove();//结束后删除
        });

    }, 200);
}

  // 音乐配置
   var audioConfig = {
    enable: true, // 是否开启音乐
    playURl: 'C:\Users\Lenovo\Desktop\拖拽\music\happy.wav', // 正常播放地址
    cycleURL: 'C:\Users\Lenovo\Desktop\拖拽\music\circulation.wav' // 正常循环播放地址
};
 /////////
//背景音乐 //
/////////
   function Hmlt5Audio(url, isloop) {
    var audio = new Audio(url);
    audio.autoPlay = true;
    audio.loop = isloop || false;
    audio.play();
    return {
        end: function(callback) {
            audio.addEventListener('ended', function() {
                callback();
            }, false);
        }
    };
}

   function music(){
     var audio1 = Hmlt5Audio(audioConfig.playURl);
       audio1.end(function() {
       Hmlt5Audio(audioConfig.cycleURL, true);
     });
 }
   music();
