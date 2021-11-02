exports.handleCustomErrors = (err, req, res, next) => {
    if(err.status) {
        res.status(err.status).send({msg: err.msg});
    } else {
        next(err);
    }
}

exports.handlePsqlErrors = (err, req, res, next) => {
    if(err.code === '22P02') {
        res.status(400).send({msg:'Bad request'})
    }
}

exports.handle500 = (err, req, res, next) => {
    console.log(err);
    res.status(500).send({msg: 'Server error'})
}
