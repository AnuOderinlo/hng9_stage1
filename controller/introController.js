exports.introController = (req, res) => {
  try {
    const data = {
      slackUsername: "AnuEze",
      backend: true,
      age: 31,
      bio: "My name is Anuoluwapo Oderinlo, a fullstack javascript developer with 2 - 3 years industrial experience in building fullstack application. I am vast in MERN stack. I was part of the finalist in HNG7. I decided to challenge myself in this internship and collaborate with others in building applications that will solve problems. Hopefully I will be of help and learn from everyone. Thank you",
    };
    // res.set("access-control-allow-origin", "*");
    res.status(200).json({
      status: "success",
      message: "Successfully fetch data for Anuoluwapo Oderinlo",
      data,
    });
  } catch (error) {
    console.log(error);
  }
};
