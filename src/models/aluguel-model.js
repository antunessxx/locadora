import db from "../config/db.js";

const aluguelSchema = new db.Schema({
      rented_by: {
            type: ObjectId,
            required: true,
          },
      movie_rented: {
            type: ObjectId,
            required: true,
          },
          rent_date: {
            type: date,
            required: true,
          },
            return_date: {
            type: date,
            required: true,
          },
 });

const Aluguel = db.model("Aluguel", aluguelSchema);

export default Aluguel;