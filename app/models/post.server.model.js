var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PostSchema = new Schema({
  // Post 내용
  content: {
    type: String,
    required: '내용을 입력해주세요'
  },
  // 작성자
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  created: {
    type: Date,
    default: Date.now
  }
});
PostSchema.set('toJSON', {
  getters: true,
  virtuals: true
});
mongoose.model('Post', PostSchema);