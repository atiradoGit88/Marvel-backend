const db = require("../db/dbConfig.js");

const getAllAvengers = async() => {
  try {
    const allAvengers = await db.any("SELECT * FROM avengers");
    return allAvengers; 
  } catch (error) {
    return error;
  }
};

const getAvenger = async (id) => {
    try {
      const oneAvenger = await db.one("SELECT * FROM avengers WHERE id=$1", id);
      return oneAvenger;
    } catch (err) {
      return err;
    }
  };
  
  const newAvenger = async (avenger) => {
    try {
      const newAvenger = await db.one(
        "INSERT INTO avengers ( vigilante_title, abilities, birthplace, is_ally, power_scale, alter_ego, issue_appearance, file_photo ) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
        [ avenger.vigilante_title, avenger.abilities, avenger.birthplace, avenger.is_ally, avenger.power_scale, avenger.alter_ego, avenger.issue_appearance, avenger.file_photo ]
      );
      console.log(newAvenger)
      return newAvenger;
    } catch (err) {
      return err;
    }
  };
  
  const deleteAvenger = async (id) => {
    try {
      const deletedAvenger = await db.one(
        "DELETE FROM avengers WHERE id = $1 RETURNING *",
        id
      );
      return deletedAvenger;
    } catch (err) {
      return err;
    }
  };
  
  const updateAvenger = async (id, avenger) => {
    try {
      const updatedAvenger = await db.one(
        "UPDATE avengers SET vigilante_title=$1, abilitues=$2, birthplace=$3, is_ally=$4, power_scale=$5, alter_ego=$6, issue_appearance=$7, file_photo=$8 WHERE id =$9 RETURNING *",
        [avenger.vigilante_title, avenger.abilities, avenger.birthplace, avenger.is_ally, avenger.power_scale, avenger.alter_ego, avenger.issue_appearance, avenger.file_photo, id]
      );
      return updatedAvenger;
    } catch (err) {
      return err;
    }
  };
  module.exports = {
    getAllAvengers,
    getAvenger,
    newAvenger,
    deleteAvenger,
    updateAvenger,
  };

