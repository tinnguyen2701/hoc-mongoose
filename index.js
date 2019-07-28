const express = require("express");
const mongoose = require("mongoose");

const Person = require("./models/personModel");
const Story = require("./models/storyModel");

mongoose
  .connect("mongodb://localhost/test-mongoose", { useNewUrlParser: true })
  .then(() => console.log("connected mongoose"))
  .catch(() => console.log("unConnected mongoose"));
const app = express();

app.use(async (req, res, next) => {
  //   const newPerson = new Person({
  //     name: "2",
  //     age: 69
  //   });
  //   newPerson
  //     .save()
  //     .then(() => {
  //       const newStory = new Story({
  //         title: "st 2",
  //         author: newPerson._id
  //       });
  //       newStory
  //         .save()
  //         .then(() => {
  //           console.log(newStory);
  //           console.log(newPerson);
  //         })
  //         .catch(err => console.log("luu story was wrong"));
  //     })
  //     .catch(err => console.log(err));

  //   await Story.deleteMany({});

  // await Story.findOne({ title: "st 2" })
  //   .populate("author", "name")
  //   .then(story => {
  //     console.log(story);
  //   })
  //   .catch(err => console.log("sth went wrong"));

  //   const newPerson = new Person({
  //     name: "4",
  //     age: 69
  //   });
  //   const story = await Story.findOne({ title: "st 2" });
  //   await newPerson.save().then(() => {
  //     story.fans.push({ _id: newPerson._id });
  //     story
  //       .save()
  //       .then(() => console.log(story))
  //       .catch(() => console.log("save wrong"));
  //   });

  //   await Story.findOne({ title: "st 2" })
  //     .populate("author")
  //     .populate({
  //       path: "fans",
  //       match: { age: { $gte: 21 } },
  //       select: "name -_id", // just get only name
  //       options: { limit: 2 }
  //     })
  //     .then(story => {
  //       console.log(story);
  //     })
  //     .catch(err => console.log("sth went wrong"));

  next();
});

app.get("/app", (req, res) => {
  res.send("ok");
});

app.listen(3000, () => console.log("server is running"));
