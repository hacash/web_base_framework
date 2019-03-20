const config = {
    http_port: 8000,
    watch_restart_timeout: 7,
    lang: 'zh', // 默认语言
}




//////////////////////////////////




try{
    let dev = require('./config.use.js')
    for(let i in dev){
        config[i] = dev[i]
    }
}catch(e){}


module.exports = config
