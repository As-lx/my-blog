import Mock from "mockjs";
import qqPng from "E:\\code\\DM\\myProject\\my-blog\\my-blog\\public\\img\\qq.png";
import weChatPng from "E:\\code\\DM\\myProject\\my-blog\\my-blog\\public\\img\\weChat.png";
import avatar from "E:\\code\\DM\\myProject\\my-blog\\my-blog\\public\\img\\avatar.png";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: avatar,
    siteTitle: "我的个人空间",
    github: "https://github.com/As-lx",
    qq: "1051663041",
    qqQrCode: qqPng,
    weixin: "18297406835",
    weixinQrCode:weChatPng,
    mail: "gis_lx@163.com",
    icp: "黑ICP备17001719号",
    githubName: "As-lx",
    favicon:avatar,
  },
});
