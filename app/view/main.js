/**
 * 
 */




exports.components = [
    'header',

    'main',

    'footer',
]



exports.datas = function(query, callback, req, res)
{
    callback(null, {
        pagetitle: "Main",
    }, req, res)
}



