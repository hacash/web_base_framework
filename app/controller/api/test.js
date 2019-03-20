/**
 * 
 */

const api = appload('tool/apiRespond')

module.exports = function(req, res)
{

    api.success(res, {status: 'ok'})
    
}
