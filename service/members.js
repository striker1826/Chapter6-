const MembersRepository = require("../repository/members");

const crypto = require("crypto");

function pbkdf2(password, salt, iterations, len, hashType) {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(password, salt, iterations, len, hashType, (err, key) => {
      err ? reject(err) : resolve(key.toString("base64"));
    });
  });
}

class MembersService {
  membersRepository = new MembersRepository();
  updateMember = async (userId, nickname, password) => {
    const hashPassword = await pbkdf2(password, key, 121381, 121, "sha512");
    const updateMember = await this.membersRepository.updateMember(
      userId,
      nickname,
      hashPassword
    );
    return updateMember;
  };
}

module.exports = MembersService;
