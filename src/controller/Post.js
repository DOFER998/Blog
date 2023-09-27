const ApiError = require('../error/ApiError')

class PostController {
    post(req, res, next) {
        /*const {msg} = req.body;
        if (!msg) {
            next(ApiError.badRequest('msg field is required and must be non black'));
            return;
        }*/
        res.send({data: 'Here is your data post'});
    }
}


module.exports = new PostController();