//************ sign_in **************/
// 检测登陆状态
export function checkToken() {
    alert("未实现登陆状态检测：checkToken()");
    return false;
}
// 传递登录请求并接收token
export function login(user_info) {
    alert("未实现发出登录请求并接收token");
    alert(`id: ${user_info.student_id}\npassword: ${user_info.password}`);
    return "";
}
//************ member **************/
var Shift;
(function (Shift) {
    Shift["morning"] = "\u65E9\u73ED";
    Shift["afternoon"] = "\u5348\u73ED";
    Shift["evening1"] = "\u665A\u4E00";
    Shift["evening2"] = "\u665A\u4E8C";
})(Shift || (Shift = {}));
;
var Weekday;
(function (Weekday) {
    Weekday["Monday"] = "\u5468\u4E00";
    Weekday["Tuesday"] = "\u5468\u4E8C";
    Weekday["Wednesday"] = "\u5468\u4E09";
    Weekday["Thursday"] = "\u5468\u56DB";
    Weekday["Friday"] = "\u5468\u4E94";
    Weekday["Saturday"] = "\u5468\u516D";
    Weekday["Sunday"] = "\u5468\u65E5";
})(Weekday || (Weekday = {}));
// 要求保证顺序
export function get_duties() {
    alert("未实现get_duties");
    return [
        { date: "2021.10.25", weekday: Weekday.Monday, shift: Shift.evening1, onduty: true, relief: false },
        { date: "2021.10.26", weekday: Weekday.Tuesday, shift: Shift.evening2, onduty: false, relief: false },
        { date: "2021.10.26", weekday: Weekday.Monday, shift: Shift.evening1, onduty: false, relief: true }
    ];
}
// 签到
// 直接获取 cookie 发送，不加额外参数，由后端根据时间判断是否可签到返回是否成功
export function sign_in() {
    alert("未实现签到sign_in");
    return false;
}
// 请假
export function ask_for_absent({ date, shift }) {
    alert("未实现请假ask_for_absent");
    alert(`date: ${date}\nshift: ${shift}`);
    return false;
}
export function ask_for_substitute({ date, shift }, target) {
    alert("未实现求替ask_for_substitude");
    alert(`date: ${date}\nshift: ${shift}\ntarget: ${target}`);
    return false;
}
export function get_substitutes() {
    alert("未实现get_substitutes");
    return [
        { date: "2021.11.01", weekday: Weekday.Monday, shift: Shift.morning, from: "张斌" }
    ];
}
export function accept_substitute(request) {
    alert("未实现接受求替accept_substitute");
    return false;
}
export function refuse_substitute(request) {
    alert("未实现拒绝求替refuse_substitute");
    return false;
}
var Status;
(function (Status) {
    // 缺勤？迟到？被替？替班？
    Status["normal"] = "\u5230\u5C97";
})(Status || (Status = {}));
export function get_records() {
    alert("未实现get_records");
    return [
        { date: "2021.10.25", weekday: Weekday.Monday, shift: Shift.morning, status: Status.normal },
        { date: "2021.10.25", weekday: Weekday.Monday, shift: Shift.afternoon, status: Status.normal },
        { date: "2021.10.25", weekday: Weekday.Monday, shift: Shift.evening2, status: Status.normal },
    ];
}
