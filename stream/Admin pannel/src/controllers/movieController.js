const Movie = require('../models/Movie');
const cloudinary = require('../config/cloudinary');
const { validationResult } = require('express-validator');

// New function to create movie
exports.createMovie = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Upload thumbnail to Cloudinary
    let thumbnailData = null;
    if (req.files.thumbnail) {
      const thumbnailResult = await cloudinary.uploadToCloudinary(req.files.thumbnail[0].path, {
        folder: 'movie-thumbnails'
      });
      thumbnailData = {
        public_id: thumbnailResult.public_id,
        url: thumbnailResult.secure_url
      };
    }

    // Upload video to Cloudinary
    const videoResult = await cloudinary.uploadToCloudinary(req.files.video[0].path, {
      folder: 'movies',
      resource_type: 'video'
    });

    // Create new movie in MongoDB
    const movie = new Movie({
      title: req.body.title,
      description: req.body.description,
      releaseDate: req.body.releaseDate,
      duration: req.body.duration,
      languages: JSON.parse(req.body.languages),
      genres: JSON.parse(req.body.genres),
      trailerUrl: req.body.trailerUrl,
      thumbnail: thumbnailData,
      videoFile: {
        public_id: videoResult.public_id,
        url: videoResult.secure_url
      }
    });

    await movie.save();

    res.status(201).json({
      message: 'Movie created successfully',
      movie
    });
  } catch (error) {
    console.error('Create movie error:', error);
    res.status(500).json({ message: 'Error creating movie' });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const movieId = req.params.id;
    const movie = await Movie.findById(movieId);

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    // Handle thumbnail upload if provided
    if (req.file) {
      // Delete old thumbnail if exists
      if (movie.thumbnail?.public_id) {
        await cloudinary.deleteFromCloudinary(movie.thumbnail.public_id);
      }

      // Upload new thumbnail
      const result = await cloudinary.uploadToCloudinary(req.file.path, {
        folder: 'movie-thumbnails'
      });

      movie.thumbnail = {
        public_id: result.public_id,
        url: result.secure_url
      };
    }

    // Update other fields if provided
    const updateFields = ['title', 'description', 'releaseDate', 'duration', 'languages', 'genres', 'trailerUrl'];
    updateFields.forEach(field => {
      if (req.body[field] !== undefined) {
        movie[field] = field === 'languages' || field === 'genres' ? 
          JSON.parse(req.body[field]) : 
          req.body[field];
      }
    });

    await movie.save();

    res.json({ 
      message: 'Movie updated successfully',
      movie 
    });
  } catch (error) {
    console.error('Update movie error:', error);
    res.status(500).json({ message: 'Error updating movie' });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    // Delete thumbnail from Cloudinary
    if (movie.thumbnail?.public_id) {
      await cloudinary.deleteFromCloudinary(movie.thumbnail.public_id);
    }

    // Delete video file from Cloudinary
    if (movie.videoFile?.public_id) {
      await cloudinary.deleteFromCloudinary(movie.videoFile.public_id, { resource_type: 'video' });
    }

    // Delete movie from database
    await movie.deleteOne();

    res.json({ message: 'Movie deleted successfully' });
  } catch (error) {
    console.error('Delete movie error:', error);
    res.status(500).json({ message: 'Error deleting movie' });
  }
};