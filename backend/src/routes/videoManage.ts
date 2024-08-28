import express from 'express'
import isAuthenticated from '../middlewares/userMiddleware.js';
import { deleteVideo, getAllSubject, getAllVideo, getSearchResult, getUserVideo, getVideo, updateVideo, uploadThumbnail, uploadVideo } from '../controllers/video.js';
import { fileUpload, imageUpload, singleThumnailUpload } from '../middlewares/fileHandling.js';
const app =express()

app.get('/all',getAllVideo)
app.get('/all-subjects',getAllSubject)
app.get('/search-result',getSearchResult)
app.get('/user-video',isAuthenticated,getUserVideo)
app.post('/upload-video',isAuthenticated,fileUpload,uploadVideo)
app.put('/upload-video-thumbnail',isAuthenticated,singleThumnailUpload,uploadThumbnail)
app.delete('/delete-video/:id',isAuthenticated,deleteVideo)
app.put('/update-video/:id',isAuthenticated,updateVideo)
app.get('/:id',getVideo)

export default app;