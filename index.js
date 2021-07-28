const sharp = require("sharp");

const images = ["large.jpeg", "test.jpg"];

for (let image of images) {
  sharp(`./initial/${image}`)
    .extract({
      left: 0,
      top: 0,
      width: 400,
      height: 400,
    })
    .toFile(
      `./resized/${image.split(".")[0]}.new-extract.jpeg`,
      function (err) {
        if (err) {
          console.log("Image bad extract area");
        }
      }
    );

  sharp(`./initial/${image}`)
    .resize(400, 400)
    .toFile(`./resized/${image.split(".")[0]}.new-resize.jpeg`, function (err) {
      if (err) {
        console.log("Image bad extract area");
      }
    });
}

(async () => {
  const semiTransparentRedPng = await sharp({
    create: {
      width: 1000,
      height: 1000,
      channels: 4,
      background: { r: 255, g: 0, b: 0, alpha: 0.5 },
    },
  })
    .jpeg()
    .toBuffer();

  console.log(semiTransparentRedPng);

  sharp(semiTransparentRedPng)
    .resize(600, 600)
    .toFile("./resized/buffer.jpeg", (err) => {
      if (err) {
        console.error(err);
      }
    });
})();
