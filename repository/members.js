const { Members } = require("../models");

class MembersRepository {
  updateMember = async (userId, nickname, password) => {
    await Members.update(
      {
        userId,
        nickname,
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
