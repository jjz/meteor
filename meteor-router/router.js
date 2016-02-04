Router.route('/', function () {
    this.render('home');
});
Router.route('/content');
Router.route('/content/:_id', function () {
    var req = this.request;
    var res = this.response;
    res.end('this is string');
}, {where: 'server'});