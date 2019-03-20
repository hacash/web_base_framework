/**
 * 
 */
const viewer = appload('viewer')



module.exports = function(req, res)
{
    viewer.render('main', {}, res)
}
