// 我们要一个什么样的验证方法
// 参数
const rules = {
  userName: 2,
  password: 6
};

const errinfo = {
  userName: `您的用户名不许为空，切长度不小于${rules.userName}位`,
  password: `密码不能为空，切长度不能小于${rules.password}`
};

// userName,password,rePassword,type
export default ({ userName, password, rePassword, type }) => {
  // console.log(userName, password, rePassword, type);
  // 1.是登录
  if (type === "login" || type === "register") {
    if (!userName || userName.length < rules.userName) {
      alert(errinfo.userName);
      return false;
    }
    if (!password || password.length < rules.password) {
      alert(errinfo.password);
      return false;
    }
  }
  // 2.是注册
  if (type == "register") {
    if (password != rePassword) {
      alert("两次面不一致");
      return false;
    }
  }

  // 如果上面都符合条件 那么要返回一个true
  return true;
};
