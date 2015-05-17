var crypto = require('crypto');

module.exports = function(mongoose){
  var userSchema = new mongoose.Schema({
    username: {
      type: String,
      unique: true,
      required: true
    },
    hashedPassword: {
      type: String,
      required: true
    },
    salt: {
      type: String,
      required: true
    },
    created: {
      type: Date,
      default: Date.now
    }
  });
  userSchema.virtual('userId')
    .get(function(){
      return this.id;
  });

  userSchema.virtual('password')
    .set(function(password){
      this._plainPassword = password;
      this.salt = crypto.randomBytes(32).toString('base64');
      this.hashedPassword = this.encryptPassword(password);
  })
    .get(function(){
      return this._plainPassword;
  });
  userSchema.methods.encryptPassword = function(password){
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
  };
  userSchema.methods.checkPasswod = function(password){
    return this.encryptPassword(password) == this.hashedPassword;
  };

  var clientSchema = new mongoose.Schema({
    name: {
      type: String,
      unique: true,
      required: true
    },
    clientId: {
      type: String,
      unique: true,
      required: true
    },
    clientSecret: {
      type: String,
      required: true
    }
  });

  var accessTokenSchema = new mongoose.Schema({
    userId: {
      type: String,
      required: true
    },
    clientId: {
      type: String,
      required: true
    },
    token: {
      type: String,
      unique: true,
      required: true
    },
    created: {
      type: Date,
      default: Date.now
    }
  });

  var refreshTokenSchema = new mongoose.Schema({
    userId: {
      type: String,
      required: true
    },
    clientId: {
      type: String,
      required: true
    },
    token: {
      type: String,
      unique: true,
      required: true
    },
    created: {
      type: Date,
      default: Date.now
    }
  });

  return {
    userModel: mongoose.model('user', userSchema),
    clientModel: mongoose.model('client', clientSchema),
    accessTokenModel: mongoose.model('accessToken', accessTokenSchema),
    refreshTokenModel: mongoose.model('refreshToken', refreshTokenSchema)
  };
}
