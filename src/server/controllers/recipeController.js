

/*
    GET /
    GET /homepage
*/


exports.homepage = async(req, res) => {
    res.render('index', { title: 'Cooking Recipes - Home'} );
};