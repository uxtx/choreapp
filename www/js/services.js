angular.module('choreApp.services', [])

.factory('Users', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var users = [{
    id: 0,
    name: 'Dave Birch',
    profile: 'King of the castle. Lord of the domain',
    face: 'http://davebir.ch/assets/images/dave.png'
  }, {
    id: 1,
    name: 'Lori Birch',
    profile: 'Our dazzling queen. Poets and muses sing unending songs',
    face: 'https://img0.etsystatic.com/000/0/7065083/iusa_75x75.5921966.jpg'
  },{
    id: 2,
    name: 'Ana Birch',
    profile: 'Pianist, pokemonist, drawer of dragons',
    face: 'https://pbs.twimg.com/profile_images/478947556760645632/IwdfeL3J.png'
  }, {
    id: 3,
    name: 'Joel Birch',
    profile: 'Builder of things with bricks, both physical and virtual',
    face: 'http://thedeadpixelsociety.net/wp-content/uploads/2014/10/Emmet_large.png'
  }];

  return {
    all: function() {
      return users;
    },
    remove: function(user) {
      users.splice(users.indexOf(user), 1);
    },
    get: function(userId) {
      for (var i = 0; i < users.length; i++) {
        if (users[i].id === parseInt(userId)) {
          return users[i];
        }
      }
      return null;
    }
  };
});
