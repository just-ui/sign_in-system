//************ sign_in **************/

export interface UserInfo {
	student_id: string;
	password: string;
}

// 检测登陆状态
export function checkToken(): boolean {
	alert("未实现登陆状态检测：checkToken()")
	return false;
}

// 传递登录请求并接收token
export function login(user_info: UserInfo): string {
	alert("未实现发出登录请求并接收token")
	alert(`id: ${user_info.student_id}\npassword: ${user_info.password}`)
	return "";
}

//************ member **************/

enum Shift {
	morning = "早班", afternoon = "午班", evening1 = "晚一", evening2 = "晚二"
};
enum Weekday {
	Monday = "周一", Tuesday = "周二", Wednesday = "周三", Thursday = "周四", Friday = "周五", Saturday = "周六", Sunday = "周日"
}

interface Base {
	date: string;
	weekday: Weekday;
	shift: Shift;
}

export interface Duty extends Base {
	onduty: boolean; // 是否可签到
	relief: boolean; // 是否为替班
}

// 要求保证顺序
export function get_duties(): Duty[] {
	alert("未实现get_duties");
	return [
		{ date: "2021.10.25", weekday: Weekday.Monday, shift: Shift.evening1, onduty: true, relief: false },
		{ date: "2021.10.26", weekday: Weekday.Tuesday, shift: Shift.evening2, onduty: false, relief: false },
		{ date: "2021.10.26", weekday: Weekday.Monday, shift: Shift.evening1, onduty: false, relief: true }
	];
}

// 签到
// 直接获取 cookie 发送，不加额外参数，由后端根据时间判断是否可签到返回是否成功
export function sign_in(): boolean {
	alert("未实现签到sign_in");
	return false;
}

// 请假
export function ask_for_absent({ date, shift }: Duty): boolean {
	alert("未实现请假ask_for_absent")
	alert(`date: ${date}\nshift: ${shift}`);
	return false;
}

export function ask_for_substitute({ date, shift }: Duty, target: string): boolean {
	alert("未实现求替ask_for_substitude")
	alert(`date: ${date}\nshift: ${shift}\ntarget: ${target}`);
	return false;
}

export interface Substitute extends Base {
	from: string;
}

export function get_substitutes(): Substitute[] {
	alert("未实现get_substitutes")
	return [
		{ date: "2021.11.01", weekday: Weekday.Monday, shift: Shift.morning, from: "张斌" }
	]
}

export function accept_substitute(request: Substitute): boolean {
	alert("未实现接受求替accept_substitute")
	return false;
}

export function refuse_substitute(request: Substitute): boolean {
	alert("未实现拒绝求替refuse_substitute")
	return false;
}

enum Status {
	// 缺勤？迟到？被替？替班？
	normal = "到岗", 
}

export interface DutyRecord extends Base {
	status: Status;
}

export function get_records(): DutyRecord[] {
	alert("未实现get_records");
	return [
		{ date: "2021.10.25", weekday: Weekday.Monday, shift: Shift.morning, status: Status.normal },
		{ date: "2021.10.25", weekday: Weekday.Monday, shift: Shift.afternoon, status: Status.normal },
		{ date: "2021.10.25", weekday: Weekday.Monday, shift: Shift.evening2, status: Status.normal },
	];
}