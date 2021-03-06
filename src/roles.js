const AccessControl = require('accesscontrol');
const ac = new AccessControl();

exports.roles = (() => {
   ac.grant('User').readOwn('profile');
   ac.grant('Admin')
      .extend('User')
      .updateAny('Admin')
      .deleteAny('Admin')
      .readAny('Admin');
   return ac;
})();
