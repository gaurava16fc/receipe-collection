

/*
    GET /
    GET /homepage
*/


exports.homepage = async(req, res) => {
    res.render('index', { bod: "some test text"});
};