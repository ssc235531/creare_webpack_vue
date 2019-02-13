// 配合dev-server.js 监听html文件改动能够触发自动刷新

// 引入webpack-hot-middleware/client

var hotClient = require('webpack-hot-middleware/client');

// 订阅事件，当event.action === 'reload' 时候执行页面刷新

hotClient.subscribe(function(event){
    if(event.action === 'reload'){
        window.location.reload();
    }
})
