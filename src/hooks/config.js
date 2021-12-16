import { reactive } from "vue";
const github = reactive({
  deployment_ciphertext:
    "icM7o2Up7ZDP73FJdAdGtRwtC7kEDI5UYeYwVmYwlpZMj2YC1NM9IKFJFVSEOgRg", //部署令牌密文
  read_only_auth: "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", //只读令牌
  repo: "myblog_demo", //项目名称
  ref: "notes", //项目分支
  note_root_path: "note_root", //笔记目录
});
export { github };