# Include stack trace in assertion error messages
# http://chaijs.com/guide/styles/#configure-section
if Meteor.isServer
  chai.config.includeStack = Meteor.settings.chai?.includeStack || true
else
  chai.config.includeStack = Meteor.settings.public?.chai?.includeStack || true
