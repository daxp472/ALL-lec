const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  },
  duration: {
    type: Number,
    required: true,
    min: 1
  },
  languages: [{
    type: String,
    required: true
  }],
  genres: [{
    type: String,
    required: true,
    enum: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller', 'Western']
  }],
  trailerUrl: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})$/.test(v);
      },
      message: 'Invalid YouTube URL format'
    }
  },
  thumbnail: {
    public_id: String,
    url: String
  },
  videoFile: {
    public_id: String,
    url: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema);