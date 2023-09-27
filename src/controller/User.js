const ApiError = require('../error/ApiError')

class UserController {
    user(req, res, next) {
        /*const {msg} = req.body;
        if (!msg) {
            next(ApiError.badRequest('msg field is required and must be non black'));
            return;
        }*/
        res.send({data: 'Here is your data user'});
    }
}


module.exports = new UserController();
