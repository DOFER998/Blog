const ApiError = require('../error/ApiError')

class CommentController {
    comment(req, res, next) {
        /*const {msg} = req.body;
        if (!msg) {
            next(ApiError.badRequest('msg field is required and must be non black'));
            return;
        }*/
        res.send({data: 'Here is your data comment'});
    }
}


module.exports = new CommentController();