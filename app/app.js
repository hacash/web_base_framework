/**
 *
 */

const routes = require('./routes.js');
const viewer = require('./viewer.js');


module.exports = function(app)
{
    // routes
    for(let i in routes){
        var isPost = false
        if(i.startsWith('POST')){
            isPost = true
        }
        const ctrl = require('./controller/'+routes[i]+'.js')
        if (isPost){
            i = i.substr(4)
            app.post(i, ctrl)
        }else{
            app.get(i, ctrl)
        }
    }

    // views compile
    viewer.compile({})



}

////////////////////// loader //////////////////////


global.appload = function(path) {
    if(path=="config"){
        return require("../config.js")
    }
    // others
    if( !path.startsWith('../') && !path.startsWith('./') ){
        path = './' + path
    }
    if( ! path.endsWith('.js') ){
        path += '.js'
    }
    return require(path)
}


