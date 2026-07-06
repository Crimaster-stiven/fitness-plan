// Chinese PLAN exercise name → English dataset name mapping
const EXERCISE_MAP = {
  "杠铃卧推": "barbell bench press",
  "杠铃俯身划船": "barbell bent over row",
  "站姿杠铃推举（OHP）": "barbell standing close grip military press",
  "引体向上（或辅助引体）": "assisted parallel close grip pull-up",
  "杠铃弯举": "barbell curl",
  "绳索三头下压": "cable triceps pushdown (v-bar)",
  "杠铃深蹲": "barbell squat (on knees)",
  "罗马尼亚硬拉（RDL）": "barbell romanian deadlift",
  "腿举": "lever alternate leg press",
  "坐姿腿弯举": "lever seated leg curl",
  "站姿小腿提踵": "barbell standing calf raise",
  "平板支撑": "",
  "哑铃卧推": "dumbbell bench press",
  "坐姿绳索划船": "cable seated row",
  "上斜哑铃飞鸟": "dumbbell incline fly",
  "哑铃侧平举": "dumbbell lateral raise",
  "锤式弯举": "dumbbell hammer curl",
  "绳索面拉": "",
  "前蹲（或高杠深蹲）": "barbell front squat",
  "保加利亚分腿蹲": "dumbbell single leg split squat",
  "哑铃罗马尼亚硬拉": "dumbbell romanian deadlift",
  "坐姿腿屈伸": "lever leg extension",
  "俯卧腿弯举": "lever lying leg curl",
  "坐姿小腿提踵": "barbell seated calf raise"
};

// Reverse map: English name → Chinese name
const ENGLISH_TO_ZH = {};
for (const [zh, en] of Object.entries(EXERCISE_MAP)) {
  ENGLISH_TO_ZH[en.toLowerCase()] = zh;
}

// Category translations
const CAT_ZH = {
  "back": "背部",
  "cardio": "有氧",
  "chest": "胸部",
  "lower arms": "前臂",
  "lower legs": "小腿",
  "neck": "颈部",
  "shoulders": "肩部",
  "upper arms": "上臂",
  "upper legs": "大腿",
  "waist": "腰腹"
};

const EQUIP_ZH = {
  "assisted": "辅助器械",
  "band": "弹力带",
  "barbell": "杠铃",
  "body weight": "自重",
  "bosu ball": "波速球",
  "cable": "绳索/龙门架",
  "dumbbell": "哑铃",
  "elliptical machine": "椭圆机",
  "ez barbell": "EZ杠",
  "hammer": "锤子",
  "kettlebell": "壶铃",
  "leverage machine": "组合器械",
  "medicine ball": "药球",
  "olympic barbell": "奥杆",
  "resistance band": "阻力带",
  "roller": "滚轴",
  "rope": "绳子",
  "skierg machine": "滑雪机",
  "sled machine": "雪橇机",
  "smith machine": "史密斯机",
  "stability ball": "健身球",
  "stationary bike": "固定单车",
  "stepmill machine": "台阶机",
  "tire": "轮胎",
  "trap bar": "六角杆",
  "upper body ergometer": "上肢功率计",
  "weighted": "负重",
  "wheel roller": "健腹轮"
};

// Body part translation
const BODYPART_ZH = {
  "back": "背部",
  "cardio": "心肺",
  "chest": "胸部",
  "lower arms": "前臂",
  "lower legs": "小腿",
  "neck": "颈部",
  "shoulders": "肩部",
  "upper arms": "上臂",
  "upper legs": "大腿",
  "waist": "腰腹"
};
