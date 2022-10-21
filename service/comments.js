const CommentsRepository = require("../repository/comments");

class CommentsService {
  membersRepository = new MembersRepository();
}

module.exports = CommentsService;
