var base_url = "mongodb://localhost:27017/";

module.exports = {
  port: 3000,
  tokenPort: 1337,
  tokenLife: 3600,
  mongodb_uri: base_url+"chatapp",
  mongodb_local_uri: base_url+"local",
  mongoose_models_dir: "./mongoose-models/custom/",
  collection_watch_list: ["chatapp.messages"]
}
