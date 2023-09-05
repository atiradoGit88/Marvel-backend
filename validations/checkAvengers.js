const checkVigilanteTitle = (req, res, next) => {
    if (req.body.vigilante_title) {
      next();
    } else {
      res.status(400).json({ error: "Vigilante Title is required" });
    }
  };
  
  const checkBirthPlace = (req, res, next) => {
    if (req.body.birthplace) {
      next();
    } else {
      res.status(400).json({ error: "Birth place is required" });
    }
  };
  
  const checkBoolean = (req, res, next) => {
    const { is_ally } = req.body;
  
    if (
      is_ally == "true" ||
      is_ally == "false" ||
      is_ally == true ||
      is_ally == false ||
      is_ally == undefined
    ) {
      next();
    } else {
      res.status(400).json({ error: "is_ally must be a boolean value" });
    }
  };
  
  module.exports = { checkBoolean, checkVigilanteTitle, checkBirthPlace };