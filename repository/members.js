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

  deleteMember = async (userId, hashPassword) => {
    await Members.destroy({ where: { userId, hashPassword } });
    return;
  };
}

module.exports = MembersRepository;
