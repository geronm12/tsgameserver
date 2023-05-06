import mongoose from "mongoose";

export default (() => {
  mongoose.connect("string", {}).then((res) => {
    console.log("conectado correctamente a la base de mongoose");
  });
})();
