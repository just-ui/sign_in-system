// 考虑修改表单格式，输出和输出信息

/// <reference path="./post_api.ts" />

import { UserInfo, login, checkToken } from "./post_api";


window.onload = function() {
	alert("loading");
	// 处理已经存有有效token情形，此时可直接跳转
	// if (checkToken()) 
	(<HTMLElement>document.getElementById("i_button")).onclick = function() {
		var user_info: UserInfo = getInput();
		if (!checkInput(user_info))	{
			alert("非法的输入\n请重新填写！");
			return;
		}
		var token = login(user_info);
		// 写入cookie
		// 跳转网站
	}
}

// 注意此处的 ID 变化
function getInput(): UserInfo {
	return {
		student_id: (<HTMLInputElement>document.getElementById("student_id")).value,
		password: (<HTMLInputElement>document.getElementById("password")).value
	}
}

function checkInput(user_info: UserInfo): boolean {
	// 仅检查 学号
	return /^\d{10}$/.test(user_info.student_id);
}