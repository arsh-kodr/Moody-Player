var ImageKit = require("imagekit");
let mongoose = require("mongoose")

var imagekit = new ImageKit({
  publicKey: process.env.publicKey,
  privateKey: process.env.privateKey,
  urlEndpoint: process.env.urlEndpoint,
});

function uploadFile(file) {
  return new Promise((resolve, reject) => {
    imagekit.upload(
      {
        file: file.buffer,
        fileName: (new mongoose.Types.ObjectId()).toString(),
        folder:"cohort-audio"
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
}

module.exports = uploadFile;