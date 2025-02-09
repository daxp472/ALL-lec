# Movie Management API Documentation

## Overview
This API provides endpoints for managing movies in an admin-only system. All movie metadata is stored in MongoDB while media files (thumbnails and videos) are distributed across multiple Cloudinary accounts for optimal resource management.

## Base URL
```
http://localhost:3000
```

## Authentication
All endpoints require admin authentication using JWT token.

**Header Format:**
```
Authorization: Bearer <your_jwt_token>
```

## API Endpoints

### 1. Create Movie
Upload a new movie with metadata and media files.

**Endpoint:** `POST /movies`  
**Authentication:** Required (Admin only)  
**Content-Type:** `multipart/form-data`

**Request Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| title | string | Yes | Movie title |
| description | string | Yes | Movie description/plot |
| releaseDate | string | Yes | Release date (YYYY-MM-DD format) |
| duration | number | Yes | Movie duration in minutes |
| languages | array | Yes | Array of available languages |
| genres | array | Yes | Array of genres (from predefined list) |
| trailerUrl | string | Yes | YouTube trailer URL |
| thumbnail | file | Yes | Movie poster/thumbnail image |
| video | file | Yes | Movie video file |

**Valid Genres:**
- Action
- Adventure
- Comedy
- Drama
- Fantasy
- Horror
- Mystery
- Romance
- Sci-Fi
- Thriller
- Western

**Example Request:**
```javascript
const formData = new FormData();
formData.append('title', 'Inception');
formData.append('description', 'A mind-bending thriller...');
formData.append('releaseDate', '2010-07-16');
formData.append('duration', 148);
formData.append('languages', JSON.stringify(['English', 'Hindi']));
formData.append('genres', JSON.stringify(['Sci-Fi', 'Action', 'Thriller']));
formData.append('trailerUrl', 'https://www.youtube.com/watch?v=YoHD9XEInc0');
formData.append('thumbnail', thumbnailFile); // File object
formData.append('video', videoFile); // File object

const response = await fetch('http://localhost:3000/movies', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your_jwt_token'
  },
  body: formData
});
```

**Success Response (201 Created):**
```json
{
  "message": "Movie created successfully",
  "movie": {
    "_id": "123",
    "title": "Inception",
    "description": "A mind-bending thriller...",
    "releaseDate": "2010-07-16T00:00:00.000Z",
    "duration": 148,
    "languages": ["English", "Hindi"],
    "genres": ["Sci-Fi", "Action", "Thriller"],
    "trailerUrl": "https://www.youtube.com/watch?v=YoHD9XEInc0",
    "thumbnail": {
      "public_id": "account_1/movie-thumbnails/abc123",
      "url": "https://res.cloudinary.com/..."
    },
    "videoFile": {
      "public_id": "account_2/movies/xyz789",
      "url": "https://res.cloudinary.com/..."
    },
    "createdAt": "2023-12-20T10:00:00.000Z",
    "updatedAt": "2023-12-20T10:00:00.000Z"
  }
}
```

### 2. Update Movie
Update movie details including metadata and thumbnail.

**Endpoint:** `PUT /movies/:id`  
**Authentication:** Required (Admin only)  
**Content-Type:** `multipart/form-data`

**Request Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | Movie ID (in URL) |
| title | string | No | Movie title |
| description | string | No | Movie description/plot |
| releaseDate | string | No | Release date (YYYY-MM-DD format) |
| duration | number | No | Movie duration in minutes |
| languages | array | No | Array of available languages |
| genres | array | No | Array of genres (from predefined list) |
| trailerUrl | string | No | YouTube trailer URL |
| thumbnail | file | No | Movie poster/thumbnail image |

### 3. Delete Movie
Delete a movie and its associated media files.

**Endpoint:** `DELETE /movies/:id`  
**Authentication:** Required (Admin only)

**Request Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | Movie ID (in URL) |

## Error Responses

### Validation Error (400 Bad Request)
```json
{
  "errors": [
    {
      "msg": "Invalid value",
      "param": "duration",
      "location": "body"
    }
  ]
}
```

### Authentication Error (401 Unauthorized)
```json
{
  "message": "Authentication required"
}
```

### Authorization Error (403 Forbidden)
```json
{
  "message": "Admin access required"
}
```

### Not Found Error (404 Not Found)
```json
{
  "message": "Movie not found"
}
```

### Server Error (500 Internal Server Error)
```json
{
  "message": "Error updating movie"
}
```

## Data Model

### Movie Schema
```javascript
{
  title: String,          // Movie title
  description: String,    // Movie description/plot
  releaseDate: Date,      // Release date
  duration: Number,       // Duration in minutes
  languages: [String],    // Available languages
  genres: [String],       // Movie genres
  trailerUrl: String,     // YouTube trailer URL
  thumbnail: {           // Movie poster/thumbnail
    public_id: String,   // Cloudinary public ID
    url: String         // Cloudinary URL
  },
  videoFile: {          // Movie video file
    public_id: String,  // Cloudinary public ID
    url: String        // Cloudinary URL
  },
  createdAt: Date,      // Record creation timestamp
  updatedAt: Date       // Record update timestamp
}
```

## Notes for Frontend Developers
1. All requests requiring file uploads must use `multipart/form-data`
2. The API uses JWT for authentication, send token in Authorization header
3. For arrays (like languages and genres), stringify the array before appending to FormData
4. All dates should be in ISO format (YYYY-MM-DD)
5. Media files are distributed across multiple Cloudinary accounts automatically
6. Always handle potential error responses in your frontend code
7. Trailer URL must be a valid YouTube URL
8. Genres must be from the predefined list of valid genres