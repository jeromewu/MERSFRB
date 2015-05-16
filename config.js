var base_url = "mongodb://localhost:27017/";

module.exports = {
  port: 3000,
  mongodb_uri: base_url+"chatapp",
  mongodb_local_uri: base_url+"local",
  mongoose_models_dir: "./mongoose-models",
  collection_watch_list: ["chatapp.messages"]
}
