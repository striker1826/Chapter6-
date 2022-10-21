const MembersService = require("../service/members");

class MembersController {
  membersService = new MembersService();

  updateMember = async (req, res, next) => {
    try {
      const { userId, password } = req.body;
      await this.membersService.updateMember(userId, password);
      res.stauts(201).send("회원정보가 수정되었습니다");
    } catch (err) {
      res.status(400).send("입력하신 정보가 올바른지 확인해주세요");
    }
  };

  deleteMember = async (req, res, next) => {
    try {
      const { userId, password } = req.body;
      await this.membersService.deleteMember(userId, password);
      res.stauts(201).send("회원정보가 삭제되었습니다");
    } catch (err) {
      res.status(400).send("존재하지 않는 회원입니다.");
    }
  };
}

module.exports = MembersController;
