var models = require('./model');

exports.RecupererLivres = function (req, res) {
    console.log('RecupererLivres');
    models.Livre.find(function (err, livres) {
        if (err) {
            return console.error(err);
        }
        res.json(livres);
    });
};

exports.RecupererLivreParId = function (req, res) {
    console.log('RecupererLivreParId');
    var options = {Id: req.params.Id};
    models.Livre.findOne(options, function (err, livre) {
        if (err) {
            return console.error(err);
        }
        res.json(livre);
    });
};

exports.RecupererLivresParCategorie = function (req, res) {
    console.log('RecupererLivresParCategorie');
    var options = {Categorie: req.params.categorie};
    models.Livre.find(options, function (err, livres) {
        if (err) {
            return console.error(err);
        }
        res.json(livres);
    });
};

exports.RecupererCategories = function (req, res) {
    console.log('RecupererCategories');
    models.Categorie.find(function (err, categories) {
        if (err) {
            return console.error(err);
        }
        res.json(categories);
    });
};

exports.CreerCategorie = function (req, res) {
    console.log('CreerCategorie', req.body);
    models.Categorie(req.body).save();
    res.json(req.body);
};

exports.CreerLivre = function (req, res) {
    console.log('CreerLivre');
    models.Livre(req.body).save(
        /*function(err){
            if(err){
                res.send(err);
            }
            res.send({message:'livre created'});
            //res.json(req.body);
        }*/
    );
    res.json(req.body);
};

/********************************/
/********** Compte **************/
/********************************/

exports.CreerCompte = function (req, res) {
    console.log('Creer Compte', req.body);
    models.Compte(req.body).save();
    res.json(req.body);
};

exports.Login = function (req, res) {
    console.log('Login', req.body);
    var options = {Email: req.body.Email, Password: req.body.Password};
    models.Compte.findOne(options, function (err, compte) {
        if (err) {
            return console.error(err);
        }
        console.error('compte', compte);
        res.json(compte);
    });
};