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
      // status: "success",
      // message: "Successfully fetch data for Anuoluwapo Oderinlo",
      // data,

      slackUsername: "AnuEze",
      backend: true,
      age: 31,
      bio: "My name is Anuoluwapo Oderinlo, a fullstack javascript developer with 2 - 3 years industrial experience in building fullstack application. I am vast in MERN stack. I was part of the finalist in HNG7. I decided to challenge myself in this internship and collaborate with others in building applications that will solve problems. Hopefully I will be of help and learn from everyone. Thank you",
    });
  } catch (error) {
    console.log(error);
  }
};

exports.evaluate = (req, res) => {
  try {
    const { operation_type, x, y } = req.body;
    let result;
    if (operation_type === "addition") {
      result = x + y;
    } else if (operation_type === "subtraction") {
      result = x - y;
    } else if (operation_type === "multiplication") {
      result = x * y;
    }

    res.status(200).json({
      slackUsername: "AnuEze",
      result: result,
      operation_type: operation_type,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "failed",
      error,
    });
  }
};
