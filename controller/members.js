const MembersService = require("../service/members");

class MembersController {
  membersService = new MembersService();

  updateMember = async (req, res, next) => {
    try {
      const { userId, nickname, password } = req.body;
      await this.membersService.updateMember(userId, nickname, password);
      res.stauts(201).send("회원정보가 수정되었습니다");
    } catch (err) {
      res.status(400).send("입력하신 정보가 올바른지 확인해주세요");
    }
  };
}

module.exports = MembersController;
