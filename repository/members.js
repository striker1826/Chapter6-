const { Members } = require("../models");

class MembersRepository {
  updateMember = async (userId, password) => {
    await Members.update(
      {
        userId,
        password,
      },
      {
        where: {
          userId,
          password,
        },
      }
    );
    return;
  };
}

module.exports = MembersRepository;
