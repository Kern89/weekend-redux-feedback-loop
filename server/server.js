const express = require('express');
const app = express();
const feedbackRouter = require('./routes/feedback.router')
const reviewRouter = require('./routes/review.router')
const PORT = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/api/feedback', feedbackRouter);

app.use('/api/review', reviewRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
