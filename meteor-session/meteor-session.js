if (Meteor.isClient) {
    if (typeof( Session.get('counter')) == 'undefined') {
        Session.setDefault('counter', localStorage.getItem('counter'));
    }

    Template.counter_template.helpers({
        counter: function () {
            return Session.get('counter');
        }
    });

    Template.counter_template.events({
        'click button': function () {
            var counter = Session.get('counter')
            counter++;

            localStorage.setItem('counter', counter)
            Session.set('counter', counter);
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
