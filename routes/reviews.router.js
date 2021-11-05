const reviewsRouter = require("express").Router();
const { getAllReviews, getReviewsById, updateReviewVotes, getCommentsByReview, addCommentByReview} = require("../controllers/reviews.controllers");

reviewsRouter.route("/")
.get(getAllReviews)
.all((req, res) => { res.status(405).send({msg:'Method not allowed'})})

reviewsRouter.route("/:review_id")
.get(getReviewsById)
.patch(updateReviewVotes)
.all((req, res) => { res.status(405).send({msg:'Method not allowed'})})

reviewsRouter.route("/:review_id/comments")
.get(getCommentsByReview)
.post(addCommentByReview)
.all((req, res) => { res.status(405).send({msg:'Method not allowed'})})

module.exports = reviewsRouter;

